/* jshint -W104, -W069, -W119*/
var express = require('express'),
    customerJson = require('../data/customerJson.js'),
    moment = require('moment');

var routes = function (Customer) {
    var customerRouter = express.Router();
    // Dynamo db configuration
    var AWS = require('aws-sdk');
    var dynamoDBConfiguration = {
        "accessKeyId": "AKIAIDIGQWS2RO5Q37DA",
        "secretAccessKey": "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",
        "region": "us-east-1"
    };
    AWS.config.update(dynamoDBConfiguration);
    var tableName = 'user_queue';

    customerRouter.route('/admin')
        .get(function (req, res) {
            for (var cus of customerJson) {
                cus.checkinTime = moment().format('YYYY-MM-DDTHH:mm:ss');
            }
            Customer.insertMany(customerJson, function (err, data) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(data);
                }
            });
        });

    customerRouter.route('/')
        .post(function (req, res) {
            var customer = new Customer(req.body);
            customer.checkinTime = moment().format('YYYY-MM-DDTHH:mm:ss');

            customer.save(function (err, customer) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(201).json(customer);
                }
            });
        })
        .get(function (req, res) {
            // console.log("Scanning " + tableName + " table.");
            Customer.remove({}, function (err) {
                if (err) {
                    console.log('error deleting records', err);
                } else {
                    var documentClient = new AWS.DynamoDB.DocumentClient();
                    var params = {
                        TableName: tableName,
                        FilterExpression: 'handled = :handled',
                        ExpressionAttributeValues: { ':handled': 0 }
                    };
                    documentClient.scan(params, (err, data) => {
                        if (err) {
                            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
                        } else {
                            // console.log(data.Items);
                            Customer.insertMany(data.Items, function (err, data) {
                                if (err) {
                                    res.status(500).send(err);
                                } else {
                                    res.json(data);
                                }
                            });
                        }
                    });
                }
            });
        });

    customerRouter.use('/:customerId', function (req, res, next) {
        var query = {
            phone_number: req.body.phone_number,
            account_number: req.body.account_number
        };
        Customer.find(query, function (err, customer) {
            if (err) {
                res.status(500).send(err);
            } else if (customer) {
                req.customer = customer[0];
                next();
            } else {
                res.status(404).send('no customer found');
            }
        });
    });
    customerRouter.route('/:customerId')
        .get(function (req, res) {
            res.json(req.customer);
        })
        .put(function (req, res) {
            var payload = {
                "proposed_time": req.customer.proposed_time,
                "problem": req.customer.problem,
                "num_lines": req.customer.num_lines,
                "services": req.customer.services,
                "handled": 1,
                "phone_number": req.customer.phone_number,
                "checkin_timestamp": req.customer.checkin_timestamp,
                "account_number": req.customer.account_number,
                "name": req.customer.name
            };

            var documentClient = new AWS.DynamoDB.DocumentClient();
            console.log("Updating the item...", payload);
            documentClient.put({
                'TableName': tableName,
                'Item': payload
            }, function (err, data) {
                if (err) {
                    console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
                    res.status(500).send(err);
                } else {
                    console.log("UpdateItem succeeded:", data);
                    res.json(payload);
                }
            });
        })
        .patch(function (req, res) {
            var cust = JSON.parse(JSON.stringify(req.customer));

            delete cust._id;
            delete cust.__v;
            cust.phone_number = parseInt(cust.phone_number);
            req.customer = cust.handled = 1;
            req.customer = cust.clearedTime = moment().format('YYYY-MM-DDTHH:mm:ss');
            var documentClient = new AWS.DynamoDB.DocumentClient();
            // console.log(cust);
            documentClient.put({
                'TableName': tableName,
                'Item': cust
            }, (err, data) => {              //needing stringify on this for avoiding silent errors is ridiculous
                if (err) {
                    console.log("Error: " + err);
                    res.status(500).send(err);
                }
                else {
                    // console.log("Success: " + data);
                    req.customer = JSON.parse(JSON.stringify(cust));
                    req.customer.save(function (err) {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.json(cust);
                        }
                    });
                }
            });
        })
        .delete(function (req, res) {
            req.customer.remove(function (err) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(204).send('removed');
                }
            });
        });

    return customerRouter;
};

module.exports = routes;


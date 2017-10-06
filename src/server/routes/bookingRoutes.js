/* jshint -W104 */
var express = require('express'),
    rn = require('random-number'),
    sortJsonArray = require('sort-json-array'),
    moment = require('moment');

var routes = function (Customer) {
    var bookingRouter = express.Router();

    // Dynamo db configuration
    var AWS = require('aws-sdk');
    var dynamoDBConfiguration = {
        "accessKeyId": "AKIAIDIGQWS2RO5Q37DA",
        "secretAccessKey": "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",
        "region": "us-east-1"
    };
    AWS.config.update(dynamoDBConfiguration);
    var tableName = 'user_queue';
    // var gen = rn.generator({
    //     min: 5
    //     , max: 20
    //     , integer: true
    // });

    // var gen100 = rn.generator({
    //     min: 1
    //     , max: 100
    //     , integer: true
    // });

    // var genAccount = rn.generator({
    //     min: 100000000
    //     , max: 999999999
    //     , integer: true
    // });

    // var gen10 = rn.generator({
    //     min: 1
    //     , max: 10
    //     , integer: true
    // });

    // jsonItem = {
    //     'checkin_timestamp': moment().format('YYYY-MM-DDTHH:mm:ss'),
    //     'proposed_time': proposed_time.format('YYYY-MM-DDTHH:mm:ss'),
    //     'name': intentSlots.name.value,
    //     'phone_number': parseInt(myPhoneNumber),
    //     'problem': intentSlots.problem.value,
    //     'num_lines': numLines,
    //     'account_number': accountNumber,
    //     'services': hasServices,
    //     'handled': 0
    //     };

    bookingRouter.route('/')
        .get(function (req, res) {

            var documentClient = new AWS.DynamoDB.DocumentClient();
            var params = {
                TableName: tableName,
                FilterExpression: 'handled = :handled',
                ExpressionAttributeValues: { ':handled': 0 }
            };

            console.log("Scanning " + tableName + " table.");
            documentClient.scan(params, (err, data) => {
                if (err) {
                    console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
                } else {
                    console.log(data);
                    console.log("Query succeeded.");
                }
            });





            // var nextTime = moment().add(gen(), 'm');

            // if (data.Count > 0) {
            //     var sortedData = sortJsonArray(data.Items, 'proposed_time', 'des');
            //     var nextWait = gen();
            //     console.log(JSON.stringify(sortedData));
            //     var previousSlot = moment(sortedData[0].proposed_time);
            //     if (previousSlot.isBefore(moment())) {
            //         console.log("Warning: your employees are REALLY SLOW. DOUBLING RANDOM WAIT TIME AT CURRENT");
            //         nextTime = moment().add(nextWait * 2, 'm');
            //     } else {
            //         nextTime = previousSlot.add(nextWait, 'm');
            //     }
            //     //if the current time is already ahead of the previous proposed wait time
            //     //then DOUBLE the random wait time and set a new wait time. These employees must be REAL SLOW

            // }

            // documentClient.scan(scanQuery,(err, data) => {              //needing stringify on this for avoiding silent errors is ridiculous
            //     if (err) console.log("Error: " + err);
            //     else console.log("Success: " + JSON.stringify(data));
            //     var nextTime = moment().add(gen(), 'm');

            //     if(data.Count > 0){
            //         var sortedData = sortJsonArray(data.Items,'proposed_time','des');
            //         var nextWait = gen();
            //         console.log(JSON.stringify(sortedData));
            //         var previousSlot = moment(sortedData[0].proposed_time);
            //         if(previousSlot.isBefore(moment())){
            //             console.log("Warning: your employees are REALLY SLOW. DOUBLING RANDOM WAIT TIME AT CURRENT");
            //             nextTime = moment().add(nextWait*2, 'm');
            //         }else{
            //             nextTime = previousSlot.add(nextWait, 'm');
            //         }
            //         //if the current time is already ahead of the previous proposed wait time
            //         //then DOUBLE the random wait time and set a new wait time. These employees must be REAL SLOW

            //     }
            //     callback(nextTime);
        });

    // bookingRouter.use('/:customerId', function (req, res, next) {
    //     Customer.findById(req.params.customerId, function (err, customer) {
    //         if (err) {
    //             res.status(500).send(err);
    //         } else if (customer) {
    //             req.customer = customer;
    //             next();
    //         } else {
    //             res.status(404).send('no customer found');
    //         }
    //     });
    // });
    // bookingRouter.route('/:customerId')


    // putDynamoItem(jsonItem, theResult => {
    //     this.response.speak(speechOutput);
    //     this.emit(':responseReady');
    // });

    // function putDynamoItem(params, callback) {
    //     var documentClient = new AWS.DynamoDB.DocumentClient();
    //     console.log("JSON Item: %j", params);

    //     documentClient.put({
    //         'TableName': tableName,
    //         'Item': params
    //     }, (err, data) => {              //needing stringify on this for avoiding silent errors is ridiculous
    //         if (err) console.log("Error: " + err);
    //         else console.log("Success: " + data);
    //         callback(data);
    //     });
    // }



    // .get(function (req, res) {
    //     res.json(req.customer);
    // })
    // .put(function (req, res) {
    //     req.customer.name = req.body.name;
    //     req.customer.phone = req.body.phone;
    //     req.customer.account = req.body.account;
    //     req.customer.visitReason = req.body.visitReason;
    //     req.customer.clearedTime = Date.now();
    //     req.customer.save(function (err) {
    //         if (err) {
    //             res.status(500).send(err);
    //         } else {
    //             res.json(req.customer);
    //         }
    //     });
    // })
    // .patch(function (req, res) {
    //     req.customer.clearedTime = Date.now();
    //     req.customer.save(function (err) {
    //         if (err) {
    //             res.status(500).send(err);
    //         } else {
    //             res.json(req.customer);
    //         }
    //     });
    // })
    // .delete(function (req, res) {
    //     req.customer.remove(function (err) {
    //         if (err) {
    //             res.status(500).send(err);
    //         } else {
    //             res.status(204).send('removed');
    //         }
    //     });
    // });

    return bookingRouter;
};

module.exports = routes;


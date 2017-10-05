var express = require('express'),
    customerJson = require('../data/customerJson.js');

var routes = function (Customer) {
    var customerRouter = express.Router();
    customerRouter.route('/admin')
        .get(function (req, res) {
            for (var cus of customerJson) {
                cus.checkinTime = Date.now();
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
            customer.checkinTime = Date.now();

            customer.save(function (err, customer) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(201).json(customer);
                }
            });
        })
        .get(function (req, res) {
            var query = {};
            Customer.find(query, function (err, customers) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(customers);
                }
            });
        });

    customerRouter.use('/:customerId', function (req, res, next) {
        Customer.findById(req.params.customerId, function (err, customer) {
            if (err) {
                res.status(500).send(err);
            } else if (customer) {
                req.customer = customer;
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
            req.customer.name = req.body.name;
            req.customer.phone = req.body.phone;
            req.customer.account = req.body.account;
            req.customer.visitReason = req.body.visitReason;
            req.customer.clearedTime = Date.now();
            req.customer.save(function (err) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(req.customer);
                }
            });
        })
        .patch(function (req, res) {
            req.customer.clearedTime = Date.now();
            req.customer.save(function (err) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(req.customer);
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


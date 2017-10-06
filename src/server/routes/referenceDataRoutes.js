var express = require('express'),
    referenceDataJson = require('../data/referenceDataJson.js');

var routes = function (ReferenceData) {
    var referenceDataRouter = express.Router();
    referenceDataRouter.route('/admin')
        .get(function (req, res) {
            ReferenceData.insertMany(referenceDataJson, function (err, data) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(data);
                }
            });
        });

    referenceDataRouter.route('/')
        .post(function (req, res) {
            var referenceData = new ReferenceData(req.body);

            referenceData.save(function (err, referenceData) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(201).json(referenceData);
                }
            });
        })
        .get(function (req, res) {
            var query = {};
            ReferenceData.find(query, function (err, references) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(references);
                }
            });
        });

    referenceDataRouter.use('/:referenceDataId', function (req, res, next) {
        ReferenceData.findById(req.params.referenceDataId, function (err, referenceData) {
            if (err) {
                res.status(500).send(err);
            } else if (referenceData) {
                req.referenceData = referenceData;
                next();
            } else {
                res.status(404).send('no referenceData found');
            }
        });
    });
    referenceDataRouter.route('/:referenceDataId')
        .get(function (req, res) {
            res.json(req.referenceData);
        })
        .put(function (req, res) {
            req.referenceData.key = req.body.key;
            req.referenceData.value = req.body.value;
            req.referenceData.save(function (err) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(req.referenceData);
                }
            });
        })
        .patch(function (req, res) {
            req.referenceData.save(function (err) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(req.referenceData);
                }
            });
        })
        .delete(function (req, res) {
            req.referenceData.remove(function (err) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(204).send('removed');
                }
            });
        });

    return referenceDataRouter;
};

module.exports = routes;


var express = require('express'),
    alexaVerifier = require('alexa-verifier'),
    skillsJson = require('../data/skillJson.js'),
    responsestub = require('../misc/response');

var routes = function (Skill) {
    function requestVerifier(req, res, next) {
        alexaVerifier(
            req.headers.signaturecertchainurl,
            req.headers.signature,
            req.rawBody,
            function verificationCallback(err) {
                if (err) {
                    console.log('error', err);
                    res.status(401).json({ message: 'Verification Failure', error: err });
                } else {
                    next();
                }
            }
        );
    }
    var skillRouter = express.Router();
    // skillRouter.use('/', requestVerifier, function(req, res, next) {

    skillRouter.use('/', function (req, res, next) {
        Skill.findOne({}, function (err, skill) {
            if (err) {
                res.status(500).send(err);
            } else if (skill) {
                req.skill = skill;
                next();
            } else {
                res.status(404).send('no skill found');
            }
        });
    });
    skillRouter.route('/')
        .post(function (req, res) {
            console.log('success');
            res.json(responsestub);
            // res.status(201).json(req.skill);
        })
        .get(function (req, res) {
            res.json(responsestub);
            // res.json(req.skill);
        });

    skillRouter.route('/admin')
        .get(function (req, res) {
            Skill.insertMany(skillsJson, function (err, data) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(data);
                }
            });
        });

    return skillRouter;
};

module.exports = routes;
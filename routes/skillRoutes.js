var express = require('express'),
    skillsJson = require('../data/skillJson.js');;
var responsestub = require('../misc/response');

var routes = function (Skill) {
    var skillRouter = express.Router();

    skillRouter.route('/')
        .get(function (req, res) {
            var query = {};
            Skill.find(query, function (err, skills) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(skills);
                    console.log('response stub', responsestub);
                    // res.json(responsestub);
                }
            });
        });
        
    skillRouter.route('/admin')
        .get(function(req, res) {
            Skill.insertMany(skillsJson, function(err, data) {
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
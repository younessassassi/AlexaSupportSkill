var express = require('express');
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
        


    return skillRouter;
};

module.exports = routes;
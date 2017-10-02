var express = require('express');

var routes = function (Skill, db) {
    var skillRouter = express.Router();

    skillRouter.route('/')
        .get(function (req, res) {
            var query = {};
            db.getCollection('Skill').find(query, function (err, skills) {
                console.log('query: ', query);
                if (err) {
                    console.log('err: ', err);
                    res.status(500).send(err);
                } else {
                    res.json(skills);
                }
            });
        });


    return skillRouter;
};

module.exports = routes;
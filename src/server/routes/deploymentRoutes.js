var router = require('express').Router();
var four0four = require('../utils/404')();
var data = require('../data/appJson');

router.get('/surveyreport', getSurveyReport);
router.get('/surveys', getSurveys);
router.get('/survey', getSurvey);
router.get('/newsurvey', insertSurvey);
router.get('/people', getPeople);
router.get('/person/:id', getPerson);
router.get('/definition', getFormDefinition);
router.get('/schema', getFormSchema);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getSurveyReport(req, res, next) {
    res.status(200).send(data.surveyreport);
}

function getSurveys(req, res, next) {
    res.status(200).send(data.surveys);
}

function getSurvey(req, res, next) {
    res.status(200).send(data.survey);
}

function insertSurvey(req, res, next) {
    res.status(200).send({
        'surveyId': '1'
    });
}

function getPeople(req, res, next) {
    res.status(200).send(data.people);
}

function getFormDefinition(req, res, next) {
    res.status(200).send(data.definition);
}

function getFormSchema(req, res, next) {
    res.status(200).send(data.schema);
}

function getPerson(req, res, next) {
    var id = +req.params.id;
    var person = data.people.filter(function(p) {
        return p.id === id;
    })[0];

    if (person) {
        res.status(200).send(person);
    } else {
        four0four.send404(req, res, 'person ' + id + ' not found');
    }
}

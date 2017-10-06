var router = require('express').Router();
var four0four = require('../utils/404')();
var data = require('../data/appJson');
router.get('/text/:phone', sendMail);
router.get('/people', getPeople);
router.get('/person/:id', getPerson);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'echofabulous@gmail.com',
        pass: 'echofab11'
    }
});

function sendMail(req, res) {
    var phoneNumber = +req.params.phone;
    var mailOptions = {
        from: 'echofabulous@gmail.com',
        to: phoneNumber + '@txt.att.net',
        subject: 'AT&T Store visit',
        text: 'This is an AT&T store automated text. We are ready for you. Please come to the front desk for assisstance.'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).send(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.json(info);
        }
    });
}

function getPeople(req, res, next) {
    res.status(200).send(data.people);
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

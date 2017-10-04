var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

// var AWS = require('aws-sdk');
// AWS.config.update({region: 'us-easy-1'});
// var dynamodb = new AWS.DynamoDB();

var db = mongoose.connect('mongodb://younessassassi:echofabulous1@ds157624.mlab.com:57624/heroku_tljqf0tk');

var Book = require('./models/bookModel');
var Skill = require('./models/skillModel');

var app = express();

var port = process.env.PORT || 5000;

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());

var bookRouter = require('./routes/bookRoutes')(Book);
var skillRouter = require('./routes/skillRoutes')(Skill, db);


app.use('/api/books', bookRouter);
app.use('/api/skill', skillRouter);


app.get('/', function(req, res) {
    res.send('welcome to my new API');
});

app.listen(port, function() {
    console.log('My app is running on PORT: ' + port);
});

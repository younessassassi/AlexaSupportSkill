var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    four0four = require('./utils/404')();

var environment = process.env.NODE_ENV;
var client = process.env.client ;
var root = process.env.root;
var temp = process.env.temp;
var index = process.env.index;

// var AWS = require('aws-sdk');
// AWS.config.update({region: 'us-easy-1'});
// var dynamodb = new AWS.DynamoDB();

var db = mongoose.connect('mongodb://younessassassi:echofabulous1@ds157624.mlab.com:57624/heroku_tljqf0tk');
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(logger('dev'));

var Book = require('./models/bookModel');
var Skill = require('./models/skillModel');
var Customer = require('./models/customerModel');

var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var bookRouter = require('./routes/bookRoutes')(Book);
var skillRouter = require('./routes/skillRoutes')(Skill);
var queueRouter = require('./routes/queueRoutes')(Customer);
var deploymentRoutes = require('./routes/deploymentRoutes');

app.use('/api/books', bookRouter);
app.use('/api/skill', skillRouter);
app.use('/api/queue', queueRouter);
app.use('/api/routes', deploymentRoutes);

switch (environment) {
    case 'build':
        console.log('** BUILD **');
        app.use(express.static('./build'));
        // Any invalid calls for templateUrls are under app/* and should return 404
        app.use('/app/*', function (req, res, next) {
            four0four.send404(req, res);
        });
        // Any deep link calls should return index.html
        app.use('/*', express.static('./build/index.html'));
        break;
    default:
        console.log('** DEV **');
        app.use(express.static(client));
        app.use(express.static(root));
        app.use(express.static(temp));

        // Any invalid calls for templateUrls are under app/* and should return 404
        app.use('/app/*', function (req, res, next) {
            four0four.send404(req, res);
        });
        // Any deep link calls should return index.html
        app.use('/*', express.static(index));
        break;
}

app.listen(port, function () {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname +
        '\nprocess.cwd = ' + process.cwd());
});

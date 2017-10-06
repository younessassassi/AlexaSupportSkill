var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var services = {type: String};

var customerModel = new Schema({
    name: { type: String },
    phone_number: { type: String },
    account_number: { type: String },
    problem: { type: String },
    proposed_time: {type: String },
    checkin_timestamp: { type: Date, Default: Date.now },
    cleared_time: { type: Date },
    handled: {type: String},
    services: [services],
    num_lines: {type: String}
});

module.exports = mongoose.model('Customer', customerModel);
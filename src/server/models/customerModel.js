var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var services = {type: String};

var customerModel = new Schema({
    "proposed_time": {type: Date },
    "problem": { type: String },
    "num_lines": {type: Number},
    "services": [services],
    "handled": {type: Number},
    "phone_number": { type: Number },
    "checkin_timestamp": { type: String },
    "account_number": { type: Number },
    "cleared_time": { type: Date },
    "name": { type: String }
});

module.exports = mongoose.model('Customer', customerModel);
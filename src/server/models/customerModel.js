var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var customerModel = new Schema({
    name: { type: String },
    phone: { type: String },
    ban: { type: String },
    visitReason: { type: String },
    checkinTime: { type: Date, Default: Date.now },
    clearedTime: { type: Date }
});

module.exports = mongoose.model('Customer', customerModel);
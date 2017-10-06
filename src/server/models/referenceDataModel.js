var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var referenceDataModel = new Schema({
    key: { type: String, unique: true, required: true, dropDups: true },
    value: { type: String }
});

module.exports = mongoose.model('ReferenceData', referenceDataModel);
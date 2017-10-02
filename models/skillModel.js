var mongoose = require('mongoose'),
Schema = mongoose.Schema;


var subSpeech = {
    type: {type: String},
    text: {type: String}
};

var subCard = {
    type: {type: String},
    title: {type: String},
    content: {type: String}
}

var subResponse = {
    outputSpeech: {subSpeech},
    card: {subCard},
    shouldEndSession: {type: Boolean, default: true}
};

var subAttributes = {
    name: {type: String}
}

var skillResponseSchema = new Schema({
    version: {type: String},
    sessionAttributes: {subAttributes},
    response: {subResponse}
});

module.exports = mongoose.model('Skill', skillResponseSchema);
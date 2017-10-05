/* jshint -W109 */
/* jscs:disable validateQuoteMarks */

module.exports = {
    people: getPeople(),
    schema: getFormSchema(),
    definition: getFormDefinition(),
    survey: getSurvey(),
    surveys: getSurveys(),
    surveyreport: getSurveyReport()
};

function getSurveyReport() {
    return [];
}

function getSurveys() {
    return [{
        "surveyID": "SURV-10",
        "surveyName": "Survey with Keys",
        "surveyComponents": [{
            "componentPosition": 1,
            "componentOptions": {
                "templateOptions": {
                    "label": "state"
                },
                "type": "input",
                "key": "_des6qf5a0"
            },
            "componentType": "question",
            "componentID": "COMP-40"
        }, {
            "componentPosition": 2,
            "componentOptions": {
                "templateOptions": {
                    "label": "First Name"
                },
                "type": "input",
                "key": "_lvrc8bu2d"
            },
            "componentType": "question",
            "componentID": "COMP-41"
        }, {
            "componentPosition": 3,
            "componentOptions": {
                "templateOptions": {
                    "placeholder": "Please enter your last name",
                    "label": "Last Name"
                },
                "type": "input",
                "key": "_chqf1hphl"
            },
            "componentType": "question",
            "componentID": "COMP-42"
        }],
        "surveyDescription": "Use of new unique keys"
    }, {
        "surveyID": "SURV-14",
        "surveyName": "test",
        "surveyComponents": [{
            "componentPosition": 1,
            "componentOptions": {
                "templateOptions": {
                    "placeholder": "test",
                    "label": "test"
                },
                "type": "input",
                "key": "question"
            },
            "componentType": "question",
            "componentID": "COMP-58"
        }],
        "surveyDescription": "test"
    }, {
        "surveyID": "SURV-15",
        "surveyName": "Computer Survey",
        "surveyComponents": [{
            "componentPosition": 1,
            "componentOptions": {
                "templateOptions": {
                    "label": "PC type"
                },
                "type": "input",
                "key": "_844zjfy0t"
            },
            "componentType": "question",
            "componentID": "COMP-110"
        }, {
            "componentPosition": 2,
            "componentOptions": {
                "templateOptions": {
                    "label": "PC age in years"
                },
                "type": "input",
                "key": "_8ytgfb740"
            },
            "componentType": "question",
            "componentID": "COMP-111"
        }],
        "surveyDescription": "A survey about computers"
    }];
}

function getPeople() {
    return [{
        id: 1,
        firstName: 'John',
        lastName: 'Papa',
        age: 25,
        location: 'Florida'
    }, {
        id: 2,
        firstName: 'Ward',
        lastName: 'Bell',
        age: 31,
        location: 'California'
    }, {
        id: 3,
        firstName: 'Colleen',
        lastName: 'Jones',
        age: 21,
        location: 'New York'
    }, {
        id: 4,
        firstName: 'Madelyn',
        lastName: 'Green',
        age: 18,
        location: 'North Dakota'
    }, {
        id: 5,
        firstName: 'Ella',
        lastName: 'Jobs',
        age: 18,
        location: 'South Dakota'
    }, {
        id: 6,
        firstName: 'Landon',
        lastName: 'Gates',
        age: 11,
        location: 'South Carolina'
    }, {
        id: 7,
        firstName: 'Haley',
        lastName: 'Guthrie',
        age: 35,
        location: 'Wyoming'
    }, {
        id: 8,
        firstName: 'Aaron',
        lastName: 'Jinglehiemer',
        age: 22,
        location: 'Utah'
    }];
}

function getSurvey() {
    return {
        'surveyId': '1',
        'surveyName': 'Survey Name',
        'surveyDescription': 'Survey Description',
        'surveyComponents': [{
            'componentID': 'component ID',
            'componentType': 'question',
            'componentPosition': '1',
            'componentOptions': {
                'type': 'input',
                'templateOptions': {
                    'label': 'First Name',
                    'placeholder': 'Enter first name',
                    'required': true
                }
            }
        }, {
            'componentID': 'component ID 2',
            'componentType': 'question',
            'componentPosition': '2',
            'componentOptions': {
                'type': 'input',
                'templateOptions': {
                    'label': 'Last Name',
                    'placeholder': 'Enter last name',
                    'required': true
                }
            }
        }, {
            'componentID': 'component ID 3',
            'componentType': 'question',
            'componentPosition': '3',
            'componentOptions': {
                'type': 'input',
                'templateOptions': {
                    'label': 'Last Name',
                    'placeholder': 'Enter last name',
                    'required': true
                }
            }
        }, {
            'componentID': 'component ID 4',
            'componentType': 'question',
            'componentPosition': '4',
            'componentOptions': {
                'type': 'input',
                'templateOptions': {
                    'label': 'Last Name',
                    'placeholder': 'Enter last name',
                    'required': true
                }
            }
        }, {
            'componentID': 'component ID 5',
            'componentType': 'question',
            'componentPosition': '5',
            'componentOptions': {
                'type': 'input',
                'templateOptions': {
                    'label': 'Last Name',
                    'placeholder': 'Enter last name',
                    'required': true
                }
            }
        }, {
            'componentID': 'component ID 6',
            'componentType': 'question',
            'componentPosition': '6',
            'componentOptions': {
                'type': 'input',
                'templateOptions': {
                    'label': 'Last Name',
                    'placeholder': 'Enter last name',
                    'required': true
                }
            }
        }, {
            'componentID': 'component ID 7',
            'componentType': 'question',
            'componentPosition': '7',
            'componentOptions': {
                'type': 'input',
                'templateOptions': {
                    'label': 'Last Name',
                    'placeholder': 'Enter last name',
                    'required': true
                }
            }
        }]
    };
}

function getFormDefinition() {
    return [{
        'title': 'Tab 1',
        'active': true,
        'form': {
            'options': {},
            'fields': [{
                'key': 'name',
                'type': 'input',
                'templateOptions': {
                    'label': 'Name',
                    'placeholder': 'Please enter your name',
                    'required': true
                }
            }, {
                'key': 'path',
                'type': 'select',
                'templateOptions': {
                    'label': 'Path',
                    'options': [{
                        'name': 'PATH C',
                        'value': 'PATH_C'
                    }, {
                        'name': 'PATH F',
                        'value': 'PATH_F'
                    }, {
                        'name': 'PATH D',
                        'value': 'PATH_D'
                    }, {
                        'name': 'PATH G',
                        'value': 'PATH_G'
                    }],
                    'required': true
                }
            }, {
                'key': 'c',
                'type': 'input',
                'templateOptions': {
                    'label': 'C Field',
                    'placeholder': 'Enter your name',
                    'required': true
                },
                'hideExpression': 'model.path != "PATH_C"'
            }, {
                'key': 'd',
                'type': 'input',
                'templateOptions': {
                    'label': 'D Field',
                    'placeholder': 'Enter your name',
                    'required': true
                },
                'hideExpression': 'model.path != "PATH_D"'
            }, {
                'key': 'e',
                'type': 'input',
                'templateOptions': {
                    'label': 'E Field',
                    'placeholder': 'Enter your name',
                    'required': true
                },
                'hideExpression': 'model.path != "PATH_D"'
            }, {
                'key': 'f',
                'type': 'input',
                'templateOptions': {
                    'label': 'F Field',
                    'placeholder': 'Enter your name',
                    'required': true
                },
                'hideExpression': '!model.path || model.path === "PATH_G"'
            }, {
                'key': 'g',
                'type': 'input',
                'templateOptions': {
                    'label': 'G Field',
                    'placeholder': 'Enter your name',
                    'required': true
                },
                'hideExpression': '!model.path'
            }]
        }
    }, {
        'title': 'Tab 2',
        'form': {
            'options': {},
            'fields': [{
                'key': 'firstName',
                'type': 'input',
                'templateOptions': {
                    'label': 'First Name',
                    'required': true
                }
            }, {
                'key': 'lastName',
                'type': 'input',
                'templateOptions': {
                    'label': 'Last Name',
                    'required': false
                }
            }]
        }
    }];
}

function getFormSchema() {
    return '';
}

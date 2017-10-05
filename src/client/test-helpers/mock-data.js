/* jshint -W079, -W101, -W109 */
/* jscs:disable maximumLineLength, validateQuoteMarks */
var mockData = (function () {
    return {
        getMockStates: getMockStates,
        getMockSurveyList: getMockSurveyList,
        getMockCampaignList: getMockCampaignList,
        getMockSurvey: getMockSurvey,
        getMockMyCampaigns: getMockMyCampaigns,
        getMockTargets: getMockTargets,
        getUserRole: getUserRole,
        getMockAnswers: getMockAnswers
    };

    function getMockTargets() {
        return {
            "start_row": 0,
            "end_row": 20,
            "total_rows": 2,
            "targets_list": {
                "target_header": [{
                        "val": "VENDOR_ID",
                        "srch": "Y",
                        "key": "TARGET_IDENT",
                        "pos": "1"
                    }, {
                        "val": "ATTUID",
                        "srch": "",
                        "key": "ATTUID",
                        "pos": "3"
                    }, {
                        "val": "BU_ID",
                        "srch": "Y",
                        "key": "COL1",
                        "pos": "2"
                    }, {
                        "val": "ATT_GENERAL_MANAGER",
                        "srch": "Y",
                        "key": "COL2",
                        "pos": "4"
                    }, {
                        "val": "ATT_OFFICER",
                        "srch": "",
                        "key": "COL3",
                        "pos": "0"
                    }, {
                        "val": "BUSINESS_UNIT",
                        "srch": "",
                        "key": "COL4",
                        "pos": "0"
                    }, {
                        "val": "SUPP_NAME",
                        "srch": "",
                        "key": "COL5",
                        "pos": "0"
                    }, {
                        "val": "SUPP_SITE_LEADER",
                        "srch": "",
                        "key": "COL6",
                        "pos": "0"
                    }, {
                        "val": "SHORE_IND",
                        "srch": "",
                        "key": "COL7",
                        "pos": "0"
                    }, {
                        "val": "SUPP_FUNCTION",
                        "srch": "",
                        "key": "COL8",
                        "pos": "0"
                    }, {
                        "val": "FTE",
                        "srch": "",
                        "key": "COL9",
                        "pos": "0"
                    }, {
                        "val": "OUT_OF_SCOPE",
                        "srch": "",
                        "key": "COL10",
                        "pos": "0"
                    }, {
                        "val": "EFFECTIVE_DATE",
                        "srch": "",
                        "key": "COL11",
                        "pos": "0"
                    }, {
                        "val": "EXPIRATION_DATE",
                        "srch": "",
                        "key": "COL12",
                        "pos": "0"
                    }, {
                        "val": "COMMENTS",
                        "srch": "",
                        "key": "COL13",
                        "pos": "0"
                    }, {
                        "val": "",
                        "srch": "",
                        "key": "COL14",
                        "pos": "0"
                    }, {
                        "val": "",
                        "srch": "",
                        "key": "COL15",
                        "pos": "0"
                    }, {
                        "val": "",
                        "srch": "",
                        "key": "COL16",
                        "pos": "0"
                    }, {
                        "val": "",
                        "srch": "",
                        "key": "COL17",
                        "pos": "0"
                    }, {
                        "val": "",
                        "srch": "",
                        "key": "COL18",
                        "pos": "0"
                    }, {
                        "val": "",
                        "srch": "",
                        "key": "COL19",
                        "pos": "0"
                    }, {
                        "val": "LATITUDE",
                        "srch": "",
                        "key": "LOC_LATITUDE",
                        "pos": "0"
                    }, {
                        "val": "LONGITUDE",
                        "srch": "",
                        "key": "LOC_LONGITUDE",
                        "pos": "0"
                    }, {
                        "val": "SUPP_LOCATION_STATE",
                        "srch": "",
                        "key": "ADDR_STATE",
                        "pos": "7"
                    }, {
                        "val": "SUPP_LOCATION_CITY",
                        "srch": "",
                        "key": "ADDR_CITY",
                        "pos": "6"
                    }, {
                        "val": "SUPP_ADDRESS",
                        "srch": "Y",
                        "key": "ADDR_STREET",
                        "pos": "0"
                    }, {
                        "val": "SUPP_LOCATION_COUNTRY",
                        "srch": "",
                        "key": "ADDR_COUNTRY",
                        "pos": ""
                    }],
                "targets": [{
                        "TARGET_ID": "TARG-57148",
                        "LOC_LATITUDE": "28.472315",
                        "ADDR_COUNTRY": " IND",
                        "TARGET_IDENT": "1000002426",
                        "COL7": "Off-shore",
                        "ADDR_CITY": "Gurgaon",
                        "LOC_LONGITUDE": "77.106583",
                        "COL5": "Convergys",
                        "ATTUID": "ya2257",
                        "COL4": "AEIS (Care)",
                        "COL3": "Stankey",
                        "COL2": "Wittrock",
                        "COL1": "1",
                        "ADDR_STREET": "Bestech Business Towers, Sector 48, Sohna Road",
                        "COL9": "150",
                        "COL8": "Tech Support - DSL Voice"
                    }, {
                        "ADDR_STATE": " KY",
                        "TARGET_ID": "TARG-57147",
                        "LOC_LATITUDE": "39.042424",
                        "TARGET_IDENT": "1000002425",
                        "COL7": "On-shore",
                        "ADDR_CITY": "Erlanger",
                        "LOC_LONGITUDE": "-84.610127",
                        "COL5": "Convergys",
                        "ATTUID": "ya2257",
                        "COL4": "AEIS (Care)",
                        "COL3": "Stankey",
                        "COL2": "Wittrock",
                        "COL1": "1",
                        "ADDR_STREET": "1101 Pacific Ave., Circleport II Business Park  ",
                        "COL9": "75",
                        "COL8": "Tech Support -U-verse Voice"
                    }]
            },
            "campaign_id": "CAMP-143"
        };
    }

    function getUserRole() {
        return {
            "tngMessage": {
                "data": {
                    "results": {
                        "p_ret_message": {
                            "MSG": "SUCCESS",
                            "RC": "0",
                            "RESULTS": [{
                                    "isUser": "1",
                                    "isReporter": "1",
                                    "isAdmin": "1",
                                    "attuid": "YA2257"
                                }]
                        }
                    },
                    "status": {
                        "level": "SUCCESS",
                        "desc": "NONE",
                        "code": "0"
                    },
                    "trx": {
                        "condition": "none",
                        "priority": "1",
                        "name": "DoRightGetUserRoles_02"
                    }
                },
                "header": {
                    "queue": false,
                    "token": "2A29ABB4F91F294AE0531D01D5871FB5",
                    "transId": "undefined_2016-02-08T20:35:59.085Z_0DoRightGetUserRoles_",
                    "appname": "doRight",
                    "device": {
                        "id": "Device-dummy-uuid",
                        "os": "device",
                        "containerVer": "1.0@1.2",
                        "osver": "1.0"
                    },
                    "groupname": "queue",
                    "datetime": "2016-02-08T20:35:59.085Z",
                    "transferState": "online"
                }
            }
        };
    }

    function getMockMyCampaigns() {
        return [{
                "answerstatus": [
                    {
                        "lastUpdatedDate": "2016-04-14T11:31:16-05:00",
                        "percentComplete": 100,
                        "status": "IN PROGRESS",
                        "statusForDisplay": "100% Completed",
                        "surveyId": "SURV-203",
                        "targetId": ""
                    }
                ],
                "endDt": "2016-04-30T23:00:00-04:00",
                "id": "CAMP-278",
                "ident": "youness-7",
                "name": "youness-7",
                "startDt": "2016-04-13T14:05:28-05:00",
                "surveys": [
                    {
                        "hasSections": true,
                        "id": "SURV-203",
                        "name": "youness-7"
                    }
                ],
                "type": "adhoc"
            },
            {
                "answerstatus": [
                    {
                        "lastUpdatedDate": "2016-04-05T16:14:03-05:00",
                        "percentComplete": 100,
                        "status": "IN PROGRESS",
                        "statusForDisplay": "100% Completed",
                        "surveyId": "SURV-175",
                        "targetId": "TARG-72444"
                    }
                ],
                "endDt": "2016-04-29T23:00:00-07:00",
                "id": "CAMP-259",
                "ident": "dave-002-test-target",
                "name": "Dave Testing Target change",
                "startDt": "2016-03-25T13:13:34-07:00",
                "surveys": [
                    {
                        "hasSections": true,
                        "id": "SURV-175",
                        "name": "Thuha Survey 3/17 sn"
                    }
                ],
                "targetLabel": "OurTargs",
                "targets": [
                    {
                        "detail": {
                            "ADDR_CITY": "Jacksonville",
                            "ADDR_STATE": " FL",
                            "ADDR_STREET": "8000 Baymeadows Way, Floor 2",
                            "ATTUID": "ya2257",
                            "CAMPAIGN_ID": "CAMP-259",
                            "COL1": "1",
                            "COL2": "Wittrock",
                            "COL3": "Stankey",
                            "COL4": "AEIS (Care)",
                            "COL5": "Convergys",
                            "COL7": "On-shore",
                            "COL8": "Tech Support -U-verse Voice",
                            "COL9": "65",
                            "LAST_UPDATED_BY": "ya2257",
                            "LAST_UPDATED_DT": "2016-03-28T10:24:52-05:00",
                            "LOC_LATITUDE": "30.223912",
                            "LOC_LONGITUDE": "-81.579302",
                            "TARGET_ID": "TARG-72444",
                            "TARGET_IDENT": "1000002428"
                        },
                        "detailForDisplay": [
                            {
                                "key": "VENDOR_ID",
                                "position": 1,
                                "search": "Y",
                                "value": "1000002428"
                            },
                            {
                                "key": "BU_ID",
                                "position": 2,
                                "search": "Y",
                                "value": "1"
                            },
                            {
                                "ASSIGNED_TO_ATTUID": "YA2257",
                                "key": "ATTUID",
                                "position": 3,
                                "search": "",
                                "value": "ya2257"
                            },
                            {
                                "key": "ATT_GENERAL_MANAGER",
                                "position": 4,
                                "search": "Y",
                                "value": "Wittrock"
                            },
                            {
                                "key": "SUPP_LOCATION_CITY",
                                "position": 6,
                                "search": "",
                                "value": "Jacksonville"
                            },
                            {
                                "key": "SUPP_LOCATION_STATE",
                                "position": 7,
                                "search": "",
                                "value": " FL"
                            },
                            {
                                "key": "TARGET_ID",
                                "position": 1000,
                                "search": "",
                                "value": "TARG-72444"
                            }
                        ],
                        "id": "TARG-72444"
                    }
                ],
                "type": "unassigned"
            },
            {
                "answerstatus": [],
                "endDt": "2016-09-28T15:00:00-07:00",
                "id": "CAMP-236",
                "ident": "meeting ci",
                "name": "meetoi",
                "startDt": "2016-03-18T01:48:22-05:00",
                "surveys": [
                    {
                        "hasSections": true,
                        "id": "SURV-178",
                        "name": "Thuha Compliance Survey Name"
                    }
                ],
                "targetLabel": "location",
                "type": "unassigned"
            }
        ];
    }

    function getMockStates() {
        return [{
                state: 'surveyadmin',
                config: {
                    abstract: true,
                    url: '/',
                    templateUrl: 'app/survey-admin/admin.html',
                    title: 'Survey Admin'
                }
            },
            {
                state: 'surveyadmin.list',
                config: {
                    url: '/list',
                    templateUrl: 'app/survey-admin/list/list.html',
                    controller: 'SurveyListController',
                    controllerAs: 'vm',
                    title: 'Surveys',
                    settings: {
                        nav: 3,
                        content: 'Surveys',
                        svg: 'star'
                    },
                    leftNavButtonConfig: {
                        icon: 'refresh',
                        ariaLabel: 'refresh'
                    }
                }
            },];
    }

    function getMockSurveyList() {
        return [
                    {
                        "campaigns": [],
                        "last_updated_by": "er3193",
                        "last_updated_dt": "2016-03-18T16:56:35-05:00",
                        "status": "INITIAL",
                        "surveyID": "SURV-182",
                        "surveyIdent": "sdf",
                        "surveyName": "sdf",
                        "team_ident": "Team_2"
                    },
                    {
                        "campaigns": [],
                        "last_updated_by": "er3193",
                        "last_updated_dt": "2016-03-18T16:57:03-05:00",
                        "status": "INITIAL",
                        "surveyID": "SURV-183",
                        "surveyIdent": "sdf",
                        "surveyName": "sdf",
                        "team_ident": "Team_2"
                    },
                    {
                        "campaigns": [],
                        "last_updated_by": "tt4921",
                        "last_updated_dt": "2016-03-21T10:43:25-05:00",
                        "status": "INITIAL",
                        "surveyID": "SURV-179",
                        "surveyIdent": "thuha playing around",
                        "surveyName": "thuha playing around",
                        "team_ident": "Team_2"
                    },
                    {
                        "campaigns": [
                            {
                                "campaign_id": "CAMP-237",
                                "campaign_ident": "Thuha Camp initial status",
                                "created_by": "tt4921",
                                "created_dt": "2016-03-18T03:06:00-05:00",
                                "description": "Thuha Camp initial status description",
                                "end_dt": "2016-10-04T23:00:00-07:00",
                                "last_update_by": "tt4921",
                                "last_update_dt": "2016-03-21T12:27:44-07:00",
                                "name": "Thuha Camp initial status name",
                                "start_dt": "2016-03-30T00:00:00-07:00",
                                "status": "DRAFT",
                                "target_label": "testThuh",
                                "team_ident": "Team_2",
                                "type": "assigned"
                            },
                            {
                                "campaign_id": "CAMP-253",
                                "campaign_ident": "Rick ATTUID pre assigned",
                                "created_by": "rx6072",
                                "created_dt": "2016-03-23T11:58:13-05:00",
                                "description": "Rick ATTUID pre assigned",
                                "end_dt": "2016-03-24T23:00:00-07:00",
                                "last_update_by": "cron",
                                "last_update_dt": "2016-03-23T12:15:10-05:00",
                                "name": "Rick ATTUID pre assigned",
                                "publish_dt": "2016-03-23T12:11:36-05:00",
                                "start_dt": "2016-03-23T00:00:00-07:00",
                                "status": "STARTED",
                                "team_ident": "Team_2",
                                "type": "adhoc"
                            }
                        ],
                        "last_updated_by": "cron",
                        "last_updated_dt": "2016-03-23T12:15:10-05:00",
                        "status": "USED",
                        "surveyID": "SURV-176",
                        "surveyIdent": "youness-1",
                        "surveyName": "Youness 1",
                        "team_ident": "Team_2"
                    },
                    {
                        "campaigns": [],
                        "last_updated_by": "ew7585",
                        "last_updated_dt": "2016-03-23T12:02:30-05:00",
                        "status": "INITIAL",
                        "surveyID": "SURV-187",
                        "surveyIdent": "EW7585 - Survey Identifier",
                        "surveyName": "EW7585 - Survey Name",
                        "team_ident": "Team_2"
                    }
                ];
    }

    function getMockSurvey() {
        return {
            "created_by": "JW1945",
            "surveyID": "SURV-121",
            "surveyProgress": "C",
            "surveyName": "dave",
            "team_ident": "Team_2",
            "surveyComponents": [{
                    "componentPosition": 1,
                    "componentOptions": {
                        "templateOptions": {
                            "ident": "_yx6jcldwm",
                            "label": "Name",
                            "type": "text"
                        },
                        "type": "input",
                        "key": "_u62alzfwo"
                    },
                    "componentType": "question"
                }],
            "surveyDescription": "dave"
        };
    }

    function getMockCampaignList() {
        return [{
                "created_by": "jw1945",
                "last_update_dt": "1450370297",
                "type": "AdHoc",
                "campaign_ident": "Test campaign",
                "created_dt": "1450370297",
                "campaign_id": "CAMP-5",
                "end_dt": "-61663852800",
                "publish_dt": "1450252800",
                "description": "This is just a description of this campaign",
                "name": "Test Campaign for doright",
                "last_update_by": "jw1945",
                "team_ident": "Team_2",
                "start_dt": "-61663852800"
            }, {
                "created_by": "jw1945",
                "last_update_dt": "1450252800",
                "type": "AdHoc",
                "campaign_ident": "This is a test campaign",
                "created_dt": "1450252800",
                "campaign_id": "CAMP-1",
                "end_dt": "1422662400",
                "publish_dt": "1450252800",
                "description": "This is just a description of this campaign",
                "name": "Test Campaign for doright",
                "last_update_by": "jw1945",
                "team_ident": "Team_2",
                "start_dt": "1420070400"
            }, {
                "created_by": "jw1945",
                "last_update_dt": "1450252800",
                "type": "AdHoc",
                "campaign_ident": "Test campaign Youness 1",
                "created_dt": "1450252800",
                "campaign_id": "CAMP-2",
                "end_dt": "1422662400",
                "publish_dt": "1450252800",
                "description": "This is just a description of this campaign",
                "name": "Test Campaign for doright",
                "last_update_by": "jw1945",
                "team_ident": "Team_2",
                "start_dt": "1420070400"
            }, {
                "created_by": "jw1945",
                "last_update_dt": "-61663852800",
                "type": "AdHoc",
                "campaign_ident": "Test campaign",
                "created_dt": "-61663852800",
                "campaign_id": "CAMP-4",
                "end_dt": "-61663852800",
                "publish_dt": "-61663852800",
                "description": "This is just a description of this campaign",
                "name": "Test Campaign for doright",
                "last_update_by": "jw1945",
                "team_ident": "Team_2",
                "start_dt": "-61663852800"
            }];
    }

    function getMockAnswers() {
        return {
            "answers" : [],
            "attuid" : "ER3193",
            "campaign_id" : "CAMP-13",
            "last_updated_dt" : "2016-04-12T12:49:15-07:00",
            "surveyID" : "SURV-9"
        };
    }
})();

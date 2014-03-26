App = Ember.Application.create();

App.Router.map(function () {

    this.resource('about');
    this.resource('tests', function (){
        this.resource('test', {path: ':test_id'});
    });



    // put your routes here
});

App.TestsRoute = Ember.Route.extend({
    model: function(){
        return allTests;
    }

});

var allTests = [
    {"id": 1,
        "tests": [
            {
                "event": "suiteStart",
                "suite": "smoke_test",
                "tests": 10
            },
            {
                "event": "suiteStart",
                "suite": "CreateCampaignTest",
                "tests": 1
            },
            {
                "event": "testStart",
                "suite": "CreateCampaignTest",
                "test": "CreateCampaignTest::testCreateCampaign"
            },
            {
                "event": "test",
                "suite": "CreateCampaignTest",
                "test": "CreateCampaignTest::testCreateCampaign",
                "status": "fail",
                "time": 19.10386300087,
                "trace": [
                    {
                        "file": "\/Library\/WebServer\/Documents\/test-automation\/SmokeTests\/CreateCampaignTest.php",
                        "line": 12,
                        "function": "__call",
                        "class": "PHPUnit_Extensions_SeleniumTestCase",
                        "type": "->",
                        "args": [
                            "assertTextPresent",
                            [
                                "sdfasj"
                            ]
                        ]
                    },
                    {
                        "file": "\/Library\/WebServer\/Documents\/test-automation\/SmokeTests\/CreateCampaignTest.php",
                        "line": 12,
                        "function": "assertTextPresent",
                        "class": "CreateCampaignTest",
                        "type": "->",
                        "args": [
                            "sdfasj"
                        ]
                    }
                ],
                "message": "Failed command: assertTextPresent('sdfasj')\nFailed asserting that false is true.",
                "output": ""
            },
            {
                "event": "suiteStart",
                "suite": "FBLinkPostTest",
                "tests": 1
            },
            {
                "event": "testStart",
                "suite": "FBLinkPostTest",
                "test": "FBLinkPostTest::testFBLinkPost"
            },
            {
                "event": "test",
                "suite": "FBLinkPostTest",
                "test": "FBLinkPostTest::testFBLinkPost",
                "status": "error",
                "time": 52.387059926987,
                "trace": [
                    {
                        "file": "\/Library\/WebServer\/Documents\/test-automation\/SmokeTests\/FBLinkPostTest.php",
                        "line": 13,
                        "function": "__call",
                        "class": "PHPUnit_Extensions_SeleniumTestCase",
                        "type": "->",
                        "args": [
                            "click",
                            [
                                "3ni478faiucgnfc"
                            ]
                        ]
                    },
                    {
                        "file": "\/Library\/WebServer\/Documents\/test-automation\/SmokeTests\/FBLinkPostTest.php",
                        "line": 13,
                        "function": "click",
                        "class": "FBLinkPostTest",
                        "type": "->",
                        "args": [
                            "3ni478faiucgnfc"
                        ]
                    }
                ],
                "message": "\nInvalid response while accessing the Selenium Server at 'http:\/\/localhost:4444\/selenium-server\/driver\/': ERROR: Element 3ni478faiucgnfc not found",
                "output": ""
            },
            {
                "event": "suiteStart",
                "suite": "FBUnpublishedLinkPostTest",
                "tests": 1
            },
            {
                "event": "testStart",
                "suite": "FBUnpublishedLinkPostTest",
                "test": "FBUnpublishedLinkPostTest::testFBUnpublishedLinkPost"
            },
            {
                "event": "test",
                "suite": "FBUnpublishedLinkPostTest",
                "test": "FBUnpublishedLinkPostTest::testFBUnpublishedLinkPost",
                "status": "pass",
                "time": 45.543787956238,
                "trace": [

                ],
                "message": "",
                "output": ""
            },
            {
                "event": "suiteStart",
                "suite": "FBFutureLinkPostTest",
                "tests": 1
            },
            {
                "event": "testStart",
                "suite": "FBFutureLinkPostTest",
                "test": "FBFutureLinkPostTest::testFBFutureLinkPost"
            },
            {
                "event": "test",
                "suite": "FBFutureLinkPostTest",
                "test": "FBFutureLinkPostTest::testFBFutureLinkPost",
                "status": "pass",
                "time": 48.527001142502,
                "trace": [

                ],
                "message": "",
                "output": ""
            },
            {
                "event": "suiteStart",
                "suite": "TwitterPostTest",
                "tests": 1
            },
            {
                "event": "testStart",
                "suite": "TwitterPostTest",
                "test": "TwitterPostTest::testTwitterPost"
            },
            {
                "event": "test",
                "suite": "TwitterPostTest",
                "test": "TwitterPostTest::testTwitterPost",
                "status": "pass",
                "time": 37.186475038528,
                "trace": [

                ],
                "message": "",
                "output": ""
            },
            {
                "event": "suiteStart",
                "suite": "CreateFBAdTest",
                "tests": 1
            },
            {
                "event": "testStart",
                "suite": "CreateFBAdTest",
                "test": "CreateFBAdTest::testCreateFBAd"
            },
            {
                "event": "test",
                "suite": "CreateFBAdTest",
                "test": "CreateFBAdTest::testCreateFBAd",
                "status": "pass",
                "time": 31.82554101944,
                "trace": [

                ],
                "message": "",
                "output": ""
            },
            {
                "event": "suiteStart",
                "suite": "ProductTest",
                "tests": 1
            },
            {
                "event": "testStart",
                "suite": "ProductTest",
                "test": "ProductTest::testProduct"
            },
            {
                "event": "test",
                "suite": "ProductTest",
                "test": "ProductTest::testProduct",
                "status": "pass",
                "time": 52.313183784485,
                "trace": [

                ],
                "message": "",
                "output": ""
            },
            {
                "event": "suiteStart",
                "suite": "FBPhotoPostTest",
                "tests": 1
            },
            {
                "event": "testStart",
                "suite": "FBPhotoPostTest",
                "test": "FBPhotoPostTest::testFBPhotoPost"
            },
            {
                "event": "test",
                "suite": "FBPhotoPostTest",
                "test": "FBPhotoPostTest::testFBPhotoPost",
                "status": "pass",
                "time": 46.099920034409,
                "trace": [

                ],
                "message": "",
                "output": ""
            },
            {
                "event": "suiteStart",
                "suite": "FBUnpublishedPhotoPostTest",
                "tests": 1
            },
            {
                "event": "testStart",
                "suite": "FBUnpublishedPhotoPostTest",
                "test": "FBUnpublishedPhotoPostTest::testFBUnpublishedPhotoPost"
            },
            {
                "event": "test",
                "suite": "FBUnpublishedPhotoPostTest",
                "test": "FBUnpublishedPhotoPostTest::testFBUnpublishedPhotoPost",
                "status": "pass",
                "time": 47.553740978241,
                "trace": [

                ],
                "message": "",
                "output": ""
            },
            {
                "event": "suiteStart",
                "suite": "FBFuturePhotoPostTest",
                "tests": 1
            },
            {
                "event": "testStart",
                "suite": "FBFuturePhotoPostTest",
                "test": "FBFuturePhotoPostTest::testFBFuturePhotoPost"
            },
            {
                "event": "test",
                "suite": "FBFuturePhotoPostTest",
                "test": "FBFuturePhotoPostTest::testFBFuturePhotoPost",
                "status": "pass",
                "time": 44.301381111145,
                "trace": [

                ],
                "message": "",
                "output": ""
            }
        ]

    },
    {"id": 2,
        "tests": [{
            "event": "suiteStart",
            "suite": "smoke_test",
            "tests": 10
        },{
            "event": "suiteStart",
            "suite": "CreateCampaignTest",
            "tests": 1
        },{
            "event": "testStart",
            "suite": "CreateCampaignTest",
            "test": "CreateCampaignTest::testCreateCampaign"
        },{
            "event": "test",
            "suite": "CreateCampaignTest",
            "test": "CreateCampaignTest::testCreateCampaign",
            "status": "fail",
            "time": 25.21940779686,
            "trace": [
                {
                    "file": "\/Library\/WebServer\/Documents\/test-automation\/SmokeTests\/CreateCampaignTest.php",
                    "line": 12,
                    "function": "__call",
                    "class": "PHPUnit_Extensions_SeleniumTestCase",
                    "type": "->",
                    "args": [
                        "assertTextPresent",
                        [
                            "sdfasj"
                        ]
                    ]
                },
                {
                    "file": "\/Library\/WebServer\/Documents\/test-automation\/SmokeTests\/CreateCampaignTest.php",
                    "line": 12,
                    "function": "assertTextPresent",
                    "class": "CreateCampaignTest",
                    "type": "->",
                    "args": [
                        "sdfasj"
                    ]
                }
            ],
            "message": "Failed command: assertTextPresent('sdfasj')\nFailed asserting that false is true.",
            "output": ""
        },{
            "event": "suiteStart",
            "suite": "FBLinkPostTest",
            "tests": 1
        },{
            "event": "testStart",
            "suite": "FBLinkPostTest",
            "test": "FBLinkPostTest::testFBLinkPost"
        },{
            "event": "test",
            "suite": "FBLinkPostTest",
            "test": "FBLinkPostTest::testFBLinkPost",
            "status": "fail",
            "time": 76.359910011292,
            "trace": [
                {
                    "file": "\/Library\/WebServer\/Documents\/test-automation\/SmokeTests\/FBLinkPostTest.php",
                    "line": 13,
                    "function": "__call",
                    "class": "PHPUnit_Extensions_SeleniumTestCase",
                    "type": "->",
                    "args": [
                        "waitForElementPresent",
                        [
                            "css=#sdaf"
                        ]
                    ]
                },
                {
                    "file": "\/Library\/WebServer\/Documents\/test-automation\/SmokeTests\/FBLinkPostTest.php",
                    "line": 13,
                    "function": "waitForElementPresent",
                    "class": "FBLinkPostTest",
                    "type": "->",
                    "args": [
                        "css=#sdaf"
                    ]
                }
            ],
            "message": "WaitFor timeout. \nLast exception message: \nFailed command: waitForElementPresent('css=#sdaf')\nFailed asserting that false is true.",
            "output": ""
        },{
            "event": "suiteStart",
            "suite": "FBUnpublishedLinkPostTest",
            "tests": 1
        },{
            "event": "testStart",
            "suite": "FBUnpublishedLinkPostTest",
            "test": "FBUnpublishedLinkPostTest::testFBUnpublishedLinkPost"
        },{
            "event": "test",
            "suite": "FBUnpublishedLinkPostTest",
            "test": "FBUnpublishedLinkPostTest::testFBUnpublishedLinkPost",
            "status": "pass",
            "time": 51.292876958847,
            "trace": [

            ],
            "message": "",
            "output": ""
        },{
            "event": "suiteStart",
            "suite": "FBFutureLinkPostTest",
            "tests": 1
        },{
            "event": "testStart",
            "suite": "FBFutureLinkPostTest",
            "test": "FBFutureLinkPostTest::testFBFutureLinkPost"
        },{
            "event": "test",
            "suite": "FBFutureLinkPostTest",
            "test": "FBFutureLinkPostTest::testFBFutureLinkPost",
            "status": "pass",
            "time": 44.546409130096,
            "trace": [

            ],
            "message": "",
            "output": ""
        },{
            "event": "suiteStart",
            "suite": "TwitterPostTest",
            "tests": 1
        },{
            "event": "testStart",
            "suite": "TwitterPostTest",
            "test": "TwitterPostTest::testTwitterPost"
        },{
            "event": "test",
            "suite": "TwitterPostTest",
            "test": "TwitterPostTest::testTwitterPost",
            "status": "pass",
            "time": 42.494444847107,
            "trace": [

            ],
            "message": "",
            "output": ""
        },{
            "event": "suiteStart",
            "suite": "CreateFBAdTest",
            "tests": 1
        },{
            "event": "testStart",
            "suite": "CreateFBAdTest",
            "test": "CreateFBAdTest::testCreateFBAd"
        },{
            "event": "test",
            "suite": "CreateFBAdTest",
            "test": "CreateFBAdTest::testCreateFBAd",
            "status": "pass",
            "time": 27.856699943542,
            "trace": [

            ],
            "message": "",
            "output": ""
        },{
            "event": "suiteStart",
            "suite": "ProductTest",
            "tests": 1
        },{
            "event": "testStart",
            "suite": "ProductTest",
            "test": "ProductTest::testProduct"
        },{
            "event": "test",
            "suite": "ProductTest",
            "test": "ProductTest::testProduct",
            "status": "pass",
            "time": 53.203793048859,
            "trace": [

            ],
            "message": "",
            "output": ""
        },{
            "event": "suiteStart",
            "suite": "FBPhotoPostTest",
            "tests": 1
        },{
            "event": "testStart",
            "suite": "FBPhotoPostTest",
            "test": "FBPhotoPostTest::testFBPhotoPost"
        },{
            "event": "test",
            "suite": "FBPhotoPostTest",
            "test": "FBPhotoPostTest::testFBPhotoPost",
            "status": "pass",
            "time": 46.081191062927,
            "trace": [

            ],
            "message": "",
            "output": ""
        },{
            "event": "suiteStart",
            "suite": "FBUnpublishedPhotoPostTest",
            "tests": 1
        },{
            "event": "testStart",
            "suite": "FBUnpublishedPhotoPostTest",
            "test": "FBUnpublishedPhotoPostTest::testFBUnpublishedPhotoPost"
        },{
            "event": "test",
            "suite": "FBUnpublishedPhotoPostTest",
            "test": "FBUnpublishedPhotoPostTest::testFBUnpublishedPhotoPost",
            "status": "pass",
            "time": 52.803482055664,
            "trace": [

            ],
            "message": "",
            "output": ""
        },{
            "event": "suiteStart",
            "suite": "FBFuturePhotoPostTest",
            "tests": 1
        },{
            "event": "testStart",
            "suite": "FBFuturePhotoPostTest",
            "test": "FBFuturePhotoPostTest::testFBFuturePhotoPost"
        },{
            "event": "test",
            "suite": "FBFuturePhotoPostTest",
            "test": "FBFuturePhotoPostTest::testFBFuturePhotoPost",
            "status": "pass",
            "time": 43.746371030807,
            "trace": [

            ],
            "message": "",
            "output": ""
        }]
    },
    {"id": 3,
        "tests": [{
            "event": "suiteStart",
            "suite": "smoke_test",
            "tests": 10
        },{
            "event": "suiteStart",
            "suite": "CreateCampaignTest",
            "tests": 1
        },{
            "event": "testStart",
            "suite": "CreateCampaignTest",
            "test": "CreateCampaignTest::testCreateCampaign"
        },{
            "event": "test",
            "suite": "CreateCampaignTest",
            "test": "CreateCampaignTest::testCreateCampaign",
            "status": "fail",
            "time": 21.426814079285,
            "trace": [
                {
                    "file": "\/Library\/WebServer\/Documents\/test-automation\/SmokeTests\/CreateCampaignTest.php",
                    "line": 12,
                    "function": "__call",
                    "class": "PHPUnit_Extensions_SeleniumTestCase",
                    "type": "->",
                    "args": [
                        "assertTextPresent",
                        [
                            "sdfasj"
                        ]
                    ]
                },
                {
                    "file": "\/Library\/WebServer\/Documents\/test-automation\/SmokeTests\/CreateCampaignTest.php",
                    "line": 12,
                    "function": "assertTextPresent",
                    "class": "CreateCampaignTest",
                    "type": "->",
                    "args": [
                        "sdfasj"
                    ]
                }
            ],
            "message": "Failed command: assertTextPresent('sdfasj')\nFailed asserting that false is true.",
            "output": ""
        },{
            "event": "suiteStart",
            "suite": "FBLinkPostTest",
            "tests": 1
        },{
            "event": "testStart",
            "suite": "FBLinkPostTest",
            "test": "FBLinkPostTest::testFBLinkPost"
        },{
            "event": "test",
            "suite": "FBLinkPostTest",
            "test": "FBLinkPostTest::testFBLinkPost",
            "status": "fail",
            "time": 69.252578020096,
            "trace": [
                {
                    "file": "\/Library\/WebServer\/Documents\/test-automation\/SmokeTests\/FBLinkPostTest.php",
                    "line": 13,
                    "function": "__call",
                    "class": "PHPUnit_Extensions_SeleniumTestCase",
                    "type": "->",
                    "args": [
                        "waitForElementPresent",
                        [
                            "css=#sdaf"
                        ]
                    ]
                },
                {
                    "file": "\/Library\/WebServer\/Documents\/test-automation\/SmokeTests\/FBLinkPostTest.php",
                    "line": 13,
                    "function": "waitForElementPresent",
                    "class": "FBLinkPostTest",
                    "type": "->",
                    "args": [
                        "css=#sdaf"
                    ]
                }
            ],
            "message": "WaitFor timeout. \nLast exception message: \nFailed command: waitForElementPresent('css=#sdaf')\nFailed asserting that false is true.",
            "output": ""
        },{
            "event": "suiteStart",
            "suite": "FBUnpublishedLinkPostTest",
            "tests": 1
        },{
            "event": "testStart",
            "suite": "FBUnpublishedLinkPostTest",
            "test": "FBUnpublishedLinkPostTest::testFBUnpublishedLinkPost"
        }]
    },
    {"id": 4,
        "tests": [{
            "event": "suiteStart",
            "suite": "smoke_test",
            "tests": 10
        },{
            "event": "suiteStart",
            "suite": "CreateCampaignTest",
            "tests": 1
        },{
            "event": "testStart",
            "suite": "CreateCampaignTest",
            "test": "CreateCampaignTest::testCreateCampaign"
        },{
            "event": "test",
            "suite": "CreateCampaignTest",
            "test": "CreateCampaignTest::testCreateCampaign",
            "status": "pass",
            "time": 28.407824993134,
            "trace": [

            ],
            "message": "",
            "output": ""
        },{
            "event": "suiteStart",
            "suite": "FBLinkPostTest",
            "tests": 1
        },{
            "event": "testStart",
            "suite": "FBLinkPostTest",
            "test": "FBLinkPostTest::testFBLinkPost"
        },{
            "event": "test",
            "suite": "FBLinkPostTest",
            "test": "FBLinkPostTest::testFBLinkPost",
            "status": "pass",
            "time": 48.374269962311,
            "trace": [

            ],
            "message": "",
            "output": ""
        },{
            "event": "suiteStart",
            "suite": "FBUnpublishedLinkPostTest",
            "tests": 1
        },{
            "event": "testStart",
            "suite": "FBUnpublishedLinkPostTest",
            "test": "FBUnpublishedLinkPostTest::testFBUnpublishedLinkPost"
        },{
            "event": "test",
            "suite": "FBUnpublishedLinkPostTest",
            "test": "FBUnpublishedLinkPostTest::testFBUnpublishedLinkPost",
            "status": "pass",
            "time": 49.095010042191,
            "trace": [

            ],
            "message": "",
            "output": ""
        },{
            "event": "suiteStart",
            "suite": "FBFutureLinkPostTest",
            "tests": 1
        },{
            "event": "testStart",
            "suite": "FBFutureLinkPostTest",
            "test": "FBFutureLinkPostTest::testFBFutureLinkPost"
        },{
            "event": "test",
            "suite": "FBFutureLinkPostTest",
            "test": "FBFutureLinkPostTest::testFBFutureLinkPost",
            "status": "pass",
            "time": 47.126768112183,
            "trace": [

            ],
            "message": "",
            "output": ""
        },{
            "event": "suiteStart",
            "suite": "TwitterPostTest",
            "tests": 1
        },{
            "event": "testStart",
            "suite": "TwitterPostTest",
            "test": "TwitterPostTest::testTwitterPost"
        },{
            "event": "test",
            "suite": "TwitterPostTest",
            "test": "TwitterPostTest::testTwitterPost",
            "status": "pass",
            "time": 43.840237140656,
            "trace": [

            ],
            "message": "",
            "output": ""
        },{
            "event": "suiteStart",
            "suite": "CreateFBAdTest",
            "tests": 1
        },{
            "event": "testStart",
            "suite": "CreateFBAdTest",
            "test": "CreateFBAdTest::testCreateFBAd"
        },{
            "event": "test",
            "suite": "CreateFBAdTest",
            "test": "CreateFBAdTest::testCreateFBAd",
            "status": "pass",
            "time": 28.303451061249,
            "trace": [

            ],
            "message": "",
            "output": ""
        },{
            "event": "suiteStart",
            "suite": "ProductTest",
            "tests": 1
        },{
            "event": "testStart",
            "suite": "ProductTest",
            "test": "ProductTest::testProduct"
        },{
            "event": "test",
            "suite": "ProductTest",
            "test": "ProductTest::testProduct",
            "status": "pass",
            "time": 58.008865118027,
            "trace": [

            ],
            "message": "",
            "output": ""
        },{
            "event": "suiteStart",
            "suite": "FBPhotoPostTest",
            "tests": 1
        },{
            "event": "testStart",
            "suite": "FBPhotoPostTest",
            "test": "FBPhotoPostTest::testFBPhotoPost"
        },{
            "event": "test",
            "suite": "FBPhotoPostTest",
            "test": "FBPhotoPostTest::testFBPhotoPost",
            "status": "pass",
            "time": 43.749328136444,
            "trace": [

            ],
            "message": "",
            "output": ""
        },{
            "event": "suiteStart",
            "suite": "FBUnpublishedPhotoPostTest",
            "tests": 1
        },{
            "event": "testStart",
            "suite": "FBUnpublishedPhotoPostTest",
            "test": "FBUnpublishedPhotoPostTest::testFBUnpublishedPhotoPost"
        },{
            "event": "test",
            "suite": "FBUnpublishedPhotoPostTest",
            "test": "FBUnpublishedPhotoPostTest::testFBUnpublishedPhotoPost",
            "status": "pass",
            "time": 53.028352975845,
            "trace": [

            ],
            "message": "",
            "output": ""
        },{
            "event": "suiteStart",
            "suite": "FBFuturePhotoPostTest",
            "tests": 1
        },{
            "event": "testStart",
            "suite": "FBFuturePhotoPostTest",
            "test": "FBFuturePhotoPostTest::testFBFuturePhotoPost"
        },{
            "event": "test",
            "suite": "FBFuturePhotoPostTest",
            "test": "FBFuturePhotoPostTest::testFBFuturePhotoPost",
            "status": "pass",
            "time": 49.615618944168,
            "trace": [

            ],
            "message": "",
            "output": ""
        }]
    }
]

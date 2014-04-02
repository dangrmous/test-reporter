App = Ember.Application.create({
    LOG_TRANSITIONS: true
});
//App.ApplicationAdapter = DS.FixtureAdapter.extend();
App.ApplicationAdapter = DS.RESTAdapter.extend(
    {
        host: 'http://localhost/test-reporter/service.php'
    }
);

App.Suite = DS.Model.extend({
    date: DS.attr(),
    tests: DS.attr()
});

App.Suite.FIXTURES = [
    {
        "id": 1,
        "date": 32520141103,
        "tests": [
            {"id":1,
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
                "output": ""},
            {
                "id":2,
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
            },
            {
                "id":3,
                "test": "FBUnpublishedLinkPostTest::testFBUnpublishedLinkPost",
                "status": "pass",
                "time": 51.292876958847,
                "trace": [

                ],
                "message": "",
                "output": ""
            },
            {
                "id":4,
                "test": "FBFutureLinkPostTest::testFBFutureLinkPost",
                "status": "pass",
                "time": 44.546409130096,
                "trace": [

                ],
                "message": "",
                "output": ""
            },
            {
                "id":5,
                "test": "CreateFBAdTest::testCreateFBAd",
                "status": "pass",
                "time": 27.856699943542,
                "trace": [

                ],
                "message": "",
                "output": ""
            }
        ]},
    {
        "id": 2,
        "date": 32520141116,
        "tests": [
            {
                "id":1,
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
            },
            {
                "id":2,
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
            }
        ]
    },
    {
        "id": 3,
        "date": 32520141523,
        "tests": [
            {
                "id":1,
                "test": "CreateCampaignTest::testCreateCampaign",
                "status": "pass",
                "time": 28.407824993134,
                "trace": [],
                "message": "",
                "output": ""
            },
            {
                "id":2,
                "test": "FBLinkPostTest::testFBLinkPost",
                "status": "pass",
                "time": 48.374269962311,
                "trace": [],
                "message": "",
                "output": ""
            },
            {
                "id":3,
                "test": "FBUnpublishedLinkPostTest::testFBUnpublishedLinkPost",
                "status": "error",
                "time": 49.095010042191,
                "trace": [],
                "message": "",
                "output": ""
            },
            {
                "id":4,
                "test": "FBFutureLinkPostTest::testFBFutureLinkPost",
                "status": "pass",
                "time": 47.126768112183,
                "trace": [],
                "message": "",
                "output": ""
            }
        ]
    }
]


App.Router.map(function () {

    this.resource('about');
    this.resource('suites', function () {
        this.resource('suite', {path: ':suite_id'} , function(){
            this.route('test', {path: '/:test_id'});
        });
    });

    // put your routes here
});

App.SuitesRoute = Ember.Route.extend({
    model: function () {
        return this.store.findAll('suite');
    }
});

App.SuiteRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('suite', params.suite_id);
    }
});

App.SuiteTestRoute = Ember.Route.extend({
    model: function(params){
        return this
            .modelFor('suite')
            .get('tests')
            .find(function(test){
                return test.id == params.test_id; // must be `==`, exact equality will fail
            });
    }
})

Ember.Handlebars.helper('format-date', function(date) {
  return moment.unix(date).format("ddd, MMM Do h:mm:ss a");
});




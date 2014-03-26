App = Ember.Application.create({});
App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Test = DS.Model.extend({

    test: DS.attr(),
   status: DS.attr(),
    time: DS.attr(),
    trace: DS.attr(),
    message: DS.attr(),
    output: DS.attr('string')
});

App.Test.FIXTURES = [
    {"id": 1,
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
    {"id": 2,
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
    },
    {"id": 3,
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
    {"id": 4,
        "test": "CreateCampaignTest::testCreateCampaign",
        "status": "pass",
        "time": 28.407824993134,
        "trace": [

        ],
        "message": "",
        "output": ""
    }
]





App.Router.map(function () {

    this.resource('about');
    this.resource('tests', function () {
        this.resource('test', {path: ':test_id'});
    });
    // put your routes here
});

App.TestsRoute = Ember.Route.extend({
    model: function () {
        return this.store.findAll('test');
    }

});

App.TestRoute = Ember.Route.extend({
    model: function (params) {

        return this.store.find('test', params.test_id);
    }
});




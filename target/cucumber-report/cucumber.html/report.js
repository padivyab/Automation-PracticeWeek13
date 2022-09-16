$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/createaccountpagetest.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account Page Test",
  "description": "",
  "id": "create-account-page-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "verifyThatUserShouldCreateAccountSuccessfully",
  "description": "",
  "id": "create-account-page-test;verifythatusershouldcreateaccountsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I Enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter first name \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter last name \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter register password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter city \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select state \"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter postsl code \"\u003cpostalcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select country \"\u003ccountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter phone number \"\u003cphonenumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on register button",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "create-account-page-test;verifythatusershouldcreateaccountsuccessfully;",
  "rows": [
    {
      "cells": [
        "email",
        "firstname",
        "lastname",
        "password",
        "address",
        "city",
        "state",
        "postalcode",
        "country",
        "phonenumber"
      ],
      "line": 19,
      "id": "create-account-page-test;verifythatusershouldcreateaccountsuccessfully;;1"
    },
    {
      "cells": [
        "padiv1234@gmail.com",
        "div",
        "patel",
        "Divo123456",
        "213 sukhesha avenue",
        "oshawa",
        "Arizona",
        "3456",
        "United States",
        "9898046734"
      ],
      "line": 20,
      "id": "create-account-page-test;verifythatusershouldcreateaccountsuccessfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23698323400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "verifyThatUserShouldCreateAccountSuccessfully",
  "description": "",
  "id": "create-account-page-test;verifythatusershouldcreateaccountsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I Enter email \"padiv1234@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter first name \"div\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter last name \"patel\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter register password \"Divo123456\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter address \"213 sukhesha avenue\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter city \"oshawa\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select state \"Arizona\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter postsl code \"3456\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select country \"United States\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter phone number \"9898046734\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on register button",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 523118001,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 14324343100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "padiv1234@gmail.com",
      "offset": 15
    }
  ],
  "location": "CreateaccountTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 774491600,
  "status": "passed"
});
formatter.match({
  "location": "CreateaccountTest.iClickOnCreateAnAccountButton()"
});
formatter.result({
  "duration": 293155700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "div",
      "offset": 20
    }
  ],
  "location": "CreateaccountTest.iEnterFirstName(String)"
});
formatter.result({
  "duration": 4415457000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel",
      "offset": 19
    }
  ],
  "location": "CreateaccountTest.iEnterLastName(String)"
});
formatter.result({
  "duration": 632226899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Divo123456",
      "offset": 27
    }
  ],
  "location": "CreateaccountTest.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 571929700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "213 sukhesha avenue",
      "offset": 17
    }
  ],
  "location": "CreateaccountTest.iEnterAddress(String)"
});
formatter.result({
  "duration": 759241800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "oshawa",
      "offset": 14
    }
  ],
  "location": "CreateaccountTest.iEnterCity(String)"
});
formatter.result({
  "duration": 417938499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Arizona",
      "offset": 16
    }
  ],
  "location": "CreateaccountTest.iSelectState(String)"
});
formatter.result({
  "duration": 686561399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3456",
      "offset": 21
    }
  ],
  "location": "CreateaccountTest.iEnterPostslCode(String)"
});
formatter.result({
  "duration": 347270200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 18
    }
  ],
  "location": "CreateaccountTest.iSelectCountry(String)"
});
formatter.result({
  "duration": 229655799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9898046734",
      "offset": 22
    }
  ],
  "location": "CreateaccountTest.iEnterPhoneNumber(String)"
});
formatter.result({
  "duration": 386512700,
  "status": "passed"
});
formatter.match({
  "location": "CreateaccountTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 24039814900,
  "status": "passed"
});
formatter.after({
  "duration": 1699501,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefile/signpagetest.feature");
formatter.feature({
  "line": 1,
  "name": "SignpageTest",
  "description": "",
  "id": "signpagetest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11724259401,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "userShouldNavigateToSignInPageSuccessFully",
  "description": "",
  "id": "signpagetest;usershouldnavigatetosigninpagesuccessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "verify that \"AUTHENTICATION\" message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 299300,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 8003779700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUTHENTICATION",
      "offset": 13
    }
  ],
  "location": "SignPageTest.verifyThatMessageIsDisplayed(String)"
});
formatter.result({
  "duration": 1140094300,
  "status": "passed"
});
formatter.after({
  "duration": 27799,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "verifyTheErrorMessageWithInValidCredentials",
  "description": "",
  "id": "signpagetest;verifytheerrormessagewithinvalidcredentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I Enter username \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Enter password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click On Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify the error message \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "signpagetest;verifytheerrormessagewithinvalidcredentials;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Message"
      ],
      "line": 17,
      "id": "signpagetest;verifytheerrormessagewithinvalidcredentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 18,
      "id": "signpagetest;verifytheerrormessagewithinvalidcredentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 19,
      "id": "signpagetest;verifytheerrormessagewithinvalidcredentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 20,
      "id": "signpagetest;verifytheerrormessagewithinvalidcredentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 21,
      "id": "signpagetest;verifytheerrormessagewithinvalidcredentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 24109455200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "verifyTheErrorMessageWithInValidCredentials",
  "description": "",
  "id": "signpagetest;verifytheerrormessagewithinvalidcredentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I Enter username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click On Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify the error message \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 31100,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 24134059801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 272690001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 496216700,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 8115273500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 26
    }
  ],
  "location": "SignPageTest.verifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 200782600,
  "status": "passed"
});
formatter.after({
  "duration": 26800,
  "status": "passed"
});
formatter.before({
  "duration": 10974609400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "verifyTheErrorMessageWithInValidCredentials",
  "description": "",
  "id": "signpagetest;verifytheerrormessagewithinvalidcredentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I Enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Enter password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click On Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify the error message \"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 71300,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 4818761100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 612181800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 606449600,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 3655522999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 26
    }
  ],
  "location": "SignPageTest.verifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 106009201,
  "status": "passed"
});
formatter.after({
  "duration": 28300,
  "status": "passed"
});
formatter.before({
  "duration": 11327191199,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "verifyTheErrorMessageWithInValidCredentials",
  "description": "",
  "id": "signpagetest;verifytheerrormessagewithinvalidcredentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I Enter username \"adfdfgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click On Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify the error message \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 26600,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 8366977100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 258157801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 202800300,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 4360332999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 26
    }
  ],
  "location": "SignPageTest.verifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 44592101,
  "status": "passed"
});
formatter.after({
  "duration": 29601,
  "status": "passed"
});
formatter.before({
  "duration": 11621753600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verifyTheErrorMessageWithInValidCredentials",
  "description": "",
  "id": "signpagetest;verifytheerrormessagewithinvalidcredentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I Enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click On Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify the error message \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 43600,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 5573161101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 313117800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 232495500,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 3213046701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 26
    }
  ],
  "location": "SignPageTest.verifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 108217800,
  "status": "passed"
});
formatter.after({
  "duration": 29900,
  "status": "passed"
});
formatter.before({
  "duration": 9921088800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "verifyThatUserShouldLogInSuccessFullyWithValidCredentials",
  "description": "",
  "id": "signpagetest;verifythatusershouldloginsuccessfullywithvalidcredentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I Enter username \"Testdiv1234@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Enter password \"Diva123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click On Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify that sign out link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 416600,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2808797601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testdiv1234@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 351561200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Diva123456",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 255229599,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2456646300,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.verifyThatSignOutLinkIsDisplayed()"
});
formatter.result({
  "duration": 80129901,
  "status": "passed"
});
formatter.after({
  "duration": 27200,
  "status": "passed"
});
formatter.before({
  "duration": 5854216199,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "verifyThatUserShouldLogOutSuccessFully",
  "description": "",
  "id": "signpagetest;verifythatusershouldlogoutsuccessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I Enter username \"Testdiv1234@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Enter password \"Diva123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click On Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I sign out button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Verify that sign in link displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 31399,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 3931769400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testdiv1234@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 414935300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Diva123456",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 303015999,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 4740906300,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iSignOutButton()"
});
formatter.result({
  "duration": 6316931200,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.verifyThatSignInLinkDisplayed()"
});
formatter.result({
  "duration": 62093900,
  "status": "passed"
});
formatter.after({
  "duration": 28501,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefile/womancategorypagetest.feature");
formatter.feature({
  "line": 1,
  "name": "WomanCategoryPage Test",
  "description": "Navigate women category page and check product",
  "id": "womancategorypage-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9622474601,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verifyUserShouldNavigateToWomenCategoryPageSuccessfully",
  "description": "",
  "id": "womancategorypage-test;verifyusershouldnavigatetowomencategorypagesuccessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Woman Tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify \"WOMAN\" Tab",
  "keyword": "And "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 287699,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryStep.iClickOnWomanTab()"
});
formatter.result({
  "duration": 13643420600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WOMAN",
      "offset": 8
    }
  ],
  "location": "WomanCategoryStep.verifyTab(String)"
});
formatter.result({
  "duration": 59023900,
  "error_message": "java.lang.AssertionError: expected [WOMEN] but found [WOMAN]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.automation.steps.WomanCategoryStep.verifyTab(WomanCategoryStep.java:22)\r\n\tat ✽.And Verify \"WOMAN\" Tab(src/test/java/resources/featurefile/womancategorypagetest.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 610554101,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully",
  "description": "",
  "id": "womancategorypage-test;verifyusershouldaddproducttothecartsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Woman Tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on product \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I change quantity \"\u003cqty\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select size \"\u003csize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select colour \"\u003ccolor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I close popup display",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "womancategorypage-test;verifyusershouldaddproducttothecartsuccessfully;",
  "rows": [
    {
      "cells": [
        "product",
        "qty",
        "size",
        "color"
      ],
      "line": 20,
      "id": "womancategorypage-test;verifyusershouldaddproducttothecartsuccessfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 21,
      "id": "womancategorypage-test;verifyusershouldaddproducttothecartsuccessfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 22,
      "id": "womancategorypage-test;verifyusershouldaddproducttothecartsuccessfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 23,
      "id": "womancategorypage-test;verifyusershouldaddproducttothecartsuccessfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress with Price $28.98",
        "2",
        "M",
        "Blue"
      ],
      "line": 24,
      "id": "womancategorypage-test;verifyusershouldaddproducttothecartsuccessfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8317755200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully",
  "description": "",
  "id": "womancategorypage-test;verifyusershouldaddproducttothecartsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Woman Tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I close popup display",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 24699,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryStep.iClickOnWomanTab()"
});
formatter.result({
  "duration": 4693813300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 20
    }
  ],
  "location": "WomanCategoryStep.iClickOnProduct(String)"
});
formatter.result({
  "duration": 20100691500,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d105.0.5195.126)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-ELH5PJN7\u0027, ip: \u0027192.168.0.194\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [aec6e4063b5ec15fdee1b2dbbb6639e9, clickElement {id\u003de9353219-842f-4f4c-9235-80bf6e260ccb}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.126, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\DIVYAP~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:60725}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60725/devtoo..., se:cdpVersion: 105.0.5195.126, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (aec6e4063b5ec15fdee1b2dbbb6639e9)] -\u003e xpath: //a[contains(text(),\u0027Blouse\u0027)]]\nSession ID: aec6e4063b5ec15fdee1b2dbbb6639e9\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:52)\r\n\tat com.automation.pages.ProductPage.selectedProductOne(ProductPage.java:87)\r\n\tat com.automation.steps.WomanCategoryStep.iClickOnProduct(WomanCategoryStep.java:29)\r\n\tat ✽.And I click on product \"Blouse\"(src/test/java/resources/featurefile/womancategorypagetest.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomanCategoryStep.iChangeQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomanCategoryStep.iSelectSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 17
    }
  ],
  "location": "WomanCategoryStep.iSelectColour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomanCategoryStep.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomanCategoryStep.iClosePopupDisplay()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 528019700,
  "status": "passed"
});
formatter.before({
  "duration": 13626380000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully",
  "description": "",
  "id": "womancategorypage-test;verifyusershouldaddproducttothecartsuccessfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Woman Tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I change quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select size \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I close popup display",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 24500,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryStep.iClickOnWomanTab()"
});
formatter.result({
  "duration": 12302903000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 20
    }
  ],
  "location": "WomanCategoryStep.iClickOnProduct(String)"
});
formatter.result({
  "duration": 11384190800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "WomanCategoryStep.iChangeQuantity(String)"
});
formatter.result({
  "duration": 270698300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 15
    }
  ],
  "location": "WomanCategoryStep.iSelectSize(String)"
});
formatter.result({
  "duration": 265914300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 17
    }
  ],
  "location": "WomanCategoryStep.iSelectColour(String)"
});
formatter.result({
  "duration": 201335600,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryStep.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 297163101,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryStep.iClosePopupDisplay()"
});
formatter.result({
  "duration": 12534566199,
  "status": "passed"
});
formatter.after({
  "duration": 32901,
  "status": "passed"
});
formatter.before({
  "duration": 21610298800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully",
  "description": "",
  "id": "womancategorypage-test;verifyusershouldaddproducttothecartsuccessfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Woman Tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I change quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I close popup display",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 30400,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryStep.iClickOnWomanTab()"
});
formatter.result({
  "duration": 17238932400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 20
    }
  ],
  "location": "WomanCategoryStep.iClickOnProduct(String)"
});
formatter.result({
  "duration": 11877004201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 19
    }
  ],
  "location": "WomanCategoryStep.iChangeQuantity(String)"
});
formatter.result({
  "duration": 165859700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 15
    }
  ],
  "location": "WomanCategoryStep.iSelectSize(String)"
});
formatter.result({
  "duration": 96446499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 17
    }
  ],
  "location": "WomanCategoryStep.iSelectColour(String)"
});
formatter.result({
  "duration": 322008400,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryStep.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 256705200,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryStep.iClosePopupDisplay()"
});
formatter.result({
  "duration": 9205884901,
  "status": "passed"
});
formatter.after({
  "duration": 39701,
  "status": "passed"
});
formatter.before({
  "duration": 15145690400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully",
  "description": "",
  "id": "womancategorypage-test;verifyusershouldaddproducttothecartsuccessfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Woman Tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on product \"Printed Summer Dress with Price $28.98\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I close popup display",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 19400,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryStep.iClickOnWomanTab()"
});
formatter.result({
  "duration": 9980929200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress with Price $28.98",
      "offset": 20
    }
  ],
  "location": "WomanCategoryStep.iClickOnProduct(String)"
});
formatter.result({
  "duration": 74544599,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression (//div[@class\u003d\u0027right-block\u0027]//a[contains(text(),\u0027Printed Summer Dress\u0027)] because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027(//div[@class\u003d\u0027right-block\u0027]//a[contains(text(),\u0027Printed Summer Dress\u0027)]\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d105.0.5195.126)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#invalid_selector_exception\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-ELH5PJN7\u0027, ip: \u0027192.168.0.194\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [690b18201eee7e3f95fda728344df9a4, findElement {using\u003dxpath, value\u003d(//div[@class\u003d\u0027right-block\u0027]//a[contains(text(),\u0027Printed Summer Dress\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.126, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\DIVYAP~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:60957}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60957/devtoo..., se:cdpVersion: 105.0.5195.126, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 690b18201eee7e3f95fda728344df9a4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:52)\r\n\tat com.automation.pages.ProductPage.selectedProductOne(ProductPage.java:95)\r\n\tat com.automation.steps.WomanCategoryStep.iClickOnProduct(WomanCategoryStep.java:29)\r\n\tat ✽.And I click on product \"Printed Summer Dress with Price $28.98\"(src/test/java/resources/featurefile/womancategorypagetest.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomanCategoryStep.iChangeQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomanCategoryStep.iSelectSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 17
    }
  ],
  "location": "WomanCategoryStep.iSelectColour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomanCategoryStep.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomanCategoryStep.iClosePopupDisplay()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 486842101,
  "status": "passed"
});
});
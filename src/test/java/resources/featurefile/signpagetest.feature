Feature: SignpageTest

  Scenario: userShouldNavigateToSignInPageSuccessFully
    Given I am on Home Page
    When  I click on sign in link
    Then  verify that "AUTHENTICATION" message is displayed


  Scenario Outline: verifyTheErrorMessageWithInValidCredentials
    Given I am on Home Page
    When  I click on sign in link
    And   I Enter username "<Username>"
    And   I Enter password "<Password>"
    And   I click On Sign in Button
    Then  Verify the error message "<Message>"
    Examples:
      | Username       | Password | Message                    |
      |                | 123456   | An email address required. |
      | abcd@gmail.com |          | Password is required.      |
      | adfdfgfg       | 123456   | Invalid email address.     |
      | abcd@gmail.com | 123456   | Authentication failed.     |

    Scenario: verifyThatUserShouldLogInSuccessFullyWithValidCredentials

      Given I am on Home Page
      When  I click on sign in link
      And   I Enter username "Testdiv1234@gmail.com"
      And   I Enter password "Diva123456"
      And   I click On Sign in Button
      Then  Verify that sign out link is displayed

    Scenario: verifyThatUserShouldLogOutSuccessFully

      Given I am on Home Page
      When  I click on sign in link
      And   I Enter username "Testdiv1234@gmail.com"
      And   I Enter password "Diva123456"
      And   I click On Sign in Button
      And   I sign out button
      Then  Verify that sign in link displayed


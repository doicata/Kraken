Feature: Ghost

@user1 @web
Scenario: Como usuario inicio sesion
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  When I enter email y password
  And I wait for 1 seconds
  Then I clic to Sign in
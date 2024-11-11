Feature: Ghost

@user1 @web
Scenario: Como usuario inicio sesion
  Given I navigate to page principal
  When I enter email y password
  And I wait for 1 seconds
  Then I clic to Sign in
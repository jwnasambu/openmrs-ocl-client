  Feature: Dictionary Management
  Background:
   Given the user is logged in

 Scenario: A user can create a new dictionary
    Given the user is on the user collections page
     Then the user clicks on Create Dictionary icon
     Then the user should be sent to the Create Dictionary page
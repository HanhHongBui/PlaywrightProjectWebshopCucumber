@smoke
Feature: Home page
    Scenario: Log in successfully
        Given I go to Log in page
        When I log in to page
        When I go to home page
        Then I see user email address displayed
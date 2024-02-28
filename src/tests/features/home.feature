Feature: Home page
    # Background:

    Scenario: Log in successfully
        Given I go to Log in page
        When I log in to page with username "superman1912@gmail.com" and password "12345678"
        When I go to home page
        Then I see user email address displayed
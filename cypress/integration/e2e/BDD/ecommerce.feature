Feature: End to end Ecommerce validation

    application Regression

    @Regression
    Scenario: Ecommerce prioducts delivery
    Given I open Ecommerce page
    When I add items to cart
    And validate the total prices
    Then select the country submit and verify Thank you

    @Smoke
    Scenario: Filling the form to shop
    Given I open Ecommerce page
    When I fill the form details
    | name | gender |
    | Bobby | Male |
    Then Validate the forms behaviour
    And Select the Shop Page
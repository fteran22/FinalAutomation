Feature: Adding items to the basket from the shop page

  Scenario: Successfully adding items to the basket and verifying basket updates
    Given I am on the automation page
    When I navigate to the shop page
    And I add several items to the basket
    Then I should see a "View Basket" message displayed
    And the shopping cart number should be increased
    And the added products should be visible in the basket page        
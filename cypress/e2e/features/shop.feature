Feature: Adding items to the basket from the shop page and placing the order

  Scenario: Successfully adding items to the basket and completing the order
    Given I am on the automation page
    When I navigate to the shop page
    And I add items to the basket
    Then I should see a "View Basket" message displayed
    And the shopping cart number should be increased
    And the added products should be visible in the basket page
    When I click on "Proceed to Checkout" on the basket page
    And I add billing details on the checkout page
    And I select the payment method
    Then I click "Place Order"
    And I should see a confirmation message indicating that the order was successful

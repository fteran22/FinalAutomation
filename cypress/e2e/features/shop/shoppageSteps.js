import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pages/homePage';
// Assuming you have these methods in your page objects
import ShopPage from '../../pages/shopPage1';
import BasketPage from '../../pages/basketPage';
import CheckoutPage from '../../pages/checkoutPage';

Given('I am on the automation page', () => {
    HomePage.visit();
});

When('I navigate to the shop page', () => {
    ShopPage.goToShopPage();
});

When('I add items to the basket', ()=> {
    ShopPage.addItemsToBasket();
  });

Then('I should see a "View Basket" message displayed', () => {
    ShopPage.verifyViewBasketMessage();
});

Then('the shopping cart number should be increased', () => {
    ShopPage.verifyCartNumberIncreased();
});

Then('the added products should be visible in the basket page', () => {
    BasketPage.verifyProductsInBasket();
});

When('I click on "Proceed to Checkout" on the basket page', () => {
    BasketPage.goToProceedToCheckout();
  });
  
  Then('I add billing details on the checkout page', () => {
    cy.fixture('billing').then((billing) => {
      CheckoutPage.fillBillingInformation(billing);
    });
  });
  
  Then('I select the payment method', () => {
    CheckoutPage.clickPaymentMethod();       
  });


Then('I click "Place Order"', () => {
    CheckoutPage.clickPlaceOrder();
});

Then('I should see a confirmation message indicating that the order was successful', () => {
    CheckoutPage.verifyOrderReceivedMessage();
});




import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pages/homePage';
// Assuming you have these methods in your page objects
import ShopPage from '../../pages/shopPage1';
import BasketPage from '../../pages/basketPage';

Given('I am on the automation page', () => {
    HomePage.visit();
});

When('I navigate to the shop page', () => {
    ShopPage.goToShopPage();
});

When('I add several items to the basket', ()=> {
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

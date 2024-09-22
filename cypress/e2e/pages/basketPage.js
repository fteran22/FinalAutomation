const BASKET_PAGE_URL = 'https://practice.automationtesting.in/basket/';
const PRODUCT_SELECTOR = '#wpmenucartli > a > span.cartcontents';
const CHECKOUT_BUTTON = '#page-34 > div > div.woocommerce > div > div > div > a';

class BasketPage {
    static verifyProductsInBasket() {
        cy.visit(BASKET_PAGE_URL);
        cy.get(PRODUCT_SELECTOR).should('have.length.greaterThan', 0);
    }
    static goToProceedToCheckout() {
        cy.get(CHECKOUT_BUTTON).click();
        
    }
}


export default BasketPage;

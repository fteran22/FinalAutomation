const BASKET_PAGE_URL = 'https://practice.automationtesting.in/basket/';
const PRODUCT_SELECTOR = '#wpmenucartli > a > span.cartcontents';

class BasketPage {
    static verifyProductsInBasket() {
        cy.visit(BASKET_PAGE_URL);
        cy.get(PRODUCT_SELECTOR).should('have.length.greaterThan', 0);
    }
}

export default BasketPage;

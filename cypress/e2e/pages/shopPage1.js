const SHOP_PAGE_URL = '#menu-item-40 > a';
const VIEW_BASKET_MESSAGE_SELECTOR = '#content > ul > li.post-169.product.type-product.status-publish.product_cat-android.product_tag-android.has-post-title.no-post-date.has-post-category.has-post-tag.has-post-comment.has-post-author.first.instock.sale.downloadable.taxable.shipping-taxable.purchasable.product-type-simple > a.added_to_cart.wc-forward';
const CART_NUMBER_SELECTOR = '#wpmenucartli > a > span.cartcontents';
const PRODUCT_ADDED_SELECTOR = '#content > ul > li.post-169.product.type-product.status-publish.product_cat-android.product_tag-android.has-post-title.no-post-date.has-post-category.has-post-tag.has-post-comment.has-post-author.first.instock.sale.downloadable.taxable.shipping-taxable.purchasable.product-type-simple > a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart';

class ShopPage {
    static goToShopPage() {
        cy.get(SHOP_PAGE_URL).click({ force: true });
    }

    static addItemsToBasket() {
        cy.get(PRODUCT_ADDED_SELECTOR).click();
        
    }

    static verifyViewBasketMessage() {
        cy.get(VIEW_BASKET_MESSAGE_SELECTOR).should('be.visible');
    }

    static verifyCartNumberIncreased() {
        // This is a simple example; you may need to adjust based on your cart logic
        cy.get(CART_NUMBER_SELECTOR).invoke('text').then((text) => {
            const number = parseInt(text, 10);
            cy.wrap(number).should('be.greaterThan', 0);
        });
    }
}

export default ShopPage;

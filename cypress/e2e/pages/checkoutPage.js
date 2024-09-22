class CheckoutPage {
  // Define selectors as constants
  selectors = {
    firstNameInput: '#billing_first_name',
    lastNameInput: '#billing_last_name',
    emailInput: '#billing_email',
    phoneInput: '#billing_phone',
    addressInput: '#billing_address_1',
    cityInput: '#billing_city',
    postcodeInput: '#billing_postcode',
    paymentMethodCod: '#payment_method_cod',
    placeOrderButton: '#place_order',
    orderReceivedMessage: '.woocommerce-thankyou-order-received',
    billingInfoDisplay: '.billing-info-display'
  };

  fillBillingInformation(billing) {
    cy.get(this.selectors.firstNameInput).type(billing.firstName).should('have.value', billing.firstName);
    cy.get(this.selectors.lastNameInput).type(billing.lastName).should('have.value', billing.lastName);
    cy.get(this.selectors.emailInput).type(billing.email).should('have.value', billing.email);
    cy.get(this.selectors.phoneInput).type(billing.phone).should('have.value', billing.phone);
    cy.get(this.selectors.addressInput).type(billing.address).should('have.value', billing.address);
    cy.get(this.selectors.cityInput).type(billing.city).should('have.value', billing.city);
    cy.get(this.selectors.postcodeInput).type(billing.postcode).should('have.value', billing.postcode);
  }

  clickPaymentMethod() {
    cy.get(this.selectors.paymentMethodCod).check();
  }

  
  clickPlaceOrder() {
    cy.get(this.selectors.placeOrderButton).click();
  }

  verifyOrderReceivedMessage() {
    cy.get(this.selectors.orderReceivedMessage)
      .should('contain', 'Thank you. Your order has been received.');
  }
}

export default new CheckoutPage();

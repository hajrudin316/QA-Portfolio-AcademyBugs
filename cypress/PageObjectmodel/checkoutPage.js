class CheckoutPage {
    getTitle() {
        return cy.get('[data-test="title"]');
    }

    getFirstNameInput() {
        return cy.get('[data-test="firstName"]');
    }

    getLastNameInput() {
        return cy.get('[data-test="lastName"]');
    }

    getPostalCodeInput() {
        return cy.get('[data-test="postalCode"]');
    }

    getContinueButton() {
        return cy.get('[data-test="continue"]');
    }

    getFinishButton() {
        return cy.get('[data-test="finish"]');
    }

    getTotalLabel() {
        return cy.get('[data-test="total-label"]');
    }

    getCompleteHeader() {
        return cy.get('.complete-header');
    }

    getCompleteText() {
        return cy.get('.complete-text');
    }

    // Adding missing methods for checkout overview
    getItemQuantity() {
        return cy.get('[data-test="item-quantity"]');
    }

    getItemName() {
        return cy.get('[data-test="inventory-item-name"]');
    }

    getItemDescription() {
        return cy.get('[data-test="inventory-item-desc"]');
    }

    getItemPrice() {
        return cy.get('[data-test="inventory-item-price"]');
    }
}

module.exports = new CheckoutPage();
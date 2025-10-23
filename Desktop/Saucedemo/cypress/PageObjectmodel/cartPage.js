class CartPage {
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

    getCheckoutButton() {
        return cy.get('[data-test="checkout"]');
    }
}

module.exports = new CartPage();
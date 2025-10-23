class InventoryPage {
    getBackpackImage() {
        return cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]');
    }

    getBikeLightImage() {
        return cy.get('[data-test="inventory-item-sauce-labs-bike-light-img"]');
    }

    getBoltTshirtImage() {
        return cy.get('[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]');
    }

    getFleeceJacketImage() {
        return cy.get('[data-test="inventory-item-sauce-labs-fleece-jacket-img"]');
    }

    getOnesieImage() {
        return cy.get('[data-test="inventory-item-sauce-labs-onesie-img"]');
    }

    getRedTshirtImage() {
        return cy.get('[data-test="inventory-item-test.allthethings()-t-shirt-(red)-img"]');
    }

    addToCartBackpack() {
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    getShoppingCartBadge() {
        return cy.get('[data-test="shopping-cart-badge"]');
    }

    getShoppingCartLink() {
        return cy.get('.shopping_cart_link');
    }
}

module.exports = new InventoryPage();
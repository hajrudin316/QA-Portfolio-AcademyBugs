import loginPage from '../../PageObjectmodel/loginPage';
import inventoryPage from '../../PageObjectmodel/inventoryPage';
import cartPage from '../../PageObjectmodel/cartPage';
import checkoutPage from '../../PageObjectmodel/checkoutPage';

describe('Saucedemo - one test per page object (consolidated)', () => {
    // Login test
    it('Login using LoginPage POM', () => {
        cy.visit('/');
        cy.fixture('example').then((data) => {
            loginPage.usernameInp().type(data.username);
            loginPage.passwordInp().type(data.password);
            loginPage.loginButton().click();
            // verify we reached inventory
            inventoryPage.getBackpackImage().should('be.visible');
        });
    });

    // Inventory test
    it('Inventory thumbnails and add-to-cart using InventoryPage POM', () => {
        cy.visit('/');
        cy.fixture('example').then((data) => {
            loginPage.usernameInp().type(data.username);
            loginPage.passwordInp().type(data.password);
            loginPage.loginButton().click();
        });

        inventoryPage.getBackpackImage().should('be.visible');
        inventoryPage.getBikeLightImage().should('be.visible');
        inventoryPage.addToCartBackpack().click();
        inventoryPage.getShoppingCartBadge().should('have.text', '1');
    });

    // Cart test
    it('Cart content verification using CartPage POM', () => {
        cy.visit('/');
        cy.fixture('example').then((data) => {
            loginPage.usernameInp().type(data.username);
            loginPage.passwordInp().type(data.password);
            loginPage.loginButton().click();
            inventoryPage.addToCartBackpack().click();
            inventoryPage.getShoppingCartLink().click();

            cartPage.getItemQuantity().should('have.text', '1');
            cartPage.getItemName().should('have.text', data.productName);
            cartPage.getItemDescription().should('have.text', data.productDescription);
            cartPage.getItemPrice().should('have.text', data.productPrice);
        });
    });

    // Checkout test
    it('Complete checkout using CheckoutPage POM', () => {
        cy.visit('/');
        cy.fixture('example').then((data) => {
            loginPage.usernameInp().type(data.username);
            loginPage.passwordInp().type(data.password);
            loginPage.loginButton().click();
            inventoryPage.addToCartBackpack().click();
            inventoryPage.getShoppingCartLink().click();
            cartPage.getCheckoutButton().click();

            checkoutPage.getTitle().should('have.text', 'Checkout: Your Information');
            checkoutPage.getFirstNameInput().type('John');
            checkoutPage.getLastNameInput().type('Doe');
            checkoutPage.getPostalCodeInput().type('12345');
            checkoutPage.getContinueButton().click();

            checkoutPage.getTitle().should('have.text', 'Checkout: Overview');
            checkoutPage.getItemQuantity().should('have.text', '1');
            checkoutPage.getItemName().should('contain.text', data.productName);
            checkoutPage.getItemDescription().should('contain.text', data.productDescription);
            checkoutPage.getItemPrice().should('contain.text', data.productPrice);
            // Check total exists (value may vary)
            checkoutPage.getTotalLabel().should('exist');
            checkoutPage.getFinishButton().click();

            checkoutPage.getTitle().should('have.text', 'Checkout: Complete!');
            checkoutPage.getCompleteHeader().should('have.text', 'Thank you for your order!');
        });
    });
});


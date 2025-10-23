class loginPage {
    usernameInp() {
return cy.get('[data-test="username"]')
    }

    passwordInp() {
return cy.get('[data-test="password"]')
    }
    loginButton() {
return cy.get('[data-test="login-button"]')
    }
}

module.exports = new loginPage();
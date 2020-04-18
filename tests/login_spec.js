// Tests for login page 

// Page Object file
var LoginPage = require('../pageObjects/login_page')

describe('Login Page Tests', function() {

    beforeEach(function ()
    {
        loginPage = new LoginPage()

        //because is not an angular site 
        browser.ignoreSynchronization = true

        //open URL 
        browser.get('file:///C:/Users/canoz/Web/protractor/superbook/index.html')
    })

    afterEach(function ()
    {

    })

    it('should display all login page elements', function()
    {
        expect(loginPage.loginTitleText.isDisplayed()).toBe(true)
        expect(loginPage.emailFieldLabel.isDisplayed()).toBe(true)
        expect(loginPage.emailInputField.isDisplayed()).toBe(true)
        expect(loginPage.passwordLabel.isDisplayed()).toBe(true)
        expect(loginPage.passwordInputLabel.isDisplayed()).toBe(true)
        expect(loginPage.rememberLoginLabels.isDisplayed()).toBe(true)
        expect(loginPage.rememberMeCheckBox.isDisplayed()).toBe(true)
        expect(loginPage.submitLoginButton.isDisplayed()).toBe(true)
    })

    it(' should display error message when no username or password entered ', function()
    {

    })

    it(' should display error message when no password entered ', function()
    {

    })

    it('should display error message when no username entered', function()
    {

    })

    it('should log user in', function()
    {

    })

})
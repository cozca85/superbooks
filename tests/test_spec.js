var TestPage = require('../pageObjects/test_page')

describe('Superbook Page', function() {

    var testPage

    beforeEach( function() {
        browser.ignoreSynchronization = true

        testPage = new TestPage()

        //open URL
        browser.get('file:///C:/Users/canoz/Web/protractor/superbook/index.html')
    })

    afterEach( function() {

    })

    it('should load the correct URL and login', function() {
        //verify welcome text
        expect(testPage.loginTitleText.getText()).toEqual('Welcome. Please login.')
        var fieldsRequired = "Email and password are required"
        //Enter only email
        element(testPage.emailField.sendKeys('test@test.com'))

        //click submit
        element(by.id('submitLoginForm')).click();

        //verify elements IRRELEVANT
        //expect(element(by.id('loginEmail')).getText()).toEqual('test@test.com')
        //expect(element(by.id('loginPassword')).val()).toEqual('password')

        //verify required message
        expect(element(by.id('login-alert')).getText()).toEqual(fieldsRequired)

        //enter only password
        element(by.id('loginEmail')).clear()
        element(by.id('loginPassword')).sendKeys('password')

        //verify required message again 
        expect(element(by.id('login-alert')).getText()).toEqual(fieldsRequired)

        //enter invalid email 
        element(by.id('loginEmail')).sendKeys('test')
        expect(element(by.id('loginEmail')).getAttribute('value')).toEqual('test')
        element(by.id('submitLoginForm')).click()

        //enter both correctly and submit
        element(by.id('loginEmail')).clear()
        element(by.id('loginEmail')).sendKeys('test@test.com')
        element(by.id('loginPassword')).clear()
        element(by.id('loginPassword')).sendKeys('password')
        element(by.id('submitLoginForm')).click()

        browser.sleep(5000)
    })

})

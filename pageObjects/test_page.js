var TestPage = function () {}

TestPage.prototype = Object.create({},{
    emailField: {get: function() { return element(by.id('loginEmail')) } },
    passwordField: {get: function() { return element(by.id('loginPassword')) } },
    loginTitleText:  {get: function() { return element(by.id('login-title')) } },
    buttonText: {get: function() { return element(by.buttonText('Submit')) } }
})

module.exports = TestPage
//login Page Objects

var LoginPage = function () {}

LoginPage.prototype = Object.create({}, {
    loginTitleText: {get: function() { return element(by.id('login-title')) }  }, //Update for your element
    emailFieldLabel: {get: function() { return element(by.css('#form-login > div:nth-child(1) > label')) }  }, 
    emailInputField: {get: function() { return element(by.id('loginEmail')) }  }, 
    passwordLabel: {get: function() { return element(by.css('#form-login > div:nth-child(2) > label')) }  }, 
    passwordInputLabel: {get: function() { return element(by.id('loginPassword')) }  }, 
    rememberLoginLabel: {get: function() { return element(by.css('#form-login > div.form-group.form-check > label')) }  }, 
    rememberMeCheckBox: {get: function() { return element(by.id('rememberLoginCheck')) }  }, 
    submitLoginButton: {get: function() { return element(by.id('submitLoginForm')) }  },
})


module.exports = LoginPage
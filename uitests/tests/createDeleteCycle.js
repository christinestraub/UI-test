const { setup, BrowserMode} = require('../src/testsetup');
const { format, addDays, parse } = require('date-fns');

const runTheTest = (browser, browserMode) => {
    const startDate = format(addDays(new Date(), 7), 'MM/DD/YYYY');
    const endDate = format(addDays(new Date(), 14), 'MM/DD/YYYY');
    const cycleDate = format(parse(startDate), 'MMM D, YYYY') + ' Cycle';
    setup(browser, browserMode);
    browser.page.sso()
        .initLoginState()
        .url(browser.globals.baseUrl)
        .page.sso()
        .login(browser.globals.userLogin.userEmail, browser.globals.userLogin.userPassword)
        .waitForElementNotPresent('@emailInput')
        .api
        .page.tp()
        .waitForElementNotPresent('@splashLoading')

        // code start
        // Tip: might be able to find existing pageobjects (for example, @splashloading on the line above) but for cycles in /uitests/pageobjects
        // Cycle start date should be (today + 7 days)
        // Cycle end date should be (today + 14 days)

        // Navigate to cycle configuration
        .openMenu('@settings', '@cycleConfig')

        // Create a new cycle
        .api
        .page.cycleConfiguration()
        .waitForElementPresent('@cycleConfigurationHeader')
        .click('@newCycle')
        .waitForElementPresent('@createCycleModal')
        .fillAndSubmitForm(startDate, endDate)
        .waitForElementNotPresent('@createCycleModal')

        // Delete the cycle
        .selectCreatedCycle(cycleDate)
        .clickSelectedCycleSettings()
        .waitForElementPresent('@deleteCycle')
        .click('@deleteCycle')
        .waitForElementPresent('@okButton')
        .click('@okButton')

        // code end
        // Test is completed by calling this
        .end();
};

module.exports = {
    'Desktop Create/Delete Cycle Test' : function (browser) {
        runTheTest(browser, BrowserMode.desktop);
    }
};
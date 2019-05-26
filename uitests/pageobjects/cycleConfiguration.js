const commands = {
    fillAndSubmitForm: function(payEffectiveDate, endDate) {
        return this
            .clearValue('@payEffectiveDate')
            .setValue('@payEffectiveDate', payEffectiveDate)
            .clearValue('@endDate')
            .setValue('@endDate', endDate + '\uE00C')
            .waitForElementVisible('@createCycleButton')
            .click('@createCycleButton');
    },
    selectCreatedCycle: function(cycleDate) {
        const cycleSelector = '//a[text()="' + cycleDate + '"]';
        return this
            .useXpath()
            .waitForElementPresent(cycleSelector)
            .click(cycleSelector)
            .useCss();
    },
    clickSelectedCycleSettings: function() {
        return this
            .useXpath()
            .waitForElementVisible('@selectedCycleSettings')
            .click('@selectedCycleSettings');
    }
};

module.exports = {
    commands: [commands],
    url: function() {
        return this.globals.baseUrl + '/configuration/cycle';
    },
    elements: {
        cycleConfigurationHeader: {
            selector: '.cycle-config__heading'
        },
        newCycle: {
            selector: '.new-cycle-button'
        },
        createCycleModal: {
            selector: '.create-cycle-dialog-content'
        },
        payEffectiveDate: {
            selector: '#payEffectiveDate'
        },
        endDate: {
            selector: '#endDate'
        },
        createCycleButton: {
            selector: '.create-cycle-button'
        },
        currentCycle: {
            selector: 'li.selected-cycle'
        },
        cycleTitle: {
            selector: '.selected-cycle .flex-row a'
        },
        cycleSettings: {
            selector: '.selected-cycle .cycle-settings'
        },
        selectedCycleSettings: {
            selector: '//li[@class="selected-cycle"]/ul/li[3]/a',
            locateStrategy: 'xpath'
        },
        deleteCycle: {
            selector: '.delete-cycle'
        },
        okButton: {
            selector: '.confirmation-modal__confirm-button'
        }
    }
}
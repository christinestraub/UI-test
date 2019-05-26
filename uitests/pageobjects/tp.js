const commands = {
    openMenu: function(menuItem, subItem) {
        return this
            .waitForElementVisible(menuItem)
            .click(menuItem)
            .waitForElementVisible(subItem)
            .click(subItem);
    }
};

module.exports = {
    commands: [commands],
    url: function() {
        return this.globals.baseUrl;
    },
    elements: {
        // Global stuff
        splashLoading: {
            selector: '#loadingContent'
        },

        // Header
        settings: {
            selector: '.header-nav-bar #settingDropdown'
        },
        cycleConfig: {
            selector: '.cycle-configuration-settings'
        },
        notificationButton: {
            selector: '.notification-count'
        },
        notificationModal: {
            selector: '.notification-view'
        },

        // Menu
        openMenuButton: {
            selector: '.navbar-toggler'
        }
    }
}
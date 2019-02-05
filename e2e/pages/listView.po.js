const commonActions = require('../core/CommonActions');
class ListView {

    constructor() {

        //this.nameText = '//span[text()="Account"]/ancestor::div[@class="slds-media__body"]/descendant::span[@data-aura-class="uiOutputText"]';
        this.nameText = 'textarea.js-list-name-input';
        this.phoneText = '.slds-page-header__detail-row .slds-form-element__static span[data-aura-class="uiOutputPhone"]';

        this.editButton = 'a[title="Edit"]';

        this.detailsTab = 'a.tabHeader[title="Details"]';
    }

    getNameText() {
        return commonActions.getText(this.nameText);
    }

    getPhoneText() {
        return commonActions.getText(this.phoneText);
    }

    clickDetailsTab() {
        commonActions.click(this.detailsTab);
    }
}

module.exports = ListView;
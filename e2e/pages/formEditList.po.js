const commonActions = require('../core/CommonActions');

class EditListForm {

    constructor() {
        this.nameLink = 'div.list-header-target';
        this.nameField = 'textarea.list-header-name';
        this.addListLink = 'span.js-add-a-card';

    }

     clickEditLink() {
        commonActions.click(this.nameLink);
        browser.keys(['Enter']);
    }


    clickAddNewCard() {
        commonActions.click(this.addListLink);
    }

    fillEditListForm(editBoardJson) {

        commonActions.setValue(this.nameField, editBoardJson.NewTitle);

    }

}

module.exports = EditListForm;

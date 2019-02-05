const commonActions = require('../core/CommonActions');

class EditListForm {

    constructor() {
        this.nameLink = 'div.list-header-target';
        this.nameField = 'textarea.list-header-name';
        this.addListLink = 'span.js-add-a-card';
        this.editedField = 'h2.js-list-name-assist';
    }

     clickEditLink() {
        commonActions.click(this.nameLink);
    }


    clickAddNewCard() {
        commonActions.click(this.addListLink);
    }

    fillEditListForm(editBoardJson) {

        commonActions.setValue(this.nameField, editBoardJson.NewTitle);

    }
    getNameText() {
        return commonActions.getText(this.nameField);
    }


}

module.exports = EditListForm;

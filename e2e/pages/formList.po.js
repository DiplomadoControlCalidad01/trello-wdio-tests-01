const commonActions = require('../core/CommonActions');

class FormList {

    constructor() {
        this.addlist = 'span.placeholder';
        this.nameField = 'input.list-name-input';
        this.saveButton = 'input.primary.mod-list-add-button.js-save-edit';
    }

    filListForm(listJson) {
        commonActions.setValue(this.nameField, listJson.Title)

    };

    clickSaveButton() {
        commonActions.click(this.saveButton);
    }
}

module.exports = FormList;
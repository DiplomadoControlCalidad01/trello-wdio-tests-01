const commonActions = require('../core/CommonActions');

class FormCard {

    constructor() {
        this.nameField = 'input.list-name-input';
        this.saveButton = 'input.primary.mod-list-add-button.js-save-edit';
    }

    fillListForm(listJson) {
        commonActions.setValue(this.nameField, listJson.Title)

    };

    clickSaveButton() {
        commonActions.click(this.saveButton);
    }
}

module.exports = FormCard;
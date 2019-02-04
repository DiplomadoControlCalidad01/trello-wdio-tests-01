const commonActions = require('../core/CommonActions');

class FormEditCard {

    constructor() {
        this.dialogNameField = 'textarea.js-card-detail-title-input';
        this.nameField = 'span.js-card-name';
        this.closeButton = 'a.dialog-close-button';
    }

    fillEditCardForm(listJson) {
        commonActions.setValue(this.dialogNameField, listJson.Title)
    };

    clickCloseButton() {
        commonActions.click(this.closeButton);
    }

    clickNameField() {
        commonActions.click(this.nameField);
    }
    clickDialogNameField() {
        commonActions.click(this.dialogNameField);
    }
}

module.exports = FormEditCard;
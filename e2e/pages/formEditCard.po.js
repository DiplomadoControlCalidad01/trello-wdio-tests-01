const commonActions = require('../core/CommonActions');

class FormEditCard {

    constructor() {
        this.dialogNameField = 'textarea.js-card-detail-title-input';
        this.nameField = 'span.js-card-name';
        this.closeButton = 'a.dialog-close-button';
        this.nameCard = 'span.card-short-id';
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
    getNameText() {
        return commonActions.getText(this.nameField);
    }

}

module.exports = FormEditCard;
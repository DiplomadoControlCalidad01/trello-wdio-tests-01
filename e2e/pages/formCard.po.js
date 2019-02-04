const commonActions = require('../core/CommonActions');

class FormCard {

    constructor() {
        this.addCard = 'span.js-add-a-card';
        this.nameField = 'textarea.list-card-composer-textarea';
        this.saveButton = 'input.js-add-card';
    }

    fillCardForm(listJson) {
        commonActions.setValue(this.nameField, listJson.Title)
    };

    clickSaveButton() {
        commonActions.click(this.saveButton);
    }

    clickNewLink() {
        commonActions.click(this.addCard);
    }
}

module.exports = FormCard;
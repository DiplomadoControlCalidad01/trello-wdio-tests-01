const commonActions = require('../core/CommonActions');

class EditFormBoard {

    constructor() {
        this.nameBoard = 'a.board-header-btn.board-header-btn-name.js-rename-board';
        this.nameField = 'input.list-name-input';
        this.saveButton = 'input.primary.wide.js-rename-board';

    }


    clickSaveButton() {
        commonActions.click(this.createButton);
    }

    fillEditForm(editBoardJson) {
        let editBoardSteps = {
            'NewTitle': () => commonActions.setValue(this.nameField, editBoardJson.NewTitle)
        };

        Object.keys(editBoardJson).forEach(key => {
            editBoardSteps[key].call();
        });
    }

}

module.exports = EditFormBoard;

const commonActions = require('../core/CommonActions');

class EditFormBoard {

    constructor() {
        this.nameBoard = 'span.board-header-btn-text';
        this.nameField = 'input.js-board-name.js-autofocus';
        this.saveButton = 'input.primary.wide.js-rename-board';
    }

    clickNameBoard() {
        commonActions.click(this.nameBoard);
    }

    clickSaveButton() {
        commonActions.click(this.saveButton);
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

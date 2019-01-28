const commonActions = require('../core/CommonActions');

class FormBoard {

    constructor() {
        this.title = 'input.subtle-input';
        this.createButton = 'button.primary';

    }

    setNameBoardField(titleBoard) {
        commonActions.setValue(this.title, titleBoard);
    }

    clickSaveButton() {
        commonActions.click(this.createButton);
    }

    fillForm(boardJson) {
        let boardSteps = {
            'Title': () => commonActions.setValue(this.title, boardJson.Title)
        };

        Object.keys(boardJson).forEach(key => {
            boardSteps[key].call();
        });
    }

}

module.exports = FormBoard;

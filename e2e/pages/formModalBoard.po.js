const commonActions = require('../core/CommonActions');

class FormBoard {

    constructor() {
        this.title = 'input.subtle-input';
        this.createButton = 'button.primary';

    }

    setNameBoardField() {
        commonActions.setValue(this.title, 'BOARD TEST WDIO');
    }

    clickSaveButton() {
        commonActions.click(this.createButton);
    }

     newBoard() {
        let formBoard = new FormBoard();
        formBoard.setNameBoardField();
        formBoard.clickSaveButton();

    }

}

module.exports = FormBoard;

const commonActions = require('../core/CommonActions');
const FormBoard = require('../pages/formModalBoard.po');

class Header {

    constructor() {
        this.appAddButton = '.icon-add.light';
        this.createBoard = 'a.js-new-board';
    }

    clickAddButton() {
        commonActions.click(this.appAddButton);
        commonActions.click(this.createBoard);
        return new FormBoard();
    }

}

module.exports = Header;

const commonActions = require('../core/CommonActions');

class RightMenu {

    constructor() {
        this.moreMenu = 'a.board-menu-navigation-item-link.js-open-more';
        this.closeBoardMenu = 'a.board-menu-navigation-item-link.js-close-board';
        this.closeConfirmButton = 'input.js-confirm.full.negate';
        this.deleteBoard = 'a.quiet.js-delete';

    }


    clickMoreMenu() {
        commonActions.click(this.moreMenu);
    }

    clickCloseBoard() {
        commonActions.click(this.closeBoardMenu);
    }

    clickCloseConfirmBoard() {
        commonActions.click(this.closeConfirmButton);
    }

    clickdeleteBoard() {
        commonActions.click(this.deleteBoard);
    }


}

module.exports = RightMenu;

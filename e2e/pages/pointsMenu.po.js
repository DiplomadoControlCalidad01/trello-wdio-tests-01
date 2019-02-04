const commonActions = require('../core/CommonActions');

class PointsMenu {

    constructor() {
        this.threePointsLink = 'a.list-header-extras-menu';
        //this.closeBoardMenu = 'a.board-menu-navigation-item-link.js-close-board';
        //this.closeConfirmButton = 'input.js-confirm.full.negate';
        this.archiveList = 'a.js-close-list';
    }

    clickPointsLink() {
        commonActions.click(this.threePointsLink);
    }


    clickCloseBoard() {
        commonActions.click(this.closeBoardMenu);
    }

    clickCloseConfirmBoard() {
        commonActions.click(this.closeConfirmButton);
    }

    clickArchiveList() {
        commonActions.click(this.archiveList);
    }


}

module.exports = PointsMenu;

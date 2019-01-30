const commonActions = require('../core/CommonActions');
const FormBoard = require('../pages/formModalBoard.po');
const FormTeam = require('../pages/formModalTeam.po');

class Header {

    constructor() {
        this.appAddButton = '.icon-add.light';
        this.createBoard = 'a.js-new-board';
        this.createTeam = 'a.js-new-org';
        this.initPage = 'span.header-btn-icon.icon-lg.icon-house.light';
    }

    clickAddButton() {
        commonActions.click(this.appAddButton);
        commonActions.click(this.createBoard);
        return new FormBoard();
    }

    clickAddTeamButton() {
        commonActions.click(this.appAddButton);
        commonActions.click(this.createTeam);
        return new FormTeam();
    }


}

module.exports = Header;

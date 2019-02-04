const commonActions = require('../core/CommonActions');
const FormBoard = require('../pages/formModalBoard.po');
const FormTeam = require('../pages/formModalTeam.po');

class Header {

    constructor() {
        this.appAddButton = '.icon-add.light';
        this.createBoard = 'a.js-new-board';
        this.createTeam = 'a.js-new-org';
        this.home = 'span.header-btn-icon.icon-lg.icon-house.light';
        this.addteamLeftMenu = 'div#content button > span:nth-child(2)';
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

    clickAddTeamButtonHome() {
        commonActions.click(this.addteamLeftMenu);
        return new FormTeam();
    }

}

module.exports = Header;

const commonActions = require('../core/CommonActions');
const {credentials} = require('../../environment');
const Login = require('../pages/login.po');
const EditFormBoard = require('../pages/formEditBoard.po');
const RightMenu = require('../pages/optionsRightMenu.po');
const Header = require('../pages/header.po');

class Util {


    static createBoard(dataBoard) {
        let formModalBoard = new Header().clickAddButton();
        formModalBoard.fillForm(dataBoard);
        formModalBoard.clickSaveButton();

    }

    static createTeam(dataTeam) {
        let formModalTeam = new Header().clickAddTeamButton();
        formModalTeam.fillForm(dataTeam);
        formModalTeam.clickCreateButton();
    }


}

module.exports = Util;

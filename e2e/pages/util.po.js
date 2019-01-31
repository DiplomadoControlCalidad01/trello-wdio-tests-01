const commonActions = require('../core/CommonActions');
const {credentials} = require('../../environment');
const Login = require('../pages/login.po');
const EditFormBoard = require('../pages/formEditBoard.po');
const RightMenu = require('../pages/optionsRightMenu.po');


class Util {


    createBoard(dataBoard) {

        let header = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        let formModalBoard = header.clickAddButton();
        formModalBoard.fillForm(dataBoard);
        formModalBoard.clickSaveButton();

    }

    createTeam(dataTeam) {

        let header = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        let formModalTeam = header.clickAddTeamButton();


        formModalTeam.fillForm(dataTeam);

        formModalTeam.clickCreateButton();
    }


}

module.exports = Util;

const {credentials} = require('../../environment');
const Login = require('../pages/login.po');
const util = require('../pages/objectCreator');
const FormTeamMain = require('../pages/formTeam.po');



describe('Feature Board', () => {
    let header;

    beforeEach(() => {
        header = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
    });

    it('#BVT Create Board', () => {
        let board = {
            'Title': '000 NEW BOARD - AUTOMATED TEST'
        };
        util.createBoard(board);
    });

    it('#BVT Create Board from Team', () => {
        let team = {
            'Name': 'NAME TEAM',
            'Description': 'DESCRIPTION'
        };
        util.createTeam(team);
        browser.pause(4000);
        let formTeamMain = new FormTeamMain();
        let formModalBoard = formTeamMain.clickCreateBoard();

        let board = {
            'Title': '000 NEW BOARD - AUTOMATED TEST'
        };
        formModalBoard.fillForm(board);
        formModalBoard.clickSaveButton();

    });

});

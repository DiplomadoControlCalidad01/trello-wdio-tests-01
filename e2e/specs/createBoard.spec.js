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
            'Title': 'New Board to Test'
        };
        util.createBoard(board);
    });

    it('#BVT Create Board from Team', () => {
        let team = {
            'Name': 'New Team to Test',
            'Description': 'Description'
        };
        util.createTeam(team);
        let formTeamMain = new FormTeamMain();
        let formModalBoard = formTeamMain.clickCreateBoard();

        let board = {
            'Title': 'New Board Form Team to Test'
        };
        formModalBoard.fillForm(board);
        formModalBoard.clickSaveButton();

    });

});

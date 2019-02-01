const {credentials} = require('../../environment');
const util = require('../pages/objectCreator');
const EditFormBoard = require('../pages/formEditBoard.po');
const Login = require('../pages/login.po');

describe('Edit Board', () => {
    let header;
    beforeEach(() => {
        header = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
    });

    it('Edit', () => {
        let board = {
            'Title': '000 NEW BOARD FOR AUTOMARESD TEST'
        };


        util.createBoard(board);

        let formEditBoard = new EditFormBoard();
        formEditBoard.clickNameBoard();

        let editBoard = {
            'NewTitle': 'EDIT NAME BOARD TEST AUTOMATED'
        };
        formEditBoard.fillEditForm(editBoard);
        formEditBoard.clickSaveButton();


    });
});

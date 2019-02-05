const {credentials} = require('../../environment');
const util = require('../pages/objectCreator');
const EditFormBoard = require('../pages/formEditBoard.po');
const Login = require('../pages/login.po');
const RightMenu = require('../pages/optionsRightMenu.po');

describe('Board Feature', () => {
    let header;
    beforeEach(() => {
        header = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
    });

    it('Edit Board', () => {
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

    it('Delete Board', () => {

        let board = {
            'Title': '000 NEW BOARD FOR AUTOMARESD TEST'
        };


        util.createBoard(board);

        let optionRightMenu = new RightMenu();
        optionRightMenu.clickMoreMenu();
        optionRightMenu.clickCloseBoard();
        optionRightMenu.clickCloseConfirmBoard();
        optionRightMenu.clickdeleteBoard();
        optionRightMenu.clickCloseConfirmBoard();


    });


});

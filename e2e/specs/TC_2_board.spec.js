const {credentials} = require('../../environment');
const Login = require('../pages/login.po');
const EditFormBoard = require('../pages/formEditBoard.po');
const RightMenu = require('../pages/optionsRightMenu.po');


describe('Login to trello', () => {
    it('Login', () => {
        let header = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        let formModalBoard = header.clickAddButton();

        let board = {
            'Title': '000New Board'
        };
        formModalBoard.fillForm(board);
        formModalBoard.clickSaveButton();
        browser.pause(3000);

        let formEditBoard = new EditFormBoard();
        formEditBoard.clickNameBoard();
        browser.pause(3000);

        let editBoard = {
            'NewTitle': 'EDIT BOARD'
        };
        formEditBoard.fillEditForm(editBoard);
        browser.pause(3000);
        formEditBoard.clickSaveButton();
        browser.pause(3000);

        let optionRightMenu = new RightMenu();
        optionRightMenu.clickMoreMenu();
        optionRightMenu.clickCloseBoard()
        optionRightMenu.clickCloseConfirmBoard();
        optionRightMenu.clickdeleteBoard();
        optionRightMenu.clickCloseConfirmBoard();
        browser.pause(4000);


    });
});

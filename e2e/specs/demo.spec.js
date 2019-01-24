const {credentials} = require('../../environment');

const Login = require('../pages/login.po');


describe('Login to trello', () => {
    it('Login', () => {
        let header = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        let formModalBoard = header.clickAddButton();

        let board = {
            'Title': '000New Board'

        };
        formModalBoard.fillForm(board);
        formModalBoard.clickSaveButton();
        browser.pause(9000);
    });
});

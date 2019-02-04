const {credentials} = require('../../environment');
const Login = require('../pages/login.po');
const FormList = require('../pages/formList.po');


describe('Create List', () => {
    beforeEach(() => {

        let header = Login.loginAs(credentials.standardUser.username, credentials.standardUser.password);
        let formModalBoard = header.clickAddButton();

        let board = {
            'Title': '000New Board'
        };
        formModalBoard.fillForm(board);
        formModalBoard.clickSaveButton();
        browser.pause(3000);
    });

    it('Create', () => {


        let formList = new FormList ();

        let listData = {
            'Title': 'NewList'
        };
        formList.filListForm(listData);
        browser.pause(4000);
        formList.clickSaveButton();
        browser.pause(4000);

    });

});

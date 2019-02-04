const {credentials} = require('../../environment');
const Login = require('../pages/login.po');
const FormList = require('../pages/formList.po');
const FormEditList = require('../pages/formEditList.po');


describe('Edit List', () => {
    beforeEach(() => {

        let header = Login.loginAs(credentials.standardUser.username, credentials.standardUser.password);
        let formModalBoard = header.clickAddButton();

        let board = {
            'Title': '000New Board'
        };

        formModalBoard.fillForm(board);
        formModalBoard.clickSaveButton();
        browser.pause(3000);
        /// create List//
        let formList = new FormList ();

        let listData = {
            'Title': 'NewList'
        };
        formList.filListForm(listData);
        browser.pause(4000);
        formList.clickSaveButton();
        browser.pause(4000);

    });

    it('Edit', () => {

        let formEditList = new FormEditList();

        let listData = {
            'NewTitle': 'EditedList'
        };

        formEditList.clickEditLink();
        formEditList.fillEditListForm(listData);
        browser.pause(4000);

        formEditList.clickAddNewCard();
        browser.pause(4000);
    });

});
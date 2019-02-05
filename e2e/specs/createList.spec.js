const {credentials} = require('../../environment');
const Login = require('../pages/login.po');
const FormList = require('../pages/formList.po');
const ListView = require('../pages/listView.po');
const expect = require('chai').expect;

describe('List Feature', () => {
    beforeEach(() => {

        let header = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        let formModalBoard = header.clickAddButton();

        let board = {
            'Title': 'New Board to Test List'
        };
        formModalBoard.fillForm(board);
        formModalBoard.clickSaveButton();
    });

    it('Create', () => {

        let formList = new FormList();

        let listData = {
            'Title': 'New List To Test'
        };
        formList.fillListForm(listData);
        browser.pause(4000);
        formList.clickSaveButton();
        browser.pause(4000);

        let listView = new ListView();
        expect(listView.getNameText()).to.equal(listData.Title);

    });

});

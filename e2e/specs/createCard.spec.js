const {credentials} = require('../../environment');
const Login = require('../pages/login.po');
const FormList = require('../pages/formList.po');
const util = require('../pages/objectCreator');
const FormCard = require('../pages/formCard.po');
const EditCard = require('../pages/formEditCard.po');
const expect = require('chai').expect;

describe('Create Card', () => {
   let header;
    beforeEach(() => {

        header = Login.loginAs(credentials.standardUser.username, credentials.standardUser.password);
        //let formModalBoard = header.clickAddButton();

        let board = {
            'Title': '000New Board'
        };
        util.createBoard(board);
        let formList = new FormList();

        let listData = {
            'Title': 'NewList'
        };
        formList.fillListForm(listData);
        browser.pause(4000);
        formList.clickSaveButton();
        browser.pause(4000);
    });

    it('Create', () => {

        let formCard = new FormCard();

        formCard.clickNewLink();

        let listData = {
            'Title': 'NewCard'
        };
        formCard.fillCardForm(listData);
        browser.pause(4000);
        formCard.clickSaveButton();
        browser.pause(4000);

        //////assert /////////
        let editCard = new EditCard();
        expect(editCard.getNameText()).to.equal(listData.Title);

    });

});

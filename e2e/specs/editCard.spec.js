const {credentials} = require('../../environment');
const Login = require('../pages/login.po');
const FormList = require('../pages/formList.po');
const util = require('../pages/objectCreator');
const FormCard = require('../pages/formCard.po');
const FormEditCard = require('../pages/formEditCard.po');

describe('Edit Card', () => {
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

    it('Edit', () => {

        let formCard = new FormCard();

        formCard.clickNewLink();

        let listData = {
            'Title': 'NewCard'
        };
        formCard.fillCardForm(listData);
        browser.pause(4000);
        formCard.clickSaveButton();
        browser.pause(4000);
        /////////////////////
        let formEditCard = new FormEditCard();
        formEditCard.clickNameField();
        browser.pause(4000);
        formEditCard.clickDialogNameField();
        let editData = {
            'Title': 'EditedCard'
        };
        formEditCard.fillEditCardForm(editData);
        formEditCard.clickCloseButton();
        browser.pause(4000);
    });

});

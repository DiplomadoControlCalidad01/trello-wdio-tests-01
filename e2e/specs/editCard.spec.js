const {credentials} = require('../../environment');
const Login = require('../pages/login.po');
const FormList = require('../pages/formList.po');
const util = require('../pages/objectCreator');
const FormCard = require('../pages/formCard.po');
const FormEditCard = require('../pages/formEditCard.po');
const expect = require('chai').expect;

describe('Card Feature', () => {

    let header;
    beforeEach(() => {

        header = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);

        let board = {
            'Title': 'New Board To Test'
        };
        util.createBoard(board);
        let formList = new FormList();

        let listData = {
            'Title': 'New List to Test'
        };
        formList.filListForm(listData);
        formList.clickSaveButton();
    });

    it('Edit Card', () => {

        let formCard = new FormCard();
        formCard.clickNewLink();

        let listData = {
            'Title': 'New List to Test'
        };
        formCard.fillCardForm(listData);
        formCard.clickSaveButton();
        let formEditCard = new FormEditCard();
        formEditCard.clickNameField();
        formEditCard.clickDialogNameField();
        let editData = {
            'Title': 'Edit  Card Test'
        };
        formEditCard.fillEditCardForm(editData);
        formEditCard.clickCloseButton();
        browser.pause(4000);

        expect(formEditCard.getNameText()).to.equal(editData.Title);

    });

});

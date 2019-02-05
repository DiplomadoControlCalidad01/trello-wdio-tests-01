const {credentials} = require('../../environment');
const Login = require('../pages/login.po');
const FormList = require('../pages/formList.po');
const util = require('../pages/objectCreator');
const FormCard = require('../pages/formCard.po');
const EditCard = require('../pages/formEditCard.po');
const expect = require('chai').expect;

describe('Card Feature', () => {
    let header;
    beforeEach(() => {

        header = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);

        let board = {
            'Title': 'New Board to Test Card'
        };
        util.createBoard(board);
        let formList = new FormList();

        let listData = {
            'Title': 'New Test List'
        };
        formList.filListForm(listData);
        formList.clickSaveButton();
    });

    it('Create Card', () => {

        let formCard = new FormCard();

        formCard.clickNewLink();

        let listData = {
            'Title': 'New Test Card'
        };
        formCard.fillCardForm(listData);
        formCard.clickSaveButton();
        browser.pause(4000);

        let editCard = new EditCard();
        expect(editCard.getNameText()).to.equal(listData.Title);

    });

});

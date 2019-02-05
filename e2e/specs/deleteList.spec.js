const {credentials} = require('../../environment');
const Login = require('../pages/login.po');
const FormList = require('../pages/formList.po');
const PMenu  = require('../pages/pointsMenu.po');
const util = require('../pages/objectCreator');

describe('Delete List', () => {
    let header;

    beforeEach(() => {

        header = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);

        let board = {
            'Title': '000New Board'
        };
        util.createBoard(board);

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

    it('DeleteList', () => {

        let pointMenu = new PMenu ();
        pointMenu.clickPointsLink();
        browser.pause(4000);
        pointMenu.clickArchiveList();
        browser.pause(4000);

    });

});

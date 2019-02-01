const {credentials} = require('../../environment');
const util = require('../pages/objectCreator');
const RightMenu = require('../pages/optionsRightMenu.po');
const Login = require('../pages/login.po');

describe('Delete Board', () => {

    let header;
    beforeEach(() => {
        header = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
    });

    it('Delete', () => {

        let board = {
            'Title': '000 NEW BOARD FOR AUTOMARESD TEST'
        };


        util.createBoard(board);

        let optionRightMenu = new RightMenu();
        optionRightMenu.clickMoreMenu();
        optionRightMenu.clickCloseBoard()
        optionRightMenu.clickCloseConfirmBoard();
        optionRightMenu.clickdeleteBoard();
        optionRightMenu.clickCloseConfirmBoard();


    });
});

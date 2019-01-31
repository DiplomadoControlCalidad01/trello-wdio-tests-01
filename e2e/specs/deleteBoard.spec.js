const {credentials} = require('../../environment');
const Util = require('../pages/util.po');
const RightMenu = require('../pages/optionsRightMenu.po');


describe('Delete Board', () => {
    it('Delete', () => {

        let board = {
            'Title': '000 NEW BOARD FOR AUTOMARESD TEST'
        };

        let util = new Util();
        util.createBoard(board);

        let optionRightMenu = new RightMenu();
        optionRightMenu.clickMoreMenu();
        optionRightMenu.clickCloseBoard()
        optionRightMenu.clickCloseConfirmBoard();
        optionRightMenu.clickdeleteBoard();
        optionRightMenu.clickCloseConfirmBoard();


    });
});

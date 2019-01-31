const {credentials} = require('../../environment');
const Util = require('../pages/util.po');
const EditFormBoard = require('../pages/formEditBoard.po');


describe('Edit Board', () => {
    it('Edit', () => {
        let board = {
            'Title': '000 NEW BOARD FOR AUTOMARESD TEST'
        };

        let util = new Util();
        util.createBoard(board);

        let formEditBoard = new EditFormBoard();
        formEditBoard.clickNameBoard();

        let editBoard = {
            'NewTitle': 'EDIT NAME BOARD TEST AUTOMATED'
        };
        formEditBoard.fillEditForm(editBoard);
        formEditBoard.clickSaveButton();


    });
});

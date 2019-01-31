const {credentials} = require('../../environment');
const Login = require('../pages/login.po');
const Util = require('../pages/util.po');


describe('Create Board', () => {
    it('From Add Button', () => {
        let board = {
            'Title': '000 NEW BOARD FOR AUTOMARESD TEST'
        };

        let util = new Util();
        util.createBoard(board);

    });

    it('From left Menu', () => {

    });

    it('From Add Boards', () => {

    });
});

const {credentials} = require('../../environment');
const Login = require('../pages/login.po');
const util = require('../pages/objectCreator');


describe('Feature Board', () => {
    let header;
    beforeEach(() => {
        header = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
    });

    it('#BVT Create Board', () => {
        let board = {
            'Title': '000 NEW BOARD - AUTOMATED TEST'
        };


        util.createBoard(board);

    });

    it('From left Menu', () => {

    });

    it('From Add Boards', () => {

    });
});

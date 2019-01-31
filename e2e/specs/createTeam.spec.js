const {credentials} = require('../../environment');
const Login = require('../pages/login.po');
const Util = require('../pages/util.po');



describe('Create Team', () => {
    it('From Add Button', () => {
        let team = {
            'Name': 'NAME TEAM',
            'Description': 'DESCRIPTION'
        };
        let util = new Util();
        util.createTeam(team);


    });

    it('From left Button', () => {


    });


});

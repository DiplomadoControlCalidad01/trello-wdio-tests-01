const {credentials} = require('../../environment');
const Login = require('../pages/login.po');
const Util = require('../pages/util.po');



describe('Login to trello', () => {
    it('Login', () => {
        let team = {
            'Name': 'NAME TEAM',
            'Description': 'DESCRIPTION'
        };
        let util = new Util();
        util.createTeam(team);


    });
});

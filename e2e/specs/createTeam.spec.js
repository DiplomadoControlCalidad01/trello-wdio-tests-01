const {credentials} = require('../../environment');
const Login = require('../pages/login.po');
const util = require('../pages/objectCreator');


describe('Create Team', () => {
    let header;
    beforeEach(() => {
        header = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
    });

    it('From Add Button', () => {
        let team = {
            'Name': 'NAME TEAM',
            'Description': 'DESCRIPTION'
        };
        util.createTeam(team);


    });

    it('From left Button', () => {


    });


});

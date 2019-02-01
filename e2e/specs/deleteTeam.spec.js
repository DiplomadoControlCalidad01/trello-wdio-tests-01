const {credentials} = require('../../environment');
const FormTeamMain = require('../pages/formTeam.po');
const util = require('../pages/objectCreator');
const Login = require('../pages/login.po');


describe('Login to trello', () => {

    let header;
    beforeEach(() => {
        header = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
    });

    it('Login', () => {
        let team = {
            'Name': 'NAME TEAM',
            'Description': 'DESCRIPTION'
        };
               util.createTeam(team);

        let formTeam = new FormTeamMain();
        formTeam.clickSettingsTab();
        formTeam.clickDeleteTeam();
        formTeam.clickConfirmDeleteTeam();

    });
});

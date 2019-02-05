const {credentials} = require('../../environment');
const util = require('../pages/objectCreator');
const FormTeamMain = require('../pages/formTeam.po');

const Login = require('../pages/login.po');

describe('Team Feature', () => {

    let header;
    beforeEach(() => {
        header = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
    });

    it('Edit Team', () => {
        let team = {
            'Name': 'NAME TEAM',
            'Description': 'DESCRIPTION'
        };

        util.createTeam(team);

        let formTeam = new FormTeamMain();

        let formEditTeam = formTeam.clickEditTeamButton();

        let editTeam = {
            'Name': 'NAME EDIT TEAM',
            'ShortName': 'SHORT NAME TEAM',
            'Website': 'WWW.TEAMEDIT.COM',
            'Description': 'DESCRIPTION EDIT Team'
        };

        formEditTeam.fillEditTeamForm(editTeam);
        formEditTeam.clickSaveButton();
    });

    it('Delete Team', () => {
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

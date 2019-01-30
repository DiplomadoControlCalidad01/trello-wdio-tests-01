const {credentials} = require('../../environment');
const Login = require('../pages/login.po');
// const FormTeamMain = require('../pages/formTeam.po');


describe('Login to trello', () => {
    it('Login', () => {
        let header = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        let formModalTeam = header.clickAddTeamButton();

        let team = {
            'Name': 'NAME TEAM',
            'Description': 'DESCRIPTION'
        };
        formModalTeam.fillForm(team);


        let formNewTeam =  formModalTeam.clickCreateButton();
        let formEditTeam = formNewTeam.clickEditTeamButton();

        let editTeam = {
            'Name': 'NAME EDIT TEAM',
            'ShortName': 'SHORT NAME TEAM',
            'Website': 'WWW.TEAMEDIT.COM',
            'Description': 'DESCRIPTION EDIT Team'
        };

        formEditTeam.fillEditTeamForm(editTeam);
        browser.pause(3000);
        formEditTeam.clickSaveButton();
        browser.pause(3000);


    });
});

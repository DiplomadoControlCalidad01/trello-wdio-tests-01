const {credentials} = require('../../environment');
const Util = require('../pages/util.po');
const FormTeamMain = require ('../pages/formTeam.po');;


describe('Edit Team', () => {
    it('Edit', () => {
        let team = {
            'Name': 'NAME TEAM',
            'Description': 'DESCRIPTION'
        };
        let util = new Util();
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
});

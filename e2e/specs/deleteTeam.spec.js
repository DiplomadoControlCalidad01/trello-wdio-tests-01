const {credentials} = require('../../environment');
const FormTeamMain = require('../pages/formTeam.po');
const Util = require('../pages/util.po');



describe('Login to trello', () => {
    it('Login', () => {
        let team = {
            'Name': 'NAME TEAM',
            'Description': 'DESCRIPTION'
        };
        let util = new Util();
        util.createTeam(team);

        let formTeam = new FormTeamMain();
        formTeam.clickSettingsTab();
        formTeam.clickDeleteTeam();
        formTeam.clickConfirmDeleteTeam();

    });
});

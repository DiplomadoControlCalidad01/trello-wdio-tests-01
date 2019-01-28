const {credentials} = require('../../environment');
const Login = require('../pages/login.po');
const EditFormBoard = require('../pages/formEditBoard.po');
const RightMenu = require('../pages/optionsRightMenu.po');


describe('Login to trello', () => {
    it('Login', () => {
        let header = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        let formModalTeam = header.clickAddButton();

        let team = {
            'Title': '00000 New Team'
        };
        formModalTeam.fillForm(team);



    });
});

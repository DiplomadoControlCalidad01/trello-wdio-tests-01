const {credentials} = require('../../environment');
const Login = require('../pages/login.po');
const util = require('../pages/objectCreator');
const formModalTeam = require('../pages/formModalTeam.po');


describe('Team Feature', () => {
    let header;
    beforeEach(() => {
        header = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
    });

    it('#BVT Create Team from Add Button', () => {
        let team = {
            'Name': 'NAME TEAM',
            'Description': 'DESCRIPTION'
        };
        util.createTeam(team);


    });

    it('#BVT Create Team from Home Menu', () => {

        let formModalTeam = header.clickAddTeamButtonHome();
        let team = {
            'Name': 'NAME TEAM',
            'Description': 'DESCRIPTION'
        };
        formModalTeam.fillForm(team);
        formModalTeam.clickCreateButton();

    });


});

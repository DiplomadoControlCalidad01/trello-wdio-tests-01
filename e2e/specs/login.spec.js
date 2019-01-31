const expect = require('chai').expect;
const {credentials} = require('../../environment');
const Login = require('../pages/login.po');

describe('Login to trello', () => {
    it('Login', () => {
        Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        browser.pause(3000);
        expect(browser.getTitle()).to.equal('Boards | Trello');

    });
});

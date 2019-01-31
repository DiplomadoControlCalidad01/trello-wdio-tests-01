const commonActions = require('../core/CommonActions');
const EditFormTeam = require('../pages/formEditTeam.po');

class FormTeamMain {

    constructor() {
        this.nameTeamLabel = 'formModalTeam.po.js';
        this.descriptionTeamLabel = 'p';
        this.editTeamButton = 'a.button-link.tabbed-pane-header-details-edit.js-edit-profile';
        this.boardTab = 'a.tabbed-pane-nav-item-button.js-org-profile.active';
        this.membersTab = 'a.tabbed-pane-nav-item-button.js-org-members';
        this.settingsTab = 'a.tabbed-pane-nav-item-button.js-org-account';
        this.deleteTeam = 'div#content div.window-module.u-gutter > a > span';
        this.confirmDelete = 'input.js-confirm.full.negate';

    }


    clickEditTeamButton() {
        commonActions.click(this.editTeamButton);
        return new EditFormTeam();
    }

    clickSettingsTab() {
        commonActions.click(this.settingsTab);

    }
  clickDeleteTeam() {
        commonActions.click(this.deleteTeam);

    }
    clickConfirmDeleteTeam() {
        commonActions.click(this.confirmDelete);

    }


}


module.exports = FormTeamMain;

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

    }


    clickEditTeamButton() {
        commonActions.click(this.editTeamButton);
        return new EditFormTeam();
    }


}


module.exports = FormTeamMain;

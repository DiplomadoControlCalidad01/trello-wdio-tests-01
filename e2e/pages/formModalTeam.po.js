const commonActions = require('../core/CommonActions');
const FormTeamMain = require('./pages/formTeam.po');



class FormTeam {

    constructor() {
        this.nameField = 'input#org-display-name.js-autofocus.js-display-name';
        this.descriptionField = 'textarea#org-desc';
        this.createTeamButton = 'input.primary.wide.js-save';

    }


    clickCreateButton() {
        commonActions.click(this.createTeamButton);
        return new FormTeamMain();
    }

    fillForm(teamJson) {
        let teamSteps = {
            'Name': () => commonActions.setValue(this.nameField, teamJson.Name),
            'Description': () => commonActions.setValue(this.descriptionField, teamJson.Description)
        };

        Object.keys(teamJson).forEach(key => {
            teamSteps[key].call();
        });
    }

}

module.exports = FormTeam;

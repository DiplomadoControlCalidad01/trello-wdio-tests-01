const commonActions = require('../core/CommonActions');

class EditFormTeam {

    constructor() {
        this.nameTeamField = 'input[name="displayName"]';
        this.shortNameField = 'input[name="name"]';
        this.websiteField = 'input[name="website"]';
        this.descriptionField = 'div#content textarea';
        this.saveButton = 'input.primary.wide.js-submit-profile';
    }


    clickSaveButton() {

        commonActions.click(this.saveButton);
    }

    fillEditTeamForm(editTeamJson) {
        let editTeamSteps = {
            'Name': () => commonActions.setValue(this.nameTeamField, editTeamJson.Name),
            'ShortName': () => commonActions.setValue(this.shortNameField, editTeamJson.ShortName),
            'Website': () => commonActions.setValue(this.websiteField, editTeamJson.Website),
            'Description': () => commonActions.setValue(this.descriptionField, editTeamJson.Description)

        };

        Object.keys(editTeamJson).forEach(key => {
            editTeamSteps[key].call();
        });
    }

}

module.exports = EditFormTeam;

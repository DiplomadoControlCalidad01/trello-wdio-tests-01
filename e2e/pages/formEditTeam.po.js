const commonActions = require('../core/CommonActions');

class EditFormTeam {

    constructor() {
        this.nameTeamField = 'input[name="displayName"]';
        this.shortNameField = 'input[name="name"]';
        this.websiteField = 'input[name="website"]';
        this.descriptionField = 'div#content.textarea';
        this.saveButton = 'div#content.textarea';

    }


    clickSaveButton() {

        commonActions.click(this.saveButton);
    }

    fillEditTeamForm(editTeamJson) {
        let editTeamSteps = {
            'Name': () => commonActions.setValue(this.nameTeamField, editTeamJson.NewTitle),
            'ShortName': () => commonActions.setValue(this.shortNameField, editTeamJson.NewTitle),
            'Website': () => commonActions.setValue(this.websiteField, editTeamJson.NewTitle),
            'Description': () => commonActions.setValue(this.descriptionField, editTeamJson.NewTitle)


        };

        Object.keys(editTeamJson).forEach(key => {
            editTeamSteps[key].call();
        });
    }

}

module.exports = EditFormTeam;

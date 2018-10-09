module.exports = class Survey {

    constructor(input) {
        this.registeredToVote = input.registeredToVote || null;
        this.absenteeBallor = input.absenteeBallor || null;
        this.voteInState = input.voteInState || null;
        this.pollingLocation = input.pollingLocation || null;
        this.specialAccomodations = input.specialAccomodations || null;
        this.transportation = input.transportation || null;
        this.leaveWork = input.leaveWork || null;
        this.receivedBallot = input.receivedBallot || null;
        this.knowDeadline = input.knowDeadline || null;
        this.howToDropOffBallot = input.howToDropOffBallot || null;
        this.votingReason = input.votingReason || '';
        this.knowBallot = input.knowBallot || null;
        this.invitePeople = input.invitePeople || null;
        this.feeling = input.feeling || null;
        this.contact = input.contact || null;
        if (this.votingReason === '') {
            this.votingReason = 'empty';
        }
        if (this.invitePeople.length === 0) {
            this.invitePeople.push('empty');
        }
    }

    static _inputIsValid(input) {
        Survey._isParameterValid(['yes', 'no', 'dunno', null], input.registeredToVote);
        Survey._isParameterValid(['yes', 'nope', null], input.absenteeBallor);
        Survey._isParameterValid(['colorado', 'oregon', 'washington', 'nope', null], input.voteInState);
        Survey._isParameterValid(['yes', 'no', 'dunno', null], input.pollingLocation);
        Survey._isParameterValid(['yeah', 'nah', null], input.specialAccomodations);
        Survey._isParameterValid(['drive', 'walk', 'uber/lyft', 'ask a friend', 'bike', null], input.transportation);
        Survey._isParameterValid(['yes', 'no', 'maybe', null], input.leaveWork);
        Survey._isParameterValid(['yep!', 'not yet', null], input.receivedBallot);
        Survey._isParameterValid(['yep!', 'naw', null], input.knowDeadline);
        Survey._isParameterValid(['gonna mail it', 'gonna drop it of at a ballot box', null], input.howToDropOffBallot);
        Survey._isParameterValid(['yes', 'no', null], input.knowBallot);
        Survey._isParameterValid(['Excited', 'Happy', 'Sad', 'Meh', 'Angry', 'Concerned', 'Nervous', 'Shocked'], input.feeling);
        if (!Survey._invitePeopleListIsValid(input)) {
            throw new Error("The invite people list is not valid");
        }

        if (input.contact === null) {
            throw new Error("contact cannot be null");
        }

       /* if (!Survey._flowIsValid(input)) {
            throw new Error("The flow is not valid");
        }*/
    }

    static _isParameterValid(list, parameter) {
        if (!list.includes(parameter)) {
            throw new Error(parameter + " is not valid!");
        }
    }

    /*static _flowIsValid(input) {
        let nonValueList = [];
        let withValueList = [input.registeredToVote, input.absenteeBallor, input.votingReason, input.knowBallot, input.invitePeople, input.feeling, input.contact];
        if (input.absenteeBallor === 'nope') {
            withValueList.push(input.voteInState);
            if (input.voteInState === 'nope') {
                withValueList.push(input.pollingLocation, input.specialAccomodations, input.transportation, input.leaveWork);
                nonValueList.push(input.receivedBallot, input.knowDeadline, input.howToDropOffBallot);
            } else {
                nonValueList.push(input.pollingLocation, input.specialAccomodations, input.transportation, input.leaveWork);
                withValueList.push(input.receivedBallot, input.knowDeadline, input.howToDropOffBallot);
            }
        } else {
            nonValueList.push(input.voteInState, input.pollingLocation, input.specialAccomodations, input.transportation, input.leaveWork, input.receivedBallot, input.knowDeadline, input.howToDropOffBallot);
        }
        return nonValueList.filter((item) => item === null).length === nonValueList.length && withValueList.filter((item) => item !== null).length === withValueList.length;
    }*/

    static _invitePeopleListIsValid(input) {
        if (input.invitePeople === null) {
            return true;
        } else {
            if (Array.isArray(input.invitePeople)) {
                let validOptions = ['Mom(s)', 'Dad(s)', 'Sibling(s)', 'Coworker(s)', 'Friend(s)', 'empty'];
                return input.invitePeople.filter((item) => validOptions.includes(item)).length === input.invitePeople.length;
            } else {
                return false;
            }
        }
    }

    static getInstance(item) {
        item = new Survey(item);
        Survey._inputIsValid(item);
        return item;
    }
};
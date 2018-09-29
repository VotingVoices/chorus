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
        this.email = input.email || null;
        this.phoneNumber = input.phoneNumber || null;
    }

    static _inputIsValid(input) {
        let parametersAreValid = ['yes', 'no', 'dunno', null].includes(input.registeredToVote)
            && ['yes', 'nope', null].includes(input.absenteeBallor)
            && ['colorado', 'oregon', 'washington', 'nope', null].includes(input.voteInState)
            && ['yes', 'no', 'dunno', null].includes(input.pollingLocation)
            && ['yeah', 'nah', null].includes(input.specialAccomodations)
            && ['drive', 'walk', 'uber/lyft', 'ask a friend', 'bike', null].includes(input.transportation)
            && ['yes', 'no', 'maybe', null].includes(input.leaveWork)
            && ['yep!', 'not yet', null].includes(input.receivedBallot)
            && ['yep!', 'naw', null].includes(input.knowDeadline)
            && ['gonna mail it', 'gonna drop it of at a ballot box', null].includes(input.howToDropOffBallot)
            && ['yes', 'no', null].includes(input.knowBallot)
            && Survey._invitePeopleListIsValid(input)
            && ['Excited', 'Happy', 'Sad', 'Meh', 'Angry', 'Concerned', 'Nervous', 'Shocked'].includes(input.feeling)
            && input.email !== null;

        if (parametersAreValid) {
            return Survey._flowIsValid(input);
        } else {
            return false;
        }
    }

    static _flowIsValid(input) {
        let nonValueList = [];
        let withValueList = [input.registeredToVote, input.absenteeBallor, input.votingReason, input.knowBallot, input.invitePeople, input.feeling, input.email];
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
    }

    static _invitePeopleListIsValid(input) {
        if (input.invitePeople === null) {
            return true;
        } else {
            if (Array.isArray(input.invitePeople)) {
                let validOptions = ['Mom(s)', 'Dad(s)', 'Sibling(s)', 'Coworker(s)', 'Friend(s)'];
                return input.invitePeople.filter((item) => validOptions.includes(item)).length === input.invitePeople.length;
            } else {
                return false;
            }
        }
    }

    static getInstance(item) {
        item = new Survey(item);
        if (!Survey._inputIsValid(item)) {
            throw new Error('Invalid parameters ' + JSON.stringify(item));
        }
        return item;
    }
};
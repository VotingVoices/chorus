import { QuestionId, AnswerId } from './store';

export function getQuestionFullLabel(id: QuestionId): string {
    switch (id) {
        case QuestionId.AreYouRegistered:
            return 'First things first. Are you registered to vote?';

        case QuestionId.VoteByMailState:
            return 'Are you planning to vote in any of these states?';

        case QuestionId.PollingLocation:
            return 'Do you know where your polling location is?';

        case QuestionId.SpecialAccommodations:
            return 'Will you need special accommodations to reach the polling location?';

        case QuestionId.TransportationMethod:
            return 'How will you get to your polling location?';

        case QuestionId.AbsenteeBallot:
            return 'Would you like to vote by absentee ballot?';

        case QuestionId.ReceivedBallot:
            return 'Have you received your ballot?';

        case QuestionId.Deadline:
            return 'Do you know when the deadline is?';

        case QuestionId.ReturnMethod:
            return 'How will you return your ballot?';

        case QuestionId.MissWork:
            return 'Will you have to miss/leave work to vote?';

        case QuestionId.FamiliarWithBallot:
            return 'Do you know who/what you\'ll be voting for?';

        case QuestionId.PeopleToInvite:
            return 'Spread the word! Are there people in your life you\'d like to vote with?';

        case QuestionId.ReasonToVote:
            return 'Why will you be voting?';

        case QuestionId.Emotion:
            return 'How are you feeling about these midterm elections?';
    }

    throw new Error('Unrecognized QuestionId');
}

export function getAnswerLabel(answer: AnswerId): string {
    switch(answer) {
        case AnswerId.Yes:
            return 'Yes';

        case AnswerId.No:
            return 'No';

        case AnswerId.EmphaticYes:
            return 'Yes!';

        case AnswerId.DontKnow:
            return 'Not sure';

        case AnswerId.Washington:
            return 'WA';

        case AnswerId.Oregon:
            return 'OR';

        case AnswerId.Colorado:
            return 'CO';

        case AnswerId.OtherState:
            return 'I\'m voting in a different state';

        case AnswerId.WalkOrBike:
            return 'Walk/bike';

        case AnswerId.DriveMyself:
            return 'Drive myself/carpool';

        case AnswerId.RideShare:
            return 'Car for hire';

        case AnswerId.Transit:
            return 'Mass transit';

        case AnswerId.Mail:
            return 'Mail';

        case AnswerId.BallotBox:
            return 'Ballot box';

        case AnswerId.Friends:
            return 'Friend(s)';

        case AnswerId.FamilyMembers:
            return 'Family member(s)';

        case AnswerId.Coworkers:
            return 'Co-worker(s)';
        
        case AnswerId.Alone:
            return 'I\'m going it alone this time';

        case AnswerId.Kids:
            return 'My kids/family';

        case AnswerId.Privilege:
            return 'It\'s a privilege';

        case AnswerId.Change:
            return 'To drive change';

        case AnswerId.Habit:
            return 'I\'ve always voted';

        case AnswerId.Other:
            return 'Other';

        case AnswerId.Excited:
            return 'Excited';

        case AnswerId.Concerned:
            return 'Concerned';

        case AnswerId.Shocked:
            return 'Shocked';

        case AnswerId.Angry:
            return 'Angry';

        case AnswerId.Meh:
            return 'Meh';
    }

    throw new Error(`Unrecognized AnswerId: ${answer}`);
}
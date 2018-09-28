import { QuestionId, AnswerId, PlanStepId, IFollowUpStepInfo } from './store';

export function getQuestionFullLabel(id: QuestionId): string {
    switch (id) {
        case QuestionId.AreYouRegistered:
            return 'First things first. Are you registered to vote?';

        case QuestionId.AbsenteeBallot:
            return 'Would you like to vote by absentee ballot?';

        case QuestionId.VoteByMailState:
            return 'Are you planning to vote in any of these states?';

        case QuestionId.PollingLocation:
            return 'Do you know where your polling location is?';

        case QuestionId.SpecialAccommodations:
            return 'Will you need special accommodations to reach the polling location?';

        case QuestionId.TransportationMethod:
            return 'How will you get to your polling location?';

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
            return 'Walk / bike';

        case AnswerId.DriveMyself:
            return 'Drive myself / carpool';

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
            return 'My kids / family';

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

export function getFollowUpStepInfo(step: PlanStepId): IFollowUpStepInfo {
    switch(step)
    {
        case PlanStepId.ConfirmRegistration:
            return { 
                header: 'Is your registration A-OK?', 
                description: 'Great--you\'re registered! Now take a quick look to make sure everything is up-to-date',
                linkLabel: 'Double-check your registration',
                linkUrl: 'https://www.rockthevote.org/voting-information/am-i-registered-to-vote/'
            };
        case PlanStepId.GetRegistered:
            return {
                header: 'Let\'s do this: get registered!',
                description: 'Not registered yet? No problem--take a minute to submit your registration and make sure you\'re vote ready.',
                linkLabel: 'Register now',
                linkUrl: 'https://register.rockthevote.com/registrants/new?partner=1&source=rtv.com'
            };
        case PlanStepId.CheckRegistration:
            return {
                header: 'Check your registration',
                description: 'Not sure whether you\'re registered? Take a minute to double-check and make sure you\'re vote ready.',
                linkLabel: 'Double-check your registration',
                linkUrl: 'https://www.rockthevote.org/voting-information/am-i-registered-to-vote/'
            };
        case PlanStepId.RequestAbsenteeBallot:
            return {
                header: 'Request your absentee ballot',
                description: 'A convenient way to go! Just remember to check on postage and your mailing deadline.',
                linkLabel: 'Make the request',
                linkUrl: 'https://www.vote.org/absentee-ballot/'
            };
        /* VOTE-IN-PERSON PATH */
        case PlanStepId.ConfirmPollingLocation:
            return {
                header: 'Your polling location: has it moved?',
                description: 'Things change--make sure you\'re aware of your area\'s best polling location and hours.',

            };
        /* VOTE-BY-MAIL PATH */
        case PlanStepId.VoteOnBallot:
            return {
                header: 'Have ballot, will vote!',
                description: 'You\'ve got it, now submit it. (Don\'t forget to check the postage requirements if you\'re using USPS.)',   
            };

    }
    return { header: 'UNKNOWN QNA', description: '', };
}
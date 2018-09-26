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
            return 'How are you gonna get to your polling location?';

        case QuestionId.AbsenteeBallot:
            return 'Do you need to send an absentee ballot?';

        case QuestionId.MissWork:
            return 'Will you have to miss or leave work to vote?';

        case QuestionId.FamiliarWithBallot:
            return 'Are you familiar with the issues and candidates on your ballot?';

        case QuestionId.PeopleToInvite:
            return 'Let\'s invite people to vote with you! Who would you like to join you in voting?';

        case QuestionId.Emotion:
            return 'How are you feeling about these midterm elections?';
    }

    throw new Error('Unrecognized QuestionId');
}

export function getAnswerLabel(answer: AnswerId): string {
    switch(answer) {
        case AnswerId.Yes:
            return 'Yep!';

        case AnswerId.No:
            return 'Nope';

        case AnswerId.EmphaticYes:
            return 'Heck yeah!';

        case AnswerId.UncertainNo:
            return 'Uhh... Nope';

        case AnswerId.DontKnow:
            return 'I dunno...';

        case AnswerId.Other:
            return 'Other';

        case AnswerId.Washington:
            return 'Washington';

        case AnswerId.Oregon:
            return 'Oregon';

        case AnswerId.Colorado:
            return 'Colorado';

        case AnswerId.OtherState:
            return 'Nope';

        case AnswerId.WalkOrBike:
            return 'Walk or bike';

        case AnswerId.DriveMyself:
            return 'Drive myself';

        case AnswerId.RideShare:
            return 'Lyft or Uber';

        case AnswerId.AskSomeoneForRide:
            return 'Ask someone for a ride';

        case AnswerId.FamilyMembers:
            return 'Family members';

        case AnswerId.Coworkers:
            return 'Coworkers';

        case AnswerId.Friends:
            return 'Friends';

        case AnswerId.SomeoneElse:
            return 'Someone else';
        
        case AnswerId.NoThanks:
            return 'No thanks';

        case AnswerId.Excited:
            return 'Excited';

        case AnswerId.Happy:
            return 'Happy';

        case AnswerId.Nervous:
            return 'Nervous';

        case AnswerId.Shocked:
            return 'Shocked';

        case AnswerId.Meh:
            return 'Meh';

        case AnswerId.Worried:
            return 'Worried';

        case AnswerId.Sad:
            return 'Sad';

        case AnswerId.Angry:
            return 'Angry';
    }

    throw new Error("Unrecognized AnswerId");
}
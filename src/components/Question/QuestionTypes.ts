import * as React from 'react';
import { QuestionId, AnswerId } from '../../store';

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

export interface IQuestionProps extends React.InputHTMLAttributes<HTMLElement | HTMLInputElement>
{
    /**
     * The question we're posing to the user
     */
    questionId: QuestionId;
    /**
     * The options the user has to choose from
     */
    answers: AnswerId[];
}
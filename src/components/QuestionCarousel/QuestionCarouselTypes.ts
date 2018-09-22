import { AnswerId } from '../Answer';
import { QuestionId } from '../Question';
import { RouteComponentProps } from 'react-router-dom';

/**
 * Helper interface for Carousel props.  Each IQuestion forms a node in a question graph
 */
export interface IQuestion {
    /**
     * The id of this question
     */
    id: QuestionId;
    /**
     * How far along is the question in the flow
     */
    dotNavStep: number;
    /**
     * Possible answers
     */
    answers: AnswerId[];
    /**
     * callback called to resolve next question id
     */
    nextQuestionId: (answer: AnswerId) => QuestionId;
}

export interface IQuestionCarouselProps extends RouteComponentProps<any>
{
    questions: IQuestion[];
}

/**
 * Hard coded constant for the question graph 
 */
export const QUESTIONS : IQuestion[] = [
    {
        id: QuestionId.AreYouRegistered,
        dotNavStep: 1,
        nextQuestionId: (answer) => QuestionId.VoteByMailState,
        answers: [
            AnswerId.EmphaticYes,
            AnswerId.UncertainNo,
            AnswerId.DontKnow,
        ],
    },
    {
        id: QuestionId.VoteByMailState,
        dotNavStep: 2,
        nextQuestionId: (key) => key === AnswerId.OtherState ? QuestionId.PollingLocation : QuestionId.END_OF_QUESTIONS,
        answers: [
            AnswerId.Colorado,
            AnswerId.Oregon,
            AnswerId.Washington,
            AnswerId.OtherState,
        ],
    },
    {
        id: QuestionId.PollingLocation,
        dotNavStep: 3,
        nextQuestionId: (key) => QuestionId.SpecialAccommodations,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
            AnswerId.DontKnow,
        ],
    },
    {
        id: QuestionId.SpecialAccommodations,
        dotNavStep: 4,
        nextQuestionId: (key) => QuestionId.TransportationMethod,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ],
    },
    {
        id: QuestionId.TransportationMethod,
        dotNavStep: 5,
        nextQuestionId: (key) => QuestionId.AbsenteeBallot,
        answers: [
            AnswerId.WalkOrBike,
            AnswerId.DriveMyself,
            AnswerId.RideShare,
            AnswerId.AskSomeoneForRide,
            AnswerId.Other,
        ],
    },
    {
        id: QuestionId.AbsenteeBallot,
        dotNavStep: 6,
        nextQuestionId: (key) => QuestionId.MissWork,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ],
    },
    {
        id: QuestionId.MissWork,
        dotNavStep: 7,
        nextQuestionId: (key) => QuestionId.FamiliarWithBallot,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ],
    },
    {
        id: QuestionId.FamiliarWithBallot,
        dotNavStep: 8,
        nextQuestionId: (key) => QuestionId.PeopleToInvite,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ],
    },
    {
        id: QuestionId.PeopleToInvite,
        dotNavStep: 9,
        nextQuestionId: (key) => QuestionId.Emotion,
        answers: [
            AnswerId.FamilyMembers,
            AnswerId.Coworkers,
            AnswerId.Friends,
            AnswerId.SomeoneElse,
            AnswerId.NoThanks,
        ],
    },
    {
        id: QuestionId.Emotion,
        dotNavStep: 10,
        nextQuestionId: (key) => QuestionId.END_OF_QUESTIONS,
        answers: [
            AnswerId.Excited,
            AnswerId.Happy,
            AnswerId.Nervous,
            AnswerId.Shocked,
            AnswerId.Meh,
            AnswerId.Worried,
            AnswerId.Angry,
        ],
    }];
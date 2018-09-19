import * as React from 'react';
import { IQuestionProps } from '../Question';

export enum QuestionId {
    AreYouRegistered = 'Reg',
    VoteByMailState = 'St',
    PollingLocation = 'PllLoc',
    SpecialAccommodations = 'Accm',
    TransportationMethod = 'Trns',
    AbsenteeBallot = 'Abs',
    MissWork = 'MssWrk',
    FamiliarWithBallot = 'Fmlr',
    PeopleToInvite = 'Inv',
    Emotion = 'Em',
    END_OF_QUESTIONS = 'END'
}

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
     * Props to forward to question component
     */
    questionProps: IQuestionProps;
    /**
     * callback called to resolve next question id
     */
    nextQuestionId: (answer: AnswerId) => QuestionId;
}

export interface IQuestionCarouselProps extends React.HTMLAttributes<HTMLElement>
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
        questionProps: {   
            label: 'First things first. Are you registered to vote?',
            answers: [
                {
                    key: '0',
                    label: 'Heck Yeah!'
                },
                {
                    key: '1',
                    label: 'Uhh.... Nope'
                },
                {
                    key: '2',
                    label: 'I Dunno...'
                }
            ],
        },
    },
    {
        id: QuestionId.VoteByMailState,
        dotNavStep: 2,
        nextQuestionId: (key) => key === '3' ? QuestionId.PollingLocation : QuestionId.END_OF_QUESTIONS,
        questionProps: {
            label: 'Are you planning to vote in any of these states?',
            answers: [
                {
                    key: '0',
                    label: 'Colorado'
                },
                {
                    key: '1',
                    label: 'Oregon'
                },
                {
                    key: '2',
                    label: 'Washington'
                },
                {
                    key: '3',
                    label: 'Nope'
                }
            ],
        },
    },
    {
        id: QuestionId.PollingLocation,
        dotNavStep: 3,
        nextQuestionId: (key) => QuestionId.SpecialAccommodations,
        questionProps: {
            label: 'Do you know where your polling location is?',
            answers: [
                {
                    key: '0',
                    label: 'Yep!'
                },
                {
                    key: '1',
                    label: 'Nope.'
                },
                {
                    key: '2',
                    label: 'I Dunno...'
                },
            ],
        },
    },
    {
        id: QuestionId.SpecialAccommodations,
        dotNavStep: 4,
        nextQuestionId: (key) => QuestionId.TransportationMethod,
        questionProps: {
            label: 'Will you need special accommodations to reach the polling location?',
            answers: [
                {
                    key: '0',
                    label: 'Yep!'
                },
                {
                    key: '1',
                    label: 'Nope.'
                },
            ],
        },
    },
    {
        id: QuestionId.TransportationMethod,
        dotNavStep: 5,
        nextQuestionId: (key) => QuestionId.AbsenteeBallot,
        questionProps: {
            label: 'How are you gonna get to your polling location?',
            answers: [
                {
                    key: '0',
                    label: 'Walk or bike'
                },
                {
                    key: '1',
                    label: 'Drive myself'
                },
                {
                    key: '2',
                    label: 'Lyft or Uber'
                },
                {
                    key: '3',
                    label: 'Ask someone for a ride'
                },
                {
                    key: '4',
                    label: 'Other'
                },
            ],
        },
    },
    {
        id: QuestionId.AbsenteeBallot,
        dotNavStep: 6,
        nextQuestionId: (key) => QuestionId.MissWork,
        questionProps: {
            label: 'Do you need to send an absentee ballot?',
            answers: [
                {
                    key: '0',
                    label: 'Yep!'
                },
                {
                    key: '1',
                    label: 'Nope.'
                },
            ],
        },
    },
    {
        id: QuestionId.MissWork,
        dotNavStep: 7,
        nextQuestionId: (key) => QuestionId.FamiliarWithBallot,
        questionProps: {
            label: 'Will you have to miss or leave work to vote?',
            answers: [
                {
                    key: '0',
                    label: 'Yep!'
                },
                {
                    key: '1',
                    label: 'Nope.'
                },
            ],
        },
    },
    {
        id: QuestionId.FamiliarWithBallot,
        dotNavStep: 8,
        nextQuestionId: (key) => QuestionId.PeopleToInvite,
        questionProps: {
            label: 'Are you familiar with the issues and candidates on your ballot?',
            answers: [
                {
                    key: '0',
                    label: 'Yep!'
                },
                {
                    key: '1',
                    label: 'Nope.'
                },
            ],
        },
    },
    {
        id: QuestionId.PeopleToInvite,
        dotNavStep: 9,
        nextQuestionId: (key) => QuestionId.Emotion,
        questionProps: {
            label: 'Let\'s invite people to vote with you! Who would you like to join you in voting?',
            answers: [
                {
                    key: '0',
                    label: 'Family members'
                },
                {
                    key: '1',
                    label: 'Coworkers'
                },
                {
                    key: '2',
                    label: 'Friends'
                },
                {
                    key: '3',
                    label: 'Someone else'
                },
                {
                    key: '4',
                    label: 'No thanks'
                },
            ],
        },
    },
    {
        id: QuestionId.Emotion,
        dotNavStep: 10,
        nextQuestionId: (key) => QuestionId.END_OF_QUESTIONS,
        questionProps: {
            label: 'How are you feeling about these midterm elections?',
            answers: [
                {
                    key: '0',
                    label: 'Excited'
                },
                {
                    key: '1',
                    label: 'Happy'
                },
                {
                    key: '2',
                    label: 'Nervous'
                },
                {
                    key: '3',
                    label: 'Shocked'
                },
                {
                    key: '4',
                    label: 'Meh'
                },
                {
                    key: '5',
                    label: 'Worried'
                },
                {
                    key: '6',
                    label: 'Sad'
                },
                {
                    key: '7',
                    label: 'Angry'
                },
            ],
        },
    }];

import * as React from 'react';
import { AnswerId } from '../Answer';
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
                AnswerId.EmphaticYes,
                AnswerId.UncertainNo,
                AnswerId.DontKnow,
            ],
        },
    },
    {
        id: QuestionId.VoteByMailState,
        dotNavStep: 2,
        nextQuestionId: (key) => key === AnswerId.OtherState ? QuestionId.PollingLocation : QuestionId.END_OF_QUESTIONS,
        questionProps: {
            label: 'Are you planning to vote in any of these states?',
            answers: [
                AnswerId.Colorado,
                AnswerId.Oregon,
                AnswerId.Washington,
                AnswerId.OtherState,
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
                AnswerId.Yes,
                AnswerId.No,
                AnswerId.DontKnow,
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
                AnswerId.Yes,
                AnswerId.No,
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
                AnswerId.WalkOrBike,
                AnswerId.DriveMyself,
                AnswerId.RideShare,
                AnswerId.AskSomeoneForRide,
                AnswerId.Other,
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
                AnswerId.Yes,
                AnswerId.No,
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
                AnswerId.Yes,
                AnswerId.No,
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
                AnswerId.Yes,
                AnswerId.No,
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
                AnswerId.FamilyMembers,
                AnswerId.Coworkers,
                AnswerId.Friends,
                AnswerId.SomeoneElse,
                AnswerId.NoThanks,
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
                AnswerId.Excited,
                AnswerId.Happy,
                AnswerId.Nervous,
                AnswerId.Shocked,
                AnswerId.Meh,
                AnswerId.Worried,
                AnswerId.Angry,
            ],
        },
    }];

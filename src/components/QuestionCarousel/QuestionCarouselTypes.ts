import * as React from 'react';
import { IQuestionProps } from '../Question';

/**
 * Helper interface for Carousel props.  Each IQuestion forms a node in a question graph
 */
export interface IQuestion {
    /**
     * The id of this question
     */
    id: number;
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
    nextQuestionId: (key: string) => number;
}

export interface IQuestionCarouselProps extends React.HTMLAttributes<HTMLElement>
{
    /**
     * Question Id to IQuestion map
     */
    questions: {[id: number] : IQuestion};
}

/**
 * Hard coded constant for the question graph 
 */
export const QUESTIONS : { [key: number] : IQuestion } = {
    0: {
        id: 0,
        dotNavStep: 1,
        nextQuestionId: (key) => 1,
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
        }
    },  
    1: {
        id: 1,
        dotNavStep: 2,
        nextQuestionId: (key) => key === '3' ? 2 : 0,
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
    2: {
        id: 2,
        dotNavStep: 3,
        nextQuestionId: (key) => 3,
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
    3: {
        id: 3,
        dotNavStep: 4,
        nextQuestionId: (key) => 4,
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
    4: {
        id: 4,
        dotNavStep: 5,
        nextQuestionId: (key) => 5,
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
    5: {
        id: 5,
        dotNavStep: 6,
        nextQuestionId: (key) => 6,
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
    6: {
        id: 6,
        dotNavStep: 7,
        nextQuestionId: (key) => 7,
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
    7: {
        id: 7,
        dotNavStep: 8,
        nextQuestionId: (key) => 8,
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
    8: {
        id: 8,
        dotNavStep: 9,
        nextQuestionId: (key) => 9,
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
    9: {
        id: 9,
        dotNavStep: 10,
        nextQuestionId: (key) => -1,
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
    },
}

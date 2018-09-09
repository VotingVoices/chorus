import * as React from 'react';
import { IQuestionProps } from '../question';

/**
 * Helper interface for Carousel props.  Each IQuestion forms a node in a question graph
 */
export interface IQuestion {
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
        nextQuestionId: (key) => 1,
        questionProps: {   
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
            label: 'First things first. Are you registered to vote?'
        }
    },  
    1: {
        nextQuestionId: (key) => key === '3' ? 2 : 0,
        questionProps: {
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
            label: 'Are you planning to vote in any of these states?',
        },
    },
    2: {
        nextQuestionId: (key) => 0,
        questionProps: {
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
            label: 'Do you know where your polling location is?',
        },
    }
}

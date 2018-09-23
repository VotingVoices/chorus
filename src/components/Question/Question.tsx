import * as React from 'react';

import { Answer, AnswerId } from '../Answer';
import { IConnectedReduxProps } from '../../store';
import { getQuestionFullLabel, IQuestionProps } from './QuestionTypes';

import './Question.css';

export class Question extends React.Component<IQuestionProps & IConnectedReduxProps, any> {
    public render(): JSX.Element {
        const { id, answers } = this.props;
        const label = getQuestionFullLabel(id);

        return (
            <div>
                <div className="question-label">{label}</div>
                <div className="answer-group">
                    {answers.map(
                        (answerId: AnswerId) => {
                            return (<Answer onClick={this._onClick(answerId)} answerId={answerId} key={answerId} />);
                        }
                    )}
                </div>
            </div>
        );
    }

    private _onClick = (answerId: AnswerId) => {
        return (ev: React.MouseEvent<HTMLElement | HTMLInputElement>) => {
            const { onChange, answers = [] } = this.props;
            const option = answers.find((o: AnswerId) => o === answerId );
            if (onChange)
            {
                onChange(ev, { answerId: option! });
            }   
        };
    };
}
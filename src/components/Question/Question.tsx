import * as React from 'react';
import { Answer, AnswerId } from '../Answer';
import './Question.css';
import { IQuestionProps } from './QuestionTypes';

export class Question extends React.Component<IQuestionProps, any>
{
    public render(): JSX.Element
    {
        const { label, answers } = this.props;
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
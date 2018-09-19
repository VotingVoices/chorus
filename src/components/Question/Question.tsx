import * as React from 'react';
import { Answer, IAnswerProps } from '../Answer';
import './Question.css';
import { IQuestionProps, OnClickCallback } from './QuestionTypes';

export class Question extends React.Component<IQuestionProps, any>
{
    private clickedFns: { [key: AnswerId]: OnClickCallback } = {};

    public render(): JSX.Element
    {
        const { label, answers } = this.props;
        return (
            <div>
                <div className="question-label">{label}</div>
                <div className="answer-group">
                    {answers!.map(

                        (option: IAnswerProps) => {
                            return (<Answer onClick={this._onClick(option.answerId)} answerId={option.answerId} {...option} />);
                        }
                    )}
                </div>
            </div>
        );
    }

    private _onClick = (answerId: AnswerId) =>
        this.clickedFns[answerId] ? 
        this.clickedFns[answerId] :
        (this.clickedFns[answerId] = (ev) => {
            const { onChange, answers = [] } = this.props;
            const option = answers.find((o: IAnswerProps) => o.answerId === answerId );
            if (onChange)
            {
                onChange(ev, option);
            }   
        });
}
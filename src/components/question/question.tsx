import * as React from 'react';
import { Answer, IAnswerProps } from '../answer';
import './question.css';
import { IQuestionProps, OnClickCallback } from './questiontypes';

export class Question extends React.Component<IQuestionProps, any>
{
    private clickedFns: { [key: string]: OnClickCallback } = {};

    public render(): JSX.Element
    {
        const { label, answers } = this.props;
        return (
            <div>
                <div>{label}</div>
                <div className="Answer-group">
                    {answers!.map(
                        (option: IAnswerProps) => {
                            return (<Answer onClick={this._onClick(option.key)} key={option.key} {...option} />);
                        }
                    )}
                </div>
            </div>
        );
    }

    private _onClick = (key: string) =>
        this.clickedFns[key] ? 
        this.clickedFns[key] :
        (this.clickedFns[key] = (ev) => {
            const { onChange, answers = [] } = this.props;
            const option = answers.find((o: IAnswerProps) => o.key === key );
            if (onChange)
            {
                onChange(ev, option);
            }   
        });
}
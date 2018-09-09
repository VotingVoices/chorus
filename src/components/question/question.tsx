import * as React from 'react';
import { Answer, IAnswerProps } from '../answer';
import './question.css';
import { IQuestionProps, OnClickCallback } from './questiontypes';

export class Question extends React.Component<IQuestionProps, any>
{
    private clickedFns: { [key: string]: OnClickCallback } = {};

    public render(): JSX.Element
    {
        const { label, options } = this.props;
        return (
            <div>
                <div>{label}</div>
                <div className="Answer-group">
                    {options!.map(
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
            const { onChange, options = [] } = this.props;
            const option = options.find((o: IAnswerProps) => o.key === key );
            if (onChange)
            {
                onChange(ev, option);
            }   
        });
}
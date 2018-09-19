import * as React from 'react';
import './Answer.css';
import { getAnswerLabel, IAnswerProps } from './AnswerTypes';

export class Answer extends React.Component<IAnswerProps, any>
{
    public render(): JSX.Element
    {
        const { answerId } = this.props;
        const label = getAnswerLabel(answerId);

        return (
            <span className="dot" onClick={this._onClick}>
                {label}
            </span>
        );
    }

    private _onClick = (ev: React.MouseEvent<HTMLElement>): void => {
        const { onClick } = this.props;
        ev.preventDefault();
        ev.stopPropagation();

        if (onClick)
        {
            onClick(ev);
        }
    }
}
import * as React from 'react';
import './answer.css';
import { IAnswerProps } from './answertypes';

export class Answer extends React.Component<IAnswerProps, any>
{
    public render(): JSX.Element
    {
        const { label } = this.props;
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
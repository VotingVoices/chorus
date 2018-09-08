import * as React from 'react';
import { IQuestionOptionProps } from './questionoptiontypes';

export class QuestionOption extends React.Component<IQuestionOptionProps, any>
{
    public render(): JSX.Element
    {
        const { label } = this.props;
        return (
            <div onClick={this._onClick}>{label}</div>
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
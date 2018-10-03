import * as React from 'react';

import { AnswerId } from '../store';
import { getAnswerLabel } from '../strings';

import './Answer.css';

interface IAnswerProps extends React.InputHTMLAttributes<HTMLElement | HTMLInputElement> {
	answerId: AnswerId;
}

export class Answer extends React.Component<IAnswerProps, any> {
	public render(): JSX.Element {
		const { answerId } = this.props;
		const label = getAnswerLabel(answerId);

		return (
			<span className="answer-button" onClick={this._onClick}>
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
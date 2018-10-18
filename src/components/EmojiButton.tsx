import * as React from 'react';
import { connect} from 'react-redux';

import { getEmojiImgElement } from './getEmojiImgElement';
import { AnswerId, IQuestionnaireState, QuestionId, QUESTIONS } from '../store';
import { getAnswerLabel, StringId } from '../strings';

import './Answer.css';

interface IEmojiButtonProps extends React.InputHTMLAttributes<HTMLElement | HTMLInputElement> {
	questionId: QuestionId;
	answerId: AnswerId;
}

interface IPropsFromState {
    getString: (id: StringId) => string;
}

class EmojiButton extends React.Component<IEmojiButtonProps & IPropsFromState, any> {
	public state = { mousedOver: false };

	public render(): JSX.Element {
		const { questionId, answerId } = this.props;
		const label = this.props.getString(getAnswerLabel(answerId));

		const question = QUESTIONS.find(q => q.id === questionId);

		const planStepId = question!.resultingPlanStep(answerId);

		/*return (
			<span className={`answer-button ${this.state.mousedOver ? 'answer-button-hover' : ''}`} onClick={this._onClick} onMouseOver={this._onMouseOver} onMouseOut={this._onMouseOut}>
				{label}
			</span>
		);*/

		return (
			<div>
				<div>
					{ getEmojiImgElement(planStepId!, "", this.props.getString) }
				</div>
				{label}
			</div>
		);
	}

	/*
	private _onClick = (ev: React.MouseEvent<HTMLElement>) => {
		const { onClick } = this.props;
		ev.preventDefault();
		ev.stopPropagation();

		if (onClick) {
			onClick(ev);
		}
	}

	private _onMouseOver = (ev: React.MouseEvent<HTMLElement>) => {
		this.setState({ mousedOver: true });
	}

	private _onMouseOut = (ev: React.MouseEvent<HTMLElement>) => {
		this.setState({ mousedOver: false });
	}
	*/
}

const mapStateToProps = (state: IQuestionnaireState) => ({
    getString: state.getString,
});

export default connect(mapStateToProps)(EmojiButton);
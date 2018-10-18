import * as React from 'react';
import { Dispatch } from 'redux';
import { connect} from 'react-redux';

import { default as Answer } from './Answer';
import { default as EmojiButton } from './EmojiButton';
import { AnswerId, answerQuestion, IConnectedReduxProps, IQuestionnaireState, QuestionId } from '../store';
import { getQuestionFullLabel, StringId } from '../strings';

import './Question.css';

interface IQuestionProps {
	questionId: QuestionId,
	answers: AnswerId[],
}

interface IPropsFromState {
	getString: (id: StringId) => string;
}

interface IPropsFromDispatch {
	answerQuestion: typeof answerQuestion,
}

function isEmojiAnswer(answerId: AnswerId): boolean {
	switch (answerId) {
		case AnswerId.Excited:
		case AnswerId.Concerned:
		case AnswerId.Shocked:
		case AnswerId.Angry:
		case AnswerId.Meh:
			return true;

		default:
			return false;
	}
}

class Question extends React.Component<IQuestionProps & IConnectedReduxProps & IPropsFromState & IPropsFromDispatch, any> {
	public render(): JSX.Element {
		const { questionId, answers } = this.props;
		const label = this.props.getString(getQuestionFullLabel(questionId));

		return (
			<div>
				<div className="question-label VotingVoices-serif">{label}</div>
				<div className="answer-group">
					{answers.map(
						(answerId: AnswerId) => {
							return this.answerButton(answerId);
						}
					)}
				</div>
			</div>
		);
	}

	private answerButton(answerId: AnswerId) {
		if (isEmojiAnswer(answerId)) {
			return (<EmojiButton onClick={this._onClick(answerId)} answerId={answerId} key={answerId} />);	
		}
		else {
			return (<Answer onClick={this._onClick(answerId)} answerId={answerId} key={answerId} />);
		}
	}

	private _onClick = (answerId: AnswerId) => {
		return (ev: React.MouseEvent<HTMLElement | HTMLInputElement>) => {
			const { questionId, answers } = this.props;

			const answer = answers.find((o: AnswerId) => o === answerId );

			this.props.answerQuestion(questionId, answer!); 
		};
	};
}

const mapStateToProps = (state: IQuestionnaireState) => ({
	getString: state.getString,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	answerQuestion: (questionId: QuestionId, answerId: AnswerId) => dispatch(answerQuestion(questionId, answerId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
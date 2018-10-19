import * as React from 'react';
import { Dispatch } from 'redux';
import { connect} from 'react-redux';

import { default as Answer } from './Answer';
import { default as EmojiButton } from './EmojiButton';
import { default as ZipCodeControls } from './ZipCodeControls';
import { AnswerId, answerQuestion, IConnectedReduxProps, IQuestionnaireState, IZipCodeAnswer, QuestionId } from '../store';
import { getQuestionFullLabel, StringId } from '../strings';

import '../App.css';
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
		const { questionId } = this.props;
		const label = this.props.getString(getQuestionFullLabel(questionId));

		return (
			<div>
				<div className="question-label VotingVoices-serif" dangerouslySetInnerHTML={ { __html: label } } />

				{ this.answerContent() }
			</div>
		);
	}

	private answerContent() {
		const { questionId, answers } = this.props;
		
		if (questionId === QuestionId.ZipCode) {
			return (
				<ZipCodeControls {...this.props} />
			);
		}
		else {
			return (
				<div className="answer-group">
					{answers.map(
						(answerId: AnswerId) => {
							return this.answerButton(questionId, answerId);
						}
					)}
				</div>
			);
		}
	}

	private answerButton(questionId: QuestionId, answerId: AnswerId) {
		if (isEmojiAnswer(answerId)) {
			return (<EmojiButton onClick={this._onAnswerClick(answerId)} questionId={questionId} answerId={answerId} key={answerId} />);	
		}
		else {
			return (<Answer onClick={this._onAnswerClick(answerId)} answerId={answerId} key={answerId} />);
		}
	}

	private _onAnswerClick = (answerId: AnswerId) => {
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
	answerQuestion: (questionId: QuestionId, answer: AnswerId | IZipCodeAnswer) => dispatch(answerQuestion(questionId, answer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
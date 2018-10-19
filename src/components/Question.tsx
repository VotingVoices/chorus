import * as React from 'react';
import { Button } from 'react-bootstrap';
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

interface IZipCodeState {
	zipCode: string,
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

class Question extends React.Component<IQuestionProps & IConnectedReduxProps & IPropsFromState & IPropsFromDispatch, IZipCodeState> {
	public render(): JSX.Element {
		const { questionId } = this.props;
		const label = this.props.getString(getQuestionFullLabel(questionId));

		return (
			<div>
				<div className="question-label VotingVoices-serif">{label}</div>

				{ this.answerContent() }
			</div>
		);
	}

	private answerContent() {
		const { questionId, answers } = this.props;
		
		if (questionId === QuestionId.ZipCode) {
			return this.zipCodeAnswerContent();
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

	private zipCodeAnswerContent() {
		return (
			<div className="answer-group">
				<input type="text" placeholder={this.props.getString(StringId.ZipCode)} onChange={this._onZipCodeValueChange} /><Button type="button" onClick={this._onSubmitZipClick}>Submit</Button>
			</div>
		);
	}

	private _onZipCodeValueChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ zipCode: ev.target.value });
	}

	private _onSubmitZipClick = (ev: React.MouseEvent<Button>) => {
		const { questionId } = this.props;

		this.props.answerQuestion(questionId, { zipCode: this.state.zipCode }); 
	};
}

const mapStateToProps = (state: IQuestionnaireState) => ({
	getString: state.getString,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	answerQuestion: (questionId: QuestionId, answerId: AnswerId) => dispatch(answerQuestion(questionId, answerId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Dispatch } from 'redux';
import { connect} from 'react-redux';

import { AnswerId, answerQuestion, IZipCodeAnswer, QuestionId } from '../store';
import { StringId } from '../strings';

import './Question.css';
import './ZipCodeControls.css';

interface IPropsFromState {
	getString: (id: StringId) => string;
}

interface IPropsFromDispatch {
	answerQuestion: typeof answerQuestion,
}

interface IZipCodeState {
	zipCode: string,
}

class ZipCodeControls extends React.Component<IPropsFromState & IPropsFromDispatch, IZipCodeState> {
	public render() {
		return (
			<div>
				<div className="zip-code-entry VotingVoices-sans-serif">
					<input type="text" className="zip-code-text-box" placeholder={this.props.getString(StringId.ZipCode)} onChange={this._onZipCodeValueChange} />
					<Button type="button" className="vv-button vv-button-filled submit-zip-button" onClick={this._onSubmitZipClick}>{this.props.getString(StringId.Submit)}</Button>
				</div>

				<div className="zip-code-explanation VotingVoices-serif">
					{this.props.getString(StringId.WeUseYourZipCodeToProvideMoreElevantInformation)}
				</div>

				<Button type="button" className="vv-button vv-button-outline skip-button" onClick={this._onSkipClick}>{this.props.getString(StringId.Skip)}</Button>
			</div>
		);
	}

	private _onZipCodeValueChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ zipCode: ev.target.value });
	}

	private _onSubmitZipClick = (ev: React.MouseEvent<Button>) => {
		this.props.answerQuestion(QuestionId.ZipCode, { zipCode: this.state.zipCode }); 
	};

	private _onSkipClick = (ev: React.MouseEvent<Button>) => {
		this.props.answerQuestion(QuestionId.ZipCode, { zipCode: ""}); 
	};
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	answerQuestion: (questionId: QuestionId, answer: AnswerId | IZipCodeAnswer) => dispatch(answerQuestion(questionId, answer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ZipCodeControls);
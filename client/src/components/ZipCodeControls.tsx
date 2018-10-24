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
	submitButtonEnabled: boolean,
}

class ZipCodeControls extends React.Component<IPropsFromState & IPropsFromDispatch, IZipCodeState> {
	public componentWillMount() {
		this.setState({
			zipCode: "",
			submitButtonEnabled: false,
		});
	}

	public render() {
		const { submitButtonEnabled } = this.state;

		return (
			<div>
				<div className="zip-code-entry VotingVoices-sans-serif">
					<input type="text" pattern="[0-9]*" maxLength={5} className="vv-text-box zip-code-text-box" placeholder={this.props.getString(StringId.ZipCode)} onKeyPress={this._onZipCodeKeyPress} onChange={this._onZipCodeValueChange} />
					<Button type="button" className="vv-button vv-button-filled submit-zip-button" onClick={this._onSubmitZipClick} disabled={!submitButtonEnabled}>{this.props.getString(StringId.Submit)}</Button>
				</div>

				<div className="zip-code-explanation VotingVoices-serif">
					{this.props.getString(StringId.WeUseYourZipCodeToProvideMoreElevantInformation)}
				</div>

				<Button type="button" className="vv-button vv-button-outline skip-button" onClick={this._onSkipClick}>{this.props.getString(StringId.Skip)}</Button>
			</div>
		);
	}

	private _onZipCodeKeyPress = (ev: React.KeyboardEvent<HTMLInputElement>) => {
		if (!ev.key.match(/^[0-9]+$/)) {
			ev.preventDefault();
		}
	}

	private _onZipCodeValueChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		const submitButtonEnabled = ev.target.value.length === 5;

		this.setState({
			zipCode: ev.target.value,
			submitButtonEnabled,
		});
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
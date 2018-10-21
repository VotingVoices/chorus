import * as React from 'react';
import { Dispatch } from 'redux';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { default as PlanEmotion } from './PlanEmotion';
import { default as PlanStep } from './PlanStep';
import { default as ReasonToVote } from './ReasonToVote';
import { default as StartOverButton, StartOverButtonType } from './StartOverButton';
import { ShareWidgets, ShareWidgetSize } from './ShareWidgets';
import { ALL_QUESTION_IDS, copyLinkToClipboard, IConnectedReduxProps, IQuestionAndAnswer, IQuestionnaireState, LanguageId, QuestionId, QUESTIONS, recordPlanPage, recordSaveButton, sendPlanEmail, VotingStateId } from '../store';
import { StringId }from '../strings';

import './PlanBody.css';

interface IPlanBodyProps {
	answers: IQuestionAndAnswer[],
	votingStateId: VotingStateId,
}

interface IPropsFromState {
	currentLanguage: LanguageId,
    getString: (id: StringId) => string,
}

interface IPropsFromDispatch {
	recordPlanPage: typeof recordPlanPage,
	recordSaveButton: typeof recordSaveButton,
	sendPlanEmail: typeof sendPlanEmail,
	copyLinkToClipboard: typeof copyLinkToClipboard,
}

enum SavePaneExpandState {
	Collapsed,
	Expanded,
}

interface ISavePaneState {
	expandState: SavePaneExpandState,
	emailAddress: string,
}

export interface IIndexHolder {
	index: number;
}

class PlanBody extends React.Component<IPlanBodyProps & IPropsFromState & IPropsFromDispatch & IConnectedReduxProps, ISavePaneState> {
	public componentWillMount() {
		this.setState({ expandState: SavePaneExpandState.Collapsed });
	}

	public render() {
		const { expandState: savePaneExpandState } = this.state;

		const savePaneStyle: React.CSSProperties = savePaneExpandState === SavePaneExpandState.Expanded ? {} : {display: "none"};

		const indexHolder = { index: 0 } as IIndexHolder;

		return (
			<div>
				<div className="plan-save-and-invite">
					<div className="plan-save-and-invite-2">
						<div className="plan-save">
							<Button type="button" className="vv-button save-button" onClick={this._onSaveClick}>{this.props.getString(StringId.Save)}</Button>
						</div>
						<div className="plan-invite-people">
							<div className="plan-invite-people-text">{this.props.getString(StringId.PlanPageInvitePeople)}</div>
							<div className="share-widget-container">
								<ShareWidgets size={ShareWidgetSize.Small} />
							</div>
						</div>
					</div>
				</div>

				<div className="save-pane" style={savePaneStyle}>
					<div className="email-address-label VotingVoices-serif">
						{this.props.getString(StringId.SendYourselfALink)}
					</div>
					<div className="email-address-controls">
						<input type="text" className="vv-text-box email-address-text-box" placeholder={this.props.getString(StringId.EmailAddress)} onChange={this._onEmailAddressValueChange} />
						<Button type="button" className="vv-button vv-button-filled save-pane-button" onClick={this._onEmailSendClick}>{this.props.getString(StringId.Send)}</Button>
						<Button type="button" className="vv-button vv-button-outline save-pane-button copy-link-button" onClick={this._onCopyLinkClick}>{this.props.getString(StringId.CopyLink)}</Button>
					</div>
				</div>

				<div className="App plan-page-body">
					{ALL_QUESTION_IDS.map(
						(questionId: QuestionId) => {
							const answer = this.props.answers.find(qa => qa.questionId === questionId);

							if (answer !== undefined) {
								const question = QUESTIONS.find(q => q.id === questionId);

								const planStepId = question!.resultingPlanStep(answer!.answer);

								if (planStepId !== undefined) {
									if (questionId === QuestionId.ReasonToVote) {
										return <ReasonToVote planStepId={planStepId!} />
									}
									else if (questionId === QuestionId.Emotion) {
										return <PlanEmotion {...this.props} planStepId={planStepId!} votingStateId={this.props.votingStateId} />
									}
									else if (questionId === QuestionId.PeopleToInvite) {
										return <PlanStep { ...this.props } indexHolder={indexHolder} callToAction={(<div className="plan-step-share-widget-container"><ShareWidgets {...this.props} size={ShareWidgetSize.Large} /></div>)} planStepId={planStepId!} votingStateId={this.props.votingStateId} />
									}
									else {
										return <PlanStep {...this.props} indexHolder={indexHolder} planStepId={planStepId!} votingStateId={this.props.votingStateId} />
									}
								}
								else {
									return <React.Fragment />
								}
							}
							else {
								return <React.Fragment />
							}
						}
					)}

					<StartOverButton type={StartOverButtonType.Filled} {...this.props} />
				</div>
			</div>
		);
	}

	public componentDidMount() {
		this.props.recordPlanPage(this.props.answers, this.props.currentLanguage);
	}

	private _onSaveClick = (ev: React.MouseEvent<Button>) => {
		this.props.recordSaveButton();

		const { expandState } = this.state;

		if (expandState === SavePaneExpandState.Collapsed) {
			this.setState({ expandState: SavePaneExpandState.Expanded });
		}
		else {
			this.setState({ expandState: SavePaneExpandState.Collapsed });
		}
	}

	private _onEmailAddressValueChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ emailAddress: ev.target.value });
	}

	private _onEmailSendClick = (ev: React.MouseEvent<Button>) => {
		// TODO: Disable the 'Send' button for a blank email (or at least do validation here)
		this.props.sendPlanEmail(this.state.emailAddress);
	}

	private _onCopyLinkClick = (ev: React.MouseEvent<Button>) => {
		this.props.copyLinkToClipboard();
	}
}

const mapStateToProps = (state: IQuestionnaireState) => ({
	currentLanguage: state.currentLanguage,
	getString: state.getString,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	recordPlanPage: (answers: IQuestionAndAnswer[], language: LanguageId) => dispatch(recordPlanPage(answers, language)),
	recordSaveButton: () => dispatch(recordSaveButton()),
	sendPlanEmail: (emailAddress: string) => dispatch(sendPlanEmail(emailAddress)),
	copyLinkToClipboard: () => dispatch(copyLinkToClipboard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanBody);
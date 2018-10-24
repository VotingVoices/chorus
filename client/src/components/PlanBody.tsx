import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { default as PlanEmotion } from './PlanEmotion';
import { default as PlanStep } from './PlanStep';
import { default as ReasonToVote } from './ReasonToVote';
import { default as SaveAndInviteControls, SaveAndInviteControlsFlavor } from './SaveAndInviteControls';
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
}

export interface IIndexHolder {
	index: number;
}

class PlanBody extends React.Component<IPlanBodyProps & IPropsFromState & IPropsFromDispatch & IConnectedReduxProps, any> {
	public render() {
		const indexHolder = { index: 0 } as IIndexHolder;

		return (
			<div>
				<SaveAndInviteControls flavor={SaveAndInviteControlsFlavor.SaveAndInvite} {...this.props} />

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
				</div>

				<SaveAndInviteControls flavor={SaveAndInviteControlsFlavor.JustSave} {...this.props} />

				<StartOverButton type={StartOverButtonType.Filled} {...this.props} />
			</div>
		);
	}

	public componentDidMount() {
		this.props.recordPlanPage(this.props.answers, this.props.currentLanguage);
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
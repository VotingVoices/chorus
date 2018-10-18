import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { default as PlanEmotion } from './PlanEmotion';
import { default as PlanStep } from './PlanStep';
import { default as ReasonToVote } from './ReasonToVote';
import { default as StartOverButton, StartOverButtonType } from './StartOverButton';
import { ALL_QUESTION_IDS, IConnectedReduxProps, IQuestionAndAnswer, IQuestionnaireState, LanguageId, QuestionId, QUESTIONS, recordPlanPage, VotingStateId } from '../store';
import { getPlanPageSubHeaderText, StringId }from '../strings';

import './Plan.css';
import ShareCallToAction from './ShareCallToAction';

interface IPlanProps {
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

class Plan extends React.Component<IPlanProps & IPropsFromState & IPropsFromDispatch & IConnectedReduxProps, any> {
	public render() {
		const indexHolder = { index: 0 } as IIndexHolder;
		const subHeaderText = this.props.getString(getPlanPageSubHeaderText());

		return (
			<div>
				<div className="Plan-header Gradient-background">
                	<h1 className="voteplan-title">VotePlan</h1>
                	<div className="plan-sub-header-text VotingVoices-serif">{subHeaderText}</div>
				</div>

				<div className="App plan-page-body">
					{ALL_QUESTION_IDS.map(
						(questionId: QuestionId) => {
							const answer = this.props.answers.find(qa => qa.questionId === questionId);

							if (answer !== undefined) {
								const question = QUESTIONS.find(q => q.id === questionId);

								const planStepId = question!.resultingPlanStep(answer!.answerId);

								if (planStepId !== undefined) {
									if (questionId === QuestionId.ReasonToVote) {
										return <ReasonToVote planStepId={planStepId!} />
									}
									else if (questionId === QuestionId.Emotion) {
										return <PlanEmotion {...this.props} planStepId={planStepId!} votingStateId={this.props.votingStateId} />
									}
									else if (questionId === QuestionId.PeopleToInvite) {
										return <PlanStep { ...this.props } indexHolder={indexHolder} callToAction={(<ShareCallToAction { ...this.props } />)} planStepId={planStepId!} votingStateId={this.props.votingStateId} />
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
}

const mapStateToProps = (state: IQuestionnaireState) => ({
	currentLanguage: state.currentLanguage,
	getString: state.getString,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	recordPlanPage: (answers: IQuestionAndAnswer[], language: LanguageId) => dispatch(recordPlanPage(answers, language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Plan);
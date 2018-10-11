import * as React from 'react';
import { Dispatch } from 'redux';
import { connect} from 'react-redux';
import { PlanEmotion } from './PlanEmotion';
import { PlanStep } from './PlanStep';
import { ReasonToVote } from './ReasonToVote';
import { StartOverButton } from './StartOverButton';
import { ALL_QUESTION_IDS, IConnectedReduxProps, IQuestionAndAnswer, QuestionId, QUESTIONS, recordPlanPage, VotingStateId } from '../store';

import './Plan.css';

interface IPlanProps {
	answers: IQuestionAndAnswer[],
	votingStateId: VotingStateId,
}

interface IPropsFromDispatch {
	recordPlanPage: typeof recordPlanPage,
}

export interface IIndexHolder {
	index: number;
}

class InternalPlan extends React.Component<IPlanProps & IPropsFromDispatch & IConnectedReduxProps, any> {
	public componentDidMount() {
		this.props.recordPlanPage(this.props.answers);
	}
	
	public render() {
		const indexHolder = { index: 0 } as IIndexHolder;

		return (
			<div>
				<div className="Plan-header Gradient-background">
					<div className="plan-congrats VotingVoices-serif">Congratulations! Here's your</div>

					<h1 className="voteplan-title">VotePlan</h1>

					<StartOverButton {...this.props} />
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
										return <PlanEmotion planStepId={planStepId!} votingStateId={this.props.votingStateId} />
									}
									else {
										return <PlanStep indexHolder={indexHolder} planStepId={planStepId!} votingStateId={this.props.votingStateId} />
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
			</div>
		);
	}
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	recordPlanPage: (answers: IQuestionAndAnswer[]) => dispatch(recordPlanPage(answers)),
});

export const Plan = connect(mapStateToProps, mapDispatchToProps)(InternalPlan);
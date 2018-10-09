import * as React from 'react';
import { Dispatch } from 'redux';
import { connect} from 'react-redux';
import { PlanStep } from './PlanStep';
import { StartOverButton } from './StartOverButton';
import { ALL_QUESTION_IDS, IConnectedReduxProps, IQuestionAndAnswer, QuestionId, recordPlanPage, VotingStateId } from '../store';

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
			<div className="App">
				<div className="Plan-header Gradient-background">
					<div className="plan-congrats VotingVoices-serif">Congratulations! Here's your</div>

					<h1 className="voteplan-title">VotePlan</h1>

					<StartOverButton {...this.props} />
				</div>

				<div>
					{ALL_QUESTION_IDS.map(
						(questionId: QuestionId) => {
							const answer = this.props.answers.find(qa => qa.questionId === questionId);

							if (answer !== undefined) {
								return <PlanStep indexHolder={indexHolder} questionId={questionId} answerId={answer!.answerId} votingStateId={this.props.votingStateId} />
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
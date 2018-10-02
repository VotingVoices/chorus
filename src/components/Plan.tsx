import * as React from 'react';
import { connect} from 'react-redux';
import { PlanStep } from './PlanStep';
import { StartOverButton } from './StartOverButton';
import { ALL_QUESTION_IDS, IConnectedReduxProps, IQuestionAndAnswer, QuestionId, VotingStateId } from '../store';

import './Plan.css';

interface IPlanProps {
	answers: IQuestionAndAnswer[],
	votingStateId: VotingStateId,
}

export interface IIndexHolder {
	index: number;
}

class InternalPlan extends React.Component<IPlanProps & IConnectedReduxProps, any> {
	public render() {
		const indexHolder = { index: 0 } as IIndexHolder;

		return (
			<div className="App">
				<header className="Plan-header Gradient-background">
					<p>This is your voting plan.</p>
				</header>

				<StartOverButton {...this.props} />

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

export const Plan = connect(mapStateToProps)(InternalPlan);
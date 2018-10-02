import * as React from 'react';
import { connect} from 'react-redux';
import { PlanStep } from './PlanStep';
import { StartOverButton } from './StartOverButton';
import { ALL_QUESTION_IDS, IConnectedReduxProps, IQuestionAndAnswer, QuestionId, VotingStateId } from '../store';

interface IPlanProps {
	answers: IQuestionAndAnswer[],
	votingStateId: VotingStateId,
}

class InternalPlan extends React.Component<IPlanProps & IConnectedReduxProps, any> {
	public render() {
		return (
			<div className="App">
				<header className="App-header">
					<p>This is your voting plan.</p>
				</header>

				<StartOverButton {...this.props} />

				<div>
					{ALL_QUESTION_IDS.map(
						(questionId: QuestionId, index) => {
							const answer = this.props.answers.find(qa => qa.questionId === questionId);

							if (answer !== undefined) {
								return <PlanStep index={index} questionId={questionId} answerId={answer!.answerId} votingStateId={this.props.votingStateId} />
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
import * as React from 'react';
import { AnswerId, QUESTIONS, QuestionId, VotingStateId } from '../store';
import { getPlanStepStrings } from '../strings';

interface IPlanStepProps {
	questionId: QuestionId,
	answerId: AnswerId,
	votingStateId: VotingStateId,
}

export class PlanStep extends React.Component<IPlanStepProps, any> {
	public render() {
		const { questionId, answerId, votingStateId } = this.props;

		const question = QUESTIONS.find(q => q.id === questionId);

		const planStepId = question!.resultingPlanStep(answerId);

		if (planStepId !== undefined) {
			const { header, text, callToAction, link } = getPlanStepStrings(planStepId, votingStateId);

			return (
				<div key={planStepId}>
					<p>{header}</p>
					<p>{text}</p>

					{ callToAction !== undefined ? <p>{callToAction!}</p> : <React.Fragment /> }
					{ link !== undefined ? <p>{link!}</p> : <React.Fragment /> }
				</div>
			);
		}
		else {
			return <React.Fragment />
		}
	}
}
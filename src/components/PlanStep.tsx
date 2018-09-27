import * as React from 'react';
import { AnswerId, QUESTIONS, QuestionId } from '../store';
import { getPlanStepSummaryLabel } from '../strings';

interface IPlanStepProps {
	questionId: QuestionId,
	answerId: AnswerId,
}

export class PlanStep extends React.Component<IPlanStepProps, any> {
	public render() {
		const { questionId, answerId } = this.props;

		const question = QUESTIONS.find(q => q.id === questionId);

		const planStepId = question!.resultingPlanStep(answerId);

		if (planStepId !== undefined) {
			const planStepSummaryLabel = getPlanStepSummaryLabel(planStepId);

			return (
				<p key={planStepId}>{planStepSummaryLabel}</p>
			);
		}
		else {
			return <React.Fragment />
		}
	}
}
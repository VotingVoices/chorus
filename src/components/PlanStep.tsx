import * as React from 'react';
import { AnswerId, QUESTIONS, QuestionId, VotingStateId } from '../store';
import { getPlanStepStrings, planStepHeaderFormattedString } from '../strings';

interface IPlanStepProps {
	index: number,
	questionId: QuestionId,
	answerId: AnswerId,
	votingStateId: VotingStateId,
}

export class PlanStep extends React.Component<IPlanStepProps, any> {
	public render() {
		const { index, questionId, answerId, votingStateId } = this.props;

		const question = QUESTIONS.find(q => q.id === questionId);

		const planStepId = question!.resultingPlanStep(answerId);

		if (planStepId !== undefined) {
			const { header, text, callToAction, link } = getPlanStepStrings(planStepId, votingStateId);

			const fullHeaderString = planStepHeaderFormattedString(index, header);

			return (
				<div key={planStepId}>
					<h1>{fullHeaderString}</h1>
					<p>{text}</p>

					{ this.renderCallToAction(callToAction, link) }
				</div>
			);
		}
		else {
			return <React.Fragment />
		}
	}

	private renderCallToAction(callToAction: string | undefined, link: string | undefined): JSX.Element {
		if (callToAction !== undefined && link !== undefined) {
			// TODO: Link should open in a new tab.
			return <h3><a href={link!}>{callToAction!}</a></h3>
		}
		else {
			return <React.Fragment />
		}
	}
}
import * as React from 'react';
import { IIndexHolder } from './Plan';
import { AnswerId, QUESTIONS, QuestionId, VotingStateId } from '../store';
import { getPlanStepStrings, planStepHeaderFormattedString } from '../strings';

import './PlanStep.css';

interface IPlanStepProps {
	indexHolder: IIndexHolder,
	questionId: QuestionId,
	answerId: AnswerId,
	votingStateId: VotingStateId,
}

export class PlanStep extends React.Component<IPlanStepProps, any> {
	public render() {
		const { indexHolder, questionId, answerId, votingStateId } = this.props;

		const question = QUESTIONS.find(q => q.id === questionId);

		const planStepId = question!.resultingPlanStep(answerId);

		if (planStepId !== undefined) {
			const { header, text, callToAction, link } = getPlanStepStrings(planStepId, votingStateId);

			const fullHeaderString = planStepHeaderFormattedString(indexHolder.index, header);

			// Increment the index holder so that the next plan step uses the next number.
			indexHolder.index++;
			
			return (
				<div key={planStepId}>
					<h1 className="plan-step-header VotingVoices-sans-serif">{fullHeaderString}</h1>
					<p className="plan-step-text VotingVoices-serif">{text}</p>

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
			return <a href={link!} className="plan-step-call-to-action">{callToAction!}</a>
		}
		else {
			return <React.Fragment />
		}
	}
}
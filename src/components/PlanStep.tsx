import * as React from 'react';
import { IIndexHolder } from './Plan';
import { PlanStepId, VotingStateId } from '../store';
import { getPlanStepStrings, planStepHeaderFormattedString } from '../strings';
import { renderPlanStepCallToAction } from './renderPlanStepCallToAction';

import './PlanStep.css';

interface IPlanStepProps {
	indexHolder: IIndexHolder,
	planStepId: PlanStepId,
	votingStateId: VotingStateId,
}

export class PlanStep extends React.Component<IPlanStepProps, any> {
	public render() {
		const { indexHolder, planStepId, votingStateId } = this.props;

		const { header, text, callToAction, link } = getPlanStepStrings(planStepId, votingStateId);

		const fullHeaderString = planStepHeaderFormattedString(indexHolder.index, header);

		// Increment the index holder so that the next plan step uses the next number.
		indexHolder.index++;
		
		return (
			<div key={planStepId}>
				<div className="plan-step-header VotingVoices-sans-serif">{fullHeaderString}</div>
				<div className="plan-step-text VotingVoices-serif">{text}</div>

				{ renderPlanStepCallToAction(callToAction, link) }
			</div>
		);
	}
}
import * as React from 'react';
import { IIndexHolder } from './Plan';
import { PlanStepId, VotingStateId } from '../store';
import { getPlanStepStrings, planStepHeaderFormattedString } from '../strings';
import { renderPlanStepCallToAction } from './renderPlanStepCallToAction';

import plan_circle_on from './plan_circle_on.png';

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
				<div className="plan-step-header VotingVoices-sans-serif">{this.checkboxElement()}{fullHeaderString}</div>
				<div className="plan-step-text VotingVoices-serif">{text}</div>

				{ this.showBallotReady(planStepId) ?
					this.ballotReadyWidget(callToAction, link) :
					renderPlanStepCallToAction(callToAction, link) }
			</div>
		);
	}

	private checkboxElement(): JSX.Element {
		return <img className="plan-step-checkbox" src={plan_circle_on} />
	}

	private showBallotReady(planStepId: PlanStepId) {
		return (planStepId === PlanStepId.ResearchBallotIssues || planStepId === PlanStepId.ReviewBallotIssues);
	}

	private ballotReadyWidget(callToAction: string | undefined, link: string | undefined): JSX.Element {
		return (
			<iframe className="ballotReady-widget" style={ { backgroundColor: "transparent", border: "none", overflow: "hidden" } } scrolling="no" src="https://www2.ballotready.org/widget/address_search" width="100%">
				{ renderPlanStepCallToAction(callToAction, link) }
			</iframe>
		);
	}
}
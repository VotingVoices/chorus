import * as React from 'react';
import { PlanStepId } from '../store';
import { getReasonToVoteStrings } from '../strings';

import './PlanStep.css';
import './ReasonToVote.css';

interface IPlanStepProps {
	planStepId: PlanStepId,
}

export class ReasonToVote extends React.Component<IPlanStepProps, any> {
	public render() {
		const { planStepId } = this.props;

		const { header, reasonText, bodyText } = getReasonToVoteStrings(planStepId);
		
		return (
			<div key={planStepId}>
				<div className="reason-to-vote-header VotingVoices-serif">{header}</div>
				<div className="reason-to-vote-text">{reasonText}</div>
				<div className="plan-step-text VotingVoices-serif reason-to-vote-plan-step-text">{bodyText}</div>
			</div>
		);
	}
}
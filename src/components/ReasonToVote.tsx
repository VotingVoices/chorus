import * as React from 'react';
import { PlanStepId } from '../store';
import { getReasonToVoteStrings } from '../strings';

import './PlanStep.css';
import './ReasonToVote.css';

interface IReasonToVoteProps {
	planStepId: PlanStepId,
}

export class ReasonToVote extends React.Component<IReasonToVoteProps, any> {
	public render() {
		const { planStepId } = this.props;

		const { header, reasonText, bodyText } = getReasonToVoteStrings(planStepId);
		
		return (
			<div key={planStepId}>
				<div className="plan-step-header VotingVoices-sans-serif">{header}</div>
				<div className="reason-to-vote-text">{reasonText}</div>
				<div className="plan-step-text VotingVoices-serif reason-to-vote-plan-step-text">{bodyText}</div>
			</div>
		);
	}
}
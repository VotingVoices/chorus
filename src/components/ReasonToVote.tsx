import * as React from 'react';
import { connect} from 'react-redux';
import { IQuestionnaireState, PlanStepId } from '../store';
import { getReasonToVoteStrings, StringId } from '../strings';

import './PlanStep.css';
import './ReasonToVote.css';

interface IReasonToVoteProps {
	planStepId: PlanStepId,
}

interface IPropsFromState {
	getString: (id: StringId) => string;
}

class ReasonToVote extends React.Component<IReasonToVoteProps & IPropsFromState, any> {
	public render() {
		const { planStepId } = this.props;

		const { header, reasonText, bodyText } = getReasonToVoteStrings(planStepId);
		
		return (
			<div key={planStepId}>
				<div className="plan-step-header VotingVoices-sans-serif">{this.props.getString(header)}</div>
				<div className="reason-to-vote-text">{this.props.getString(reasonText)}</div>
				<div className="plan-step-text VotingVoices-serif reason-to-vote-plan-step-text">{this.props.getString(bodyText)}</div>
			</div>
		);
	}
}

const mapStateToProps = (state: IQuestionnaireState) => ({
	getString: state.getString,
});

export default connect(mapStateToProps)(ReasonToVote);
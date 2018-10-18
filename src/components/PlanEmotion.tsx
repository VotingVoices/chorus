import * as React from 'react';
import { connect } from 'react-redux';
import { IConnectedReduxProps, IQuestionnaireState, PlanStepId, VotingStateId } from '../store';
import { getPlanStepStrings, StringId } from '../strings';
import { default as CallToAction } from './CallToAction';
import { getEmojiImgElement } from './getEmojiImgElement';

import './PlanEmotion.css';
import './PlanStep.css';
import './ReasonToVote.css';

interface IPlanEmotionProps {
	planStepId: PlanStepId,
	votingStateId: VotingStateId,
}

interface IPropsFromState {
	getString: (id: StringId) => string;
}

class PlanEmotion extends React.Component<IPlanEmotionProps & IPropsFromState & IConnectedReduxProps, any> {
	public render() {
		const { planStepId, votingStateId } = this.props;

		const { header, text, callToAction, link } = getPlanStepStrings(planStepId, votingStateId);

		return (
			<div key={planStepId}>
				<div>{ this.imgElement(planStepId) }</div>

				<div className="plan-step-header VotingVoices-sans-serif">{this.props.getString(header)}</div>
				<div className="plan-step-text VotingVoices-serif">{this.props.getString(text)}</div>

				<CallToAction {...this.props} callToAction={callToAction} link={link} />
			</div>
		);
	}

	public imgElement(planStepId: PlanStepId): JSX.Element {
		return getEmojiImgElement(planStepId, "plan-page-emoji-img", this.props.getString);
	}
}

const mapStateToProps = (state: IQuestionnaireState) => ({
	getString: state.getString,
});

export default connect(mapStateToProps)(PlanEmotion);
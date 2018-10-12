import * as React from 'react';
import { IConnectedReduxProps, PlanStepId, VotingStateId } from '../store';
import { getEmojiAltText, getPlanStepStrings } from '../strings';
import { CallToAction } from './CallToAction';

import emoji_angry from './emoji_angry.svg';
import emoji_concerned from './emoji_concerned.svg';
import emoji_excited from './emoji_excited.svg';
import emoji_meh from './emoji_meh.svg';
import emoji_shocked from './emoji_shocked.svg';

import './PlanEmotion.css';
import './PlanStep.css';
import './ReasonToVote.css';

interface IPlanEmotionProps {
	planStepId: PlanStepId,
	votingStateId: VotingStateId,
}

export class PlanEmotion extends React.Component<IPlanEmotionProps & IConnectedReduxProps, any> {
	public render() {
		const { planStepId, votingStateId } = this.props;

		const { header, text, callToAction, link } = getPlanStepStrings(planStepId, votingStateId);

		return (
			<div key={planStepId}>
				<div>{ this.imgElement(planStepId) }</div>

				<div className="plan-step-header VotingVoices-sans-serif">{header}</div>
				<div className="plan-step-text VotingVoices-serif">{text}</div>

				<CallToAction {...this.props} callToAction={callToAction} link={link} />
			</div>
		);
	}

	public imgElement(planStepId: PlanStepId): JSX.Element {
		const className = "plan-page-emoji-img";
		const altText = getEmojiAltText(planStepId);

		switch (planStepId) {
			case PlanStepId.Excited: {
				// TODO: I bet we can just return the SVG src as a string?
				return <img src={emoji_excited} alt={altText} className={className} />;
			}
			case PlanStepId.Concerned: {
				return <img src={emoji_concerned} alt={altText} className={className} />;
			}
			case PlanStepId.Shocked: {
				return <img src={emoji_shocked} alt={altText} className={className} />;
			}
			case PlanStepId.Angry: {
				return <img src={emoji_angry} alt={altText} className={className} />;
			}
			case PlanStepId.Meh: {
				return <img src={emoji_meh} alt={altText} className={className} />;
			}
			default:
				throw new Error("Unhandled PlanStepId");
		}
	}
}
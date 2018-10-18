import * as React from 'react';

import { getEmojiAltText, StringId } from '../strings';
import { PlanStepId } from '../store';

import emoji_angry from './emoji_angry.svg';
import emoji_concerned from './emoji_concerned.svg';
import emoji_excited from './emoji_excited.svg';
import emoji_meh from './emoji_meh.svg';
import emoji_shocked from './emoji_shocked.svg';

export function getEmojiImgElement(planStepId: PlanStepId, className: string, getString: (stringId: StringId) => string): JSX.Element {
	const altText = getString(getEmojiAltText(planStepId));

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
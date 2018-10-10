import * as React from 'react';

export function renderPlanStepCallToAction(callToAction: string | undefined, link: string | undefined): JSX.Element {
	if (callToAction !== undefined && link !== undefined) {
		// TODO: Link should open in a new tab.
		return <div className="plan-step-call-to-action VotingVoices-sans-serif"><a href={link!}>{callToAction!}</a></div>
	}
	else {
		return <React.Fragment />
	}
}
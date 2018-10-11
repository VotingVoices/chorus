import * as React from 'react';

interface ICallToActionProps {
	callToAction: string | undefined,
	link: string | undefined,
}

export class CallToAction extends React.Component<ICallToActionProps, any> {
	public render(): JSX.Element {
		const { callToAction, link } = this.props;
		
		if (callToAction !== undefined && link !== undefined) {
			return <div className="plan-step-call-to-action VotingVoices-sans-serif"><a href={link!} target="_blank">{callToAction!}</a></div>
		}
		else {
			return <React.Fragment />
		}
	}
}
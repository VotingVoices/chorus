import * as React from 'react';

export class ShareWidget extends React.Component<any, any> {
	public render(): JSX.Element {
		// const { callToAction, link } = this.props;
		
		return (
			<div className="share-widget-root">
				<div className="fb-share-button" 
					data-href="https://votingvoices.org" 
					data-layout="button_count" />
				<a className="twitter-share-button"
					href="https://twitter.com/intent/tweet?text=Check%20out%20Voting%20Voices%20to%20create%20a%20personalized%20vote%20plan%20in%20minutes!">
					Tweet
				</a>
			</div>
		);
	}

}

export default ShareWidget;
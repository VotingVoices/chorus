import * as React from 'react';

import './ShareWidget.css';

export class ShareWidget extends React.Component<any, any> {

	public render(): JSX.Element {
		return (
			<div className="share-widget-root">
				<div className="fb-share-button" 
					data-href="https://votingvoices.org" 
					data-layout="button_count"
					data-size="large" />
				<a className="twitter-share-button"
					data-url="http://votingvoices.org/voteplan"
					data-size="large"
					href="https://twitter.com/intent/tweet?text=Check%20out%20Voting%20Voices%20to%20create%20a%20personalized%20vote%20plan%20in%20minutes!">
					Tweet
				</a>
			</div>
		);
	}

}

export default ShareWidget;
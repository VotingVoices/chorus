import * as React from 'react';

export class ShareWidget extends React.Component<any, any> {
	public render(): JSX.Element {
		// const { callToAction, link } = this.props;
		
		return (
			<div>
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

((d: any, s: any, id: any): void => {
	let js; 
	const fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');

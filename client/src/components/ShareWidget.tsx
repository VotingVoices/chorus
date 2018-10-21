import * as React from 'react';
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share';

import './ShareWidget.css';

export class ShareWidget extends React.Component<any, any> {

	public render(): JSX.Element {
		return (
			<div className="share-widget-root">
				<FacebookShareButton
					url="http://votingvoices.org/voteplan">
					<FacebookIcon size={32} round={true} />
				</FacebookShareButton>

				<TwitterShareButton
					url="http://votingvoices.org/voteplan">
					<TwitterIcon size={32} round={true} />
				</TwitterShareButton>
			</div>
		);
	}

}

export default ShareWidget;
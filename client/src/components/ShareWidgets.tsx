import * as React from 'react';
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share';

import './ShareWidgets.css';

export class ShareWidgets extends React.Component<any, any> {
	public render(): JSX.Element {
		return (
			<div className="share-widget-root">
				<FacebookShareButton
					url="http://votingvoices.org/voteplan">
					<div className="share-icon">
						<FacebookIcon size={32} round={true} />
					</div>
				</FacebookShareButton>

				<TwitterShareButton
					url="http://votingvoices.org/voteplan">
					<div className="share-icon">
						<TwitterIcon size={32} round={true} />
					</div>
				</TwitterShareButton>
			</div>
		);
	}
}
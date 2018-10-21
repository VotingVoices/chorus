import * as React from 'react';
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share';

import './ShareWidgets.css';

export enum ShareWidgetSize {
	Small,
	Large,
}

interface IShareWidgetsProps {
	size: ShareWidgetSize,
}

export class ShareWidgets extends React.Component<IShareWidgetsProps, any> {
	public render(): JSX.Element {
		const { size } = this.props;

		const iconSize = size === ShareWidgetSize.Small ? 40 : 48;

		return (
			<div className="share-widget-root">
				<FacebookShareButton
					url="http://votingvoices.org/voteplan">
					<div className="share-icon">
						<FacebookIcon size={iconSize} round={true} />
					</div>
				</FacebookShareButton>

				<TwitterShareButton
					url="http://votingvoices.org/voteplan">
					<div className="share-icon">
						<TwitterIcon size={iconSize} round={true} />
					</div>
				</TwitterShareButton>
			</div>
		);
	}
}
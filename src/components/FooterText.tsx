import * as React from 'react';
import { connect} from 'react-redux';
import { Dispatch } from 'redux';

import { viewPrivacyPolicy } from '../store';

import './FooterText.css';

interface IPropsFromDispatch {
    viewPrivacyPolicy: typeof viewPrivacyPolicy,
}

class FooterText extends React.Component<IPropsFromDispatch, any> {
	public render() {
		return (
			<div className="footer-text">&copy;2018 Voting Voices.  All rights reserved. View our <a onClick={this._onPrivacyPolicyClick} style={{cursor: "pointer"}}>privacy policy</a>.</div>
		);
	}

	private _onPrivacyPolicyClick = (ev: React.MouseEvent<HTMLElement>) => {
		this.props.viewPrivacyPolicy();
	}
}

const mapStateToProps = () => ({ });

const mapDispatchToProps = (dispatch: Dispatch) => ({
    viewPrivacyPolicy: () => dispatch(viewPrivacyPolicy()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FooterText);
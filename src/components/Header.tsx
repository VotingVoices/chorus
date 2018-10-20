import * as React from 'react';
import { Button } from 'react-bootstrap';
import { connect} from 'react-redux';
import { Dispatch } from 'redux';

import { IQuestionnaireState, recordContact, recordDonate } from '../store';
import { StringId } from '../strings';

import '../App.css';
import './Header.css';
import vvlogo from './vvlogo.png';

interface IPropsFromState {
	getString: (id: StringId) => string,
}

interface IPropsFromDispatch {
	recordContact: typeof recordContact,
	recordDonate: typeof recordDonate,
}

class Header extends React.Component<IPropsFromState & IPropsFromDispatch, any> {
	public render() {
		return (
			<div>
				<div className="vv-page-header">
					<div className="header-logo">
						<a href="#/LandingPage"><img className="vv-header-img" src={vvlogo} /></a>
					</div>
					<div className="vv-dropdown-menu">
						<Button type="button">Stuff</Button>
						<div className="right-buttons vv-dropdown-content">
							<Button type="button" className="vv-button contact-about-button" href="mailto:info@votingvoices.org" onClick={this._onContactClick}>{this.props.getString(StringId.Contact)}</Button>
							<Button type="button" className="vv-button vv-button-filled-in-header" href="https://pages.donately.com/votingvoices/donate" target="_blank" onClick={this._onDonateClick}>{this.props.getString(StringId.Donate)}</Button>
						</div>
					</div>
				</div>

				<div className="deadline-banner VotingVoices-sans-serif" dangerouslySetInnerHTML={{__html: this.props.getString(StringId.DeadlineBannerMarkup)}} />
			</div>
		);
	}

	private _onContactClick = (ev: React.MouseEvent<Button>) => {
		this.props.recordContact();
	}

	private _onDonateClick = (ev: React.MouseEvent<Button>) => {
		this.props.recordDonate();
	}
}

const mapStateToProps = (state: IQuestionnaireState) => ({
	getString: state.getString,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	recordContact: () => dispatch(recordContact()),
	recordDonate: () => dispatch(recordDonate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
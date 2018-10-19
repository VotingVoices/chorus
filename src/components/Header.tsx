import * as React from 'react';
import { Button } from 'react-bootstrap';
import { connect} from 'react-redux';

import { IQuestionnaireState } from '../store';
import { StringId } from '../strings';

import '../App.css';
import './Header.css';
import vvlogo from './vvlogo.png';

interface IPropsFromState {
	getString: (id: StringId) => string,
}

class Header extends React.Component<IPropsFromState, any> {
	public render() {
		return (
			<div>
				<div className="vv-page-header">
					<div className="header-logo">
						<a href="#/LandingPage"><img src={vvlogo} /></a>
					</div>
					<div className="right-buttons">
						<Button type="button" className="vv-button contact-about-button" href="mailto:info@votingvoices.org">{this.props.getString(StringId.Contact)}</Button>
					</div>
				</div>

				<div className="deadline-banner VotingVoices-sans-serif" dangerouslySetInnerHTML={{__html: this.props.getString(StringId.DeadlineBannerMarkup)}} />
			</div>
		);
	}
}

const mapStateToProps = (state: IQuestionnaireState) => ({
	getString: state.getString,
});

export default connect(mapStateToProps)(Header);
import * as React from 'react';
import { Button } from 'react-bootstrap';
import { connect} from 'react-redux';

import { default as ContactButton } from './ContactButton';
import { default as DonateButton } from './DonateButton';
import { IConnectedReduxProps, IQuestionnaireState, } from '../store';
import { StringId } from '../strings';

import '../App.css';
import './Header.css';
import vvlogo from './vvlogo.png';

interface IPropsFromState {
	getString: (id: StringId) => string,
}

class Header extends React.Component<IPropsFromState & IConnectedReduxProps, any> {
	public render() {
		return (
			<div>
				<div className="vv-page-header">
					<div className="header-logo">
						<a href="#/LandingPage"><img className="vv-header-img" src={vvlogo} /></a>
					</div>

					<div className="right-buttons">
						<ContactButton {...this.props} />
						<DonateButton {...this.props} />
					</div>

					<div className="header-expando-container">
						<Button type="button" className="header-expando">Stuff</Button>
					</div>
				</div>

				<div className="expando-content">
					<ContactButton {...this.props} />
					<DonateButton {...this.props} />
				</div>

				<div className="header-gradient-separator" />

				<div className="deadline-banner VotingVoices-sans-serif" dangerouslySetInnerHTML={{__html: this.props.getString(StringId.DeadlineBannerMarkup)}} />
			</div>
		);
	}
}

const mapStateToProps = (state: IQuestionnaireState) => ({
	getString: state.getString,
});

export default connect(mapStateToProps)(Header);
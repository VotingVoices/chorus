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

enum ExpandoState {
	Collapsed,
	Expanded,
}

interface IHeaderState {
	expandoState: ExpandoState,
}

class Header extends React.Component<IPropsFromState & IConnectedReduxProps, IHeaderState> {
	public componentWillMount() {
		this.setState({ expandoState: ExpandoState.Collapsed });
	}

	public render() {
		const { expandoState } = this.state;

		const expandoContentStyle: React.CSSProperties = expandoState === ExpandoState.Expanded ? {} : {display: "none"};
		const expandoGlyphIconName = expandoState === ExpandoState.Expanded ? "glyphicon-chevron-up" : "glyphicon-chevron-down";
		
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

					<div className="header-expando">
						<Button type="button" className={`contact-about-button glyphicon ${expandoGlyphIconName}`} onClick={this._onExpandoClick} />
					</div>
				</div>

				<div className="expando-content" style={expandoContentStyle}>
					<ContactButton {...this.props} />
					<DonateButton {...this.props} />
				</div>

				<div className="header-gradient-separator" />

				<div className="deadline-banner VotingVoices-sans-serif" dangerouslySetInnerHTML={{__html: this.props.getString(StringId.DeadlineBannerMarkup)}} />
			</div>
		);
	}

	private _onExpandoClick = (ev: React.MouseEvent<Button>) => {
		const { expandoState } = this.state;

		if (expandoState === ExpandoState.Collapsed) {
			this.setState({ expandoState: ExpandoState.Expanded });
		}
		else {
			this.setState({ expandoState: ExpandoState.Collapsed });
		}
	}
}

const mapStateToProps = (state: IQuestionnaireState) => ({
	getString: state.getString,
});

export default connect(mapStateToProps)(Header);
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Button } from 'react-bootstrap';

import { default as FooterText } from './FooterText';
import { IConnectedReduxProps, /*IQuestionnaireState,*/ LanguageId, setLanguage } from '../store';

import vvlogo_w from './vvlogo_w.png';

interface IPropsFromDispatch {
	setLanguage: typeof setLanguage,
}

class Footer extends React.Component<IConnectedReduxProps & IPropsFromDispatch> {
	public render() {
		return (
			<div className="vv-page-footer VotingVoices-serif">
				<Button type="button" onClick={this._onEnglishClick}>English</Button><Button type="button" onClick={this._onSpanishClick}>Español</Button>
				<FooterText {...this.props} />
				<div className="footer-logo"><img src={vvlogo_w} /></div>
			</div>
		);
	}

	private _onEnglishClick = (ev: React.MouseEvent<Button>) => {
		this.props.setLanguage(LanguageId.English);
	}

	private _onSpanishClick = (ev: React.MouseEvent<Button>) => {
		this.props.setLanguage(LanguageId.Spanish);
	}
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	setLanguage: (language: LanguageId) => dispatch(setLanguage(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
import * as React from 'react';
import { connect} from 'react-redux';

import { default as FooterText } from './FooterText';
import { default as LanguageButton } from './LanguageButton';
import { IConnectedReduxProps, IQuestionnaireState, LanguageId } from '../store';
import { StringId } from '../strings';

import '../App.css';
import './Footer.css';
import vvlogo_w from './vvlogo_w.png';

interface IPropsFromState {
	getString: (id: StringId) => string,
}

class Footer extends React.Component<IPropsFromState & IConnectedReduxProps> {
	public render() {
		return (
			<div className="vv-page-footer VotingVoices-serif">
				<span className="VotingVoices-sans-serif language-label">{ this.props.getString(StringId.LanguageColon) }</span>

				<LanguageButton {...this.props} language={LanguageId.English} languageName="English" />
				<LanguageButton {...this.props} language={LanguageId.Spanish} languageName="Español" />

				<FooterText {...this.props} />

				<div className="footer-logo"><img src={vvlogo_w} /></div>
			</div>
		);
	}
}

const mapStateToProps = (state: IQuestionnaireState) => ({
	getString: state.getString,
});

export default connect(mapStateToProps)(Footer);
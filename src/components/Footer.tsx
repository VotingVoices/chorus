import * as React from 'react';

import { default as FooterText } from './FooterText';
import { default as LanguageButton } from './LanguageButton';
import { IConnectedReduxProps, /*IQuestionnaireState,*/ LanguageId } from '../store';

import '../App.css';
import vvlogo_w from './vvlogo_w.png';

export class Footer extends React.Component<IConnectedReduxProps> {
	public render() {
		return (
			<div className="vv-page-footer VotingVoices-serif">
				<LanguageButton {...this.props} language={LanguageId.English} languageName="English" />
				<LanguageButton {...this.props} language={LanguageId.Spanish} languageName="Español" />

				<FooterText {...this.props} />

				<div className="footer-logo"><img src={vvlogo_w} /></div>
			</div>
		);
	}
}
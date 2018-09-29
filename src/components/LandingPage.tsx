import * as React from 'react';

import { IConnectedReduxProps } from '../store';

import '../App.css';
import { StartOverButton } from './StartOverButton';

class InternalLandingPage extends React.Component<IConnectedReduxProps, any> {
	public render(): JSX.Element {
		return (
            <header className="App-header">
                <h1 className="App-title">Voting Voices</h1>
                <StartOverButton {...this.props} />
            </header>
		);
	}
}

export const LandingPage = InternalLandingPage;
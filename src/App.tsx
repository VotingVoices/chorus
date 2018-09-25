import * as React from 'react';
import { connect } from 'react-redux';

import './App.css';
import { Plan } from './components/Plan';
import { Questionnaire } from './components/Questionnaire';
import { AppView, IConnectedReduxProps, IQuestionnaireState } from './store';

interface IPropsFromState {
	currentView: AppView,
}

class App extends React.Component<IConnectedReduxProps & IPropsFromState> {
	public render() {
		const { currentView } = this.props;

		switch (currentView) {
			case AppView.Questionnaire: {
				return (<Questionnaire {...this.props} />);
			}

			case AppView.Plan: {
				return (<Plan {...this.props} />);
			}
		}
	}
}

const mapStateToProps = (state: IQuestionnaireState) => ({
	currentView: state.currentView,
})

export default connect(mapStateToProps)(App);
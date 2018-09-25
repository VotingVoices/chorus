import * as React from 'react';
import * as ReactCSSTransitionReplace from 'react-css-transition-replace';
import { connect } from 'react-redux';

import './App.css';
import { Plan } from './components/Plan';
import { Questionnaire } from './components/Questionnaire';
import { AppView, IConnectedReduxProps, IQuestionAndAnswer, IQuestionnaireState } from './store';

interface IPropsFromState {
	currentView: AppView,
	answers: IQuestionAndAnswer[],
}

class App extends React.Component<IConnectedReduxProps & IPropsFromState> {
	public render(): JSX.Element {
		return (
			<ReactCSSTransitionReplace
				transitionName="carousel-cross-fade"
				transitionEnterTimeout={1000}
				transitionLeaveTimeout={400} >
				{this.renderViewSpecificContent()}
			</ReactCSSTransitionReplace>
		);
	}

	private renderViewSpecificContent(): JSX.Element {
		const { currentView } = this.props;

		switch (currentView) {
			case AppView.Questionnaire: {
				return (<Questionnaire key="questionnaire" {...this.props} />);
			}

			case AppView.Plan: {
				return (<Plan key="plan" answers={this.props.answers} />);
			}

			default: {
				throw new Error("Unrecognized AppView.");
			}
		}
	}
}

const mapStateToProps = (state: IQuestionnaireState) => ({
	currentView: state.currentView,
	answers: state.answers,
})

export default connect(mapStateToProps)(App);
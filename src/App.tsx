import * as React from 'react';
import * as ReactCSSTransitionReplace from 'react-css-transition-replace';
import { connect } from 'react-redux';

import './index.css';
import './App.css';
import { Plan, Survey, LandingPage, HeaderNavigationBar } from './components';
import { AppView, IConnectedReduxProps, IQuestionAndAnswer, IQuestionnaireState, VotingStateId } from './store';
import { getTransitionName } from './transitionNames';

interface IPropsFromState {
	currentView: AppView,
	answers: IQuestionAndAnswer[],
	votingStateId: VotingStateId,
	transitionName: string,
}

class App extends React.Component<IConnectedReduxProps & IPropsFromState> {
	public render(): JSX.Element {
		return (
			<div className="App">	
				<HeaderNavigationBar />
				<ReactCSSTransitionReplace
					transitionName={this.props.transitionName}
					transitionEnterTimeout={1000}
					transitionLeaveTimeout={400} >
					{this.renderViewSpecificContent()}
				</ReactCSSTransitionReplace>
				<div>Donations</div>
				<div>Footer / Logo / Legal?</div>
			</div>
		);
	}

	private renderViewSpecificContent(): JSX.Element {
		const { currentView } = this.props;

		switch (currentView) {
			case AppView.LandingPage: {
				return (<LandingPage key="landingPage" {...this.props} />);
			}
			case AppView.Questionnaire: {
				return (<Survey key="survey" {...this.props} />);
			}

			case AppView.Plan: {
				return (<Plan key="plan" answers={this.props.answers} votingStateId={this.props.votingStateId} />);
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
	votingStateId: state.votingStateId,
	transitionName: getTransitionName(state.mostRecentTransition),
})

export default connect(mapStateToProps)(App);
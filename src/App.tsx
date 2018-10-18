import * as React from 'react';
import { connect } from 'react-redux';
import * as ReactCSSTransitionReplace from 'react-css-transition-replace';

import './index.css';
import './App.css';
import { Footer, Header, LandingPage, Plan, PrivacyPolicy, Survey } from './components';
import { AppView, IConnectedReduxProps, IQuestionAndAnswer, IQuestionnaireState, VotingStateId } from './store';
import { getTransitionStyleInfo } from './transitionNames';

interface IPropsFromState {
	currentView: AppView,
	answers: IQuestionAndAnswer[],
	votingStateId: VotingStateId,
	transitionName: string,
	enableTransitionAnimation: boolean,
}

class App extends React.Component<IConnectedReduxProps & IPropsFromState> {
	public render(): JSX.Element {
		return (
			<div className="App root-grid">
				<Header />

				<ReactCSSTransitionReplace
					transitionEnter={this.props.enableTransitionAnimation}
					transitionLeave={this.props.enableTransitionAnimation}
					transitionName={this.props.transitionName}
					transitionEnterTimeout={1000}
					transitionLeaveTimeout={400} >
					{this.renderViewSpecificContent()}
				</ReactCSSTransitionReplace>

				<Footer {...this.props} />
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
				return (<Plan key="plan" {...this.props} answers={this.props.answers} votingStateId={this.props.votingStateId} />);
			}

			case AppView.PrivacyPolicy: {
				return (<PrivacyPolicy key="privacy-policy" {...this.props} />);
			}

			default: {
				throw new Error("Unrecognized AppView.");
			}
		}
	}
}

const mapStateToProps = (state: IQuestionnaireState) => {
	const { enable: enableTransitionAnimation, transitionName } = getTransitionStyleInfo(state.mostRecentTransition);

	return {
		currentView: state.currentView,
		answers: state.answers,
		votingStateId: state.votingStateId,
		transitionName: transitionName !== undefined ? transitionName! : "",
		enableTransitionAnimation,
	};
}

export default connect(mapStateToProps)(App);
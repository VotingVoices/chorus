import * as React from 'react';
import { Button } from 'react-bootstrap';
import * as ReactCSSTransitionReplace from 'react-css-transition-replace';
import { connect } from 'react-redux';

import './index.css';
import './App.css';
import { Plan, Survey, LandingPage } from './components';
import { AppView, IConnectedReduxProps, IQuestionAndAnswer, IQuestionnaireState, VotingStateId } from './store';
import { getTransitionName } from './transitionNames';

import vvlogo from './components/vvlogo.png'

interface IPropsFromState {
	currentView: AppView,
	answers: IQuestionAndAnswer[],
	votingStateId: VotingStateId,
	transitionName: string,
}

class App extends React.Component<IConnectedReduxProps & IPropsFromState> {
	public render(): JSX.Element {
		return (
			<div className="App root-grid">
				<div className="vv-page-header">
					<div className="header-logo">
						<a href="#/LandingPage"><img src={vvlogo} /></a>
					</div>
					<div className="right-buttons">
						<Button type="button" className="vv-button contact-about-button">Contact</Button>
					</div>
				</div>

				<ReactCSSTransitionReplace
					transitionName={this.props.transitionName}
					transitionEnterTimeout={1000}
					transitionLeaveTimeout={400} >
					{this.renderViewSpecificContent()}
				</ReactCSSTransitionReplace>

				<div className="vv-page-footer VotingVoices-serif">
					<span className="footer-text">&copy;2018 Voting Voices.  All rights reserved.</span>
				</div>
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
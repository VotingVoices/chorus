import * as React from 'react';
import { Button } from 'react-bootstrap';
import * as ReactCSSTransitionReplace from 'react-css-transition-replace';
import { connect } from 'react-redux';

import './index.css';
import './App.css';
import { FooterText, LandingPage, Plan, PrivacyPolicy, Survey } from './components';
import { AppView, IConnectedReduxProps, IQuestionAndAnswer, IQuestionnaireState, VotingStateId } from './store';
import { getTransitionStyleInfo } from './transitionNames';

import vvlogo from './components/vvlogo.png';
import vvlogo_w from './components/vvlogo_w.png';

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
				<div className="vv-page-header">
					<div className="header-logo">
						<a href="#/LandingPage"><img src={vvlogo} /></a>
					</div>
					<div className="right-buttons">
						<Button type="button" className="vv-button contact-about-button">Contact</Button>
					</div>
				</div>

				<ReactCSSTransitionReplace
					transitionEnter={this.props.enableTransitionAnimation}
					transitionLeave={this.props.enableTransitionAnimation}
					transitionName={this.props.transitionName}
					transitionEnterTimeout={1000}
					transitionLeaveTimeout={400} >
					{this.renderViewSpecificContent()}
				</ReactCSSTransitionReplace>

				<div className="vv-page-footer VotingVoices-serif">
					<FooterText {...this.props} />
					<div className="footer-logo"><img src={vvlogo_w} /></div>
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
				return (<Plan key="plan" {...this.props} answers={this.props.answers} votingStateId={this.props.votingStateId} />);
			}

			case AppView.PrivacyPolicy: {
				return (<PrivacyPolicy key="privacy-policy" />);
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
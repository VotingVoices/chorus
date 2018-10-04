import * as React from 'react';
import { Button } from 'react-bootstrap';
import { connect} from 'react-redux';
import { Dispatch } from 'redux';
import { IConnectedReduxProps, startSurvey } from '../store';

import '../App.css';
import './LandingPage.css';
import poweredbyVV from './poweredbyVV.png';

interface IPropsFromDispatch {
	startSurvey: typeof startSurvey,
}

class InternalLandingPage extends React.Component<IConnectedReduxProps & IPropsFromDispatch, any> {
	public render(): JSX.Element {
		return (
            <div className="landing-page-header Gradient-background">
                <h1 className="voteplan-title landing-page-title">VotePlan</h1>
                <img src={poweredbyVV} />
                <div className="landing-page-slogan VotingVoices-serif">Plan your vote, invite others, and get ready!</div>
                <Button type="button" className="vv-button start-plan-button" onClick={this.onStartClick()}>Start Your Plan</Button>
            </div>
		);
	}

	private onStartClick() {
		return (ev: React.MouseEvent<Button>) => {
			this.props.startSurvey();
		};
	}
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    startSurvey: () => dispatch(startSurvey())
});

export const LandingPage = connect(mapStateToProps, mapDispatchToProps)(InternalLandingPage);
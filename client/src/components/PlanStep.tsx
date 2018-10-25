import * as React from 'react';
import { connect} from 'react-redux';
import { IIndexHolder } from './PlanBody';
import { IConnectedReduxProps, IQuestionnaireState, PlanStepId, VotingStateId } from '../store';
import { getPlanStepStrings, StringId } from '../strings';
import { default as CallToAction } from './CallToAction';

import plan_circle_on from './plan_circle_on.png';

import './PlanStep.css';
import BallotReady from './ballotready.jpg';

interface IPlanStepProps {
	indexHolder: IIndexHolder,
	planStepId: PlanStepId,
	votingStateId: VotingStateId,
	callToAction?: JSX.Element;
}

interface IPropsFromState {
    getString: (id: StringId) => string;
}

class PlanStep extends React.Component<IPlanStepProps & IPropsFromState & IConnectedReduxProps, any> {
	public render() {
		const { indexHolder, planStepId, votingStateId } = this.props;

		const { header, text, callToAction : callToActionLabel, link } = getPlanStepStrings(planStepId, votingStateId);

		const fullHeaderString = this.props.getString(StringId.PlanStepHeader)
			.replace(/{NUMBER}/, () => `${(indexHolder.index + 1)}`)
			.replace(/{HEADER}/, this.props.getString(header));

		// Increment the index holder so that the next plan step uses the next number.
		indexHolder.index++;
		
		return (
			<div key={planStepId}>
				<div className="plan-step-header VotingVoices-sans-serif">{this.checkboxElement()}{fullHeaderString}</div>
				<div className="plan-step-text VotingVoices-serif" dangerouslySetInnerHTML={ { __html: this.props.getString(text)} } />

				{ this.getCallToAction(callToActionLabel, link) }
			</div>
		);
	}

	private getCallToAction = (callToActionLabel?: StringId, link?: StringId): JSX.Element => {
		if (this.showBallotReady(this.props.planStepId)) {
			return this.ballotReadyWidget(callToActionLabel, link);
		}
		else if (this.props.callToAction)
		{
			return this.props.callToAction!;
		}
		return <CallToAction {...this.props} callToAction={callToActionLabel} link={link} />
	}

	private checkboxElement(): JSX.Element {
		return <img className="plan-step-checkbox" src={plan_circle_on} />
	}

	private showBallotReady(planStepId: PlanStepId) {
		return (planStepId === PlanStepId.ResearchBallotIssues || planStepId === PlanStepId.ReviewBallotIssues);
	}

	private ballotReadyWidget(callToAction: StringId | undefined, link: StringId | undefined): JSX.Element {
		return (
			<React.Fragment>
				<div>
					<img className="ballotReady-img" src={BallotReady} />
				</div>

				<div className="plan-step-text VotingVoices-serif" dangerouslySetInnerHTML={ { __html: this.props.getString(StringId.BallotReadySecondaryDescription)} } />

				<iframe className="ballotReady-widget" style={ { backgroundColor: "transparent", border: "none", overflow: "hidden" } } scrolling="no" src="https://www2.ballotready.org/widget/address_search" width="100%">
					<CallToAction {...this.props} callToAction={callToAction} link={link} />
				</iframe>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state: IQuestionnaireState) => ({
    getString: state.getString,
});

export default connect(mapStateToProps)(PlanStep);
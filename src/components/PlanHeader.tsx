import * as React from 'react';
import { StringId } from '../strings';
import { connect } from 'react-redux';
import { IQuestionnaireState, IConnectedReduxProps } from '../store';
import './Plan.css';

interface IPropsFromState {
	getString: (id: StringId) => string;
}

export class PlanHeader extends React.Component<IPropsFromState & IConnectedReduxProps, any> {

	public render(): JSX.Element {
		const subHeaderText = this.props.getString(StringId.PlanPageSubheader);

		return (
			<div className="Plan-header">
				<h1 className="voteplan-title">VotePlan</h1>
				<div className="plan-sub-header-text VotingVoices-serif">{subHeaderText}</div>
			</div>
		);
	}

}

const mapStateToProps = (state: IQuestionnaireState) => ({
	getString: state.getString,
});

export default connect(mapStateToProps)(PlanHeader);
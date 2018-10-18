import * as React from 'react';
import { Dispatch } from 'redux';
import { connect} from 'react-redux';
import { IConnectedReduxProps, recordCallToAction, IQuestionnaireState } from '../store';
import { StringId } from '../strings';

interface ICallToActionProps {
	callToAction: StringId | undefined,
	link: StringId | undefined,
}

interface IPropsFromState {
	getString: (id: StringId) => string;
}

interface IPropsFromDispatch {
	recordCallToAction: typeof recordCallToAction,
}

class CallToAction extends React.Component<ICallToActionProps & IPropsFromState & IPropsFromDispatch & IConnectedReduxProps, any> {
	public render(): JSX.Element {
		const { callToAction, link } = this.props;
		
		if (callToAction !== undefined && link !== undefined) {
			return <div className="plan-step-call-to-action VotingVoices-sans-serif"><a href={this.props.getString(link!)} target="_blank" onClick={this.linkClicked()}>{this.props.getString(callToAction!)}</a></div>
		}
		else {
			return <React.Fragment />
		}
	}

	private linkClicked = () => {
		return (ev: React.MouseEvent<HTMLElement | HTMLInputElement>) => {
			const { link } = this.props;
			this.props.recordCallToAction(this.props.getString(link!));
		};
	}
}

const mapStateToProps = (state: IQuestionnaireState) => ({
	getString: state.getString,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	recordCallToAction: (link: string) => dispatch(recordCallToAction(link)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CallToAction);
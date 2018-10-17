import * as React from 'react';
import { Dispatch } from 'redux';
import { connect} from 'react-redux';
import { IConnectedReduxProps, recordCallToAction } from '../store';
import { getString, StringId } from '../strings';

interface ICallToActionProps {
	callToAction: StringId | undefined,
	link: StringId | undefined,
}

interface IPropsFromDispatch {
	recordCallToAction: typeof recordCallToAction,
}

class CallToAction extends React.Component<ICallToActionProps & IPropsFromDispatch & IConnectedReduxProps, any> {
	public render(): JSX.Element {
		const { callToAction, link } = this.props;
		
		if (callToAction !== undefined && link !== undefined) {
			return <div className="plan-step-call-to-action VotingVoices-sans-serif"><a href={getString(link!)} target="_blank" onClick={this.linkClicked()}>{getString(callToAction!)}</a></div>
		}
		else {
			return <React.Fragment />
		}
	}

	private linkClicked = () => {
		return (ev: React.MouseEvent<HTMLElement | HTMLInputElement>) => {
			const { link } = this.props;
			this.props.recordCallToAction(getString(link!));
		};
	}
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	recordCallToAction: (link: string) => dispatch(recordCallToAction(link)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CallToAction);
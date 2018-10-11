import * as React from 'react';
import { Dispatch } from 'redux';
import { connect} from 'react-redux';
import { IConnectedReduxProps, recordCallToAction } from '../store';

interface ICallToActionProps {
	callToAction: string | undefined,
	link: string | undefined,
}

interface IPropsFromDispatch {
	recordCallToAction: typeof recordCallToAction,
}

class InternalCallToAction extends React.Component<ICallToActionProps & IPropsFromDispatch & IConnectedReduxProps, any> {
	public render(): JSX.Element {
		const { callToAction, link } = this.props;
		
		if (callToAction !== undefined && link !== undefined) {
			return <div className="plan-step-call-to-action VotingVoices-sans-serif"><a href={link!} target="_blank" onClick={this.linkClicked()}>{callToAction!}</a></div>
		}
		else {
			return <React.Fragment />
		}
	}

	private linkClicked = () => {
		return (ev: React.MouseEvent<HTMLElement | HTMLInputElement>) => {
			const { link } = this.props;
			this.props.recordCallToAction(link!);
		};
	}
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	recordCallToAction: (link: string) => dispatch(recordCallToAction(link)),
});

export const CallToAction = connect(mapStateToProps, mapDispatchToProps)(InternalCallToAction);
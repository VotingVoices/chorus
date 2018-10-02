import * as React from 'react';
import { Button } from 'react-bootstrap';
import { connect} from 'react-redux';
import { Dispatch } from 'redux';
import { IConnectedReduxProps, startOver } from '../store';

interface IPropsFromDispatch {
	startOver: typeof startOver,
}

class InternalStartOverButton extends React.Component<IConnectedReduxProps & IPropsFromDispatch, any> {
	public render(): JSX.Element {
		return (
			<Button type="button" className="VotingVoices-button" onClick={this.onStartOverClick()}>Start Over</Button>
		);
	}

	private onStartOverClick() {
		return (ev: React.MouseEvent<Button>) => {
			this.props.startOver();
		};
	}
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    startOver: () => dispatch(startOver())
});

export const StartOverButton = connect(mapStateToProps, mapDispatchToProps)(InternalStartOverButton);
import * as React from 'react';
import { Button } from 'react-bootstrap';
import { connect} from 'react-redux';
import { Dispatch } from 'redux';
import { IConnectedReduxProps, startOver } from '../store';

import '../App.css';

export enum StartOverButtonType {
	Outline,
	Filled,
}

interface IStartOverButtonProps {
	type: StartOverButtonType,
}

interface IPropsFromDispatch {
	startOver: typeof startOver,
}

class StartOverButton extends React.Component<IStartOverButtonProps & IConnectedReduxProps & IPropsFromDispatch, any> {
	public render(): JSX.Element {
		const { type } = this.props;

		const startOverClassName = type === StartOverButtonType.Outline ? "vv-button-outline" : "vv-button-filled vv-button-large";
		const className = `vv-button ${startOverClassName} start-over-button`;

		return (
			<Button type="button" className={className} onClick={this.onStartOverClick()}>Start Over</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(StartOverButton);
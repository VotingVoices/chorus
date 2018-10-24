import * as React from 'react';
import { Button } from 'react-bootstrap';
import { connect} from 'react-redux';
import { Dispatch } from 'redux';
import { IConnectedReduxProps, IQuestionnaireState, startOver } from '../store';
import { StringId } from '../strings';

import '../App.css';

export enum StartOverButtonType {
	Outline,
	Filled,
}

interface IPropsFromState {
	getString: (id: StringId) => string;
}

interface IStartOverButtonProps {
	type: StartOverButtonType,
}

interface IPropsFromDispatch {
	startOver: typeof startOver,
}

class StartOverButton extends React.Component<IStartOverButtonProps & IConnectedReduxProps & IPropsFromState & IPropsFromDispatch, any> {
	public render(): JSX.Element {
		const { type } = this.props;

		const startOverClassName = type === StartOverButtonType.Outline ? "vv-button-outline" : "";
		const className = `vv-button ${startOverClassName} start-over-button`;

		return (
			<Button type="button" className={className} onClick={this.onStartOverClick()}>{this.props.getString(StringId.StartOver)}</Button>
		);
	}

	private onStartOverClick() {
		return (ev: React.MouseEvent<Button>) => {
			this.props.startOver();
		};
	}
}

const mapStateToProps = (state: IQuestionnaireState) => ({
	getString: state.getString,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    startOver: () => dispatch(startOver())
});

export default connect(mapStateToProps, mapDispatchToProps)(StartOverButton);
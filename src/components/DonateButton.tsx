import * as React from 'react';
import { Button } from 'react-bootstrap';
import { connect} from 'react-redux';
import { Dispatch } from 'redux';

import { IQuestionnaireState, recordDonate } from '../store';
import { StringId } from '../strings';

interface IPropsFromState {
	getString: (id: StringId) => string,
}

interface IPropsFromDispatch {
	recordDonate: typeof recordDonate,
}

class DonateButton extends React.Component<IPropsFromState & IPropsFromDispatch, any> {
	public render() {
		return (
			<Button
				type="button"
				className="vv-button vv-button-filled-in-header"
				href="https://pages.donately.com/votingvoices/donate"
				target="_blank"
				onClick={this._onClick}>{this.props.getString(StringId.Donate)}
			</Button>
		);
	}

	private _onClick = (ev: React.MouseEvent<Button>) => {
		this.props.recordDonate();
	}
}

const mapStateToProps = (state: IQuestionnaireState) => ({
	getString: state.getString,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	recordDonate: () => dispatch(recordDonate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DonateButton);
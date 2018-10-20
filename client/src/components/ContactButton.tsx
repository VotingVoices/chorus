import * as React from 'react';
import { Button } from 'react-bootstrap';
import { connect} from 'react-redux';
import { Dispatch } from 'redux';

import { IQuestionnaireState, recordContact } from '../store';
import { StringId } from '../strings';

interface IPropsFromState {
	getString: (id: StringId) => string,
}

interface IPropsFromDispatch {
	recordContact: typeof recordContact,
}

class ContactButton extends React.Component<IPropsFromState & IPropsFromDispatch, any> {
	public render() {
		return (
			<Button
				type="button"
				className="vv-button contact-about-button"
				href="mailto:info@votingvoices.org"
				onClick={this._onClick}>{this.props.getString(StringId.Contact)}
			</Button>
		);
	}

	private _onClick = (ev: React.MouseEvent<Button>) => {
		this.props.recordContact();
	}
}

const mapStateToProps = (state: IQuestionnaireState) => ({
	getString: state.getString,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	recordContact: () => dispatch(recordContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactButton);
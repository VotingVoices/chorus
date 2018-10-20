import * as React from 'react';
import { connect} from 'react-redux';
import { Dispatch } from 'redux';

import { IQuestionnaireState, viewPrivacyPolicy } from '../store';
import { StringId } from '../strings';

import './FooterText.css';

interface IPropsFromState {
	getString: (id: StringId) => string,
}

interface IPropsFromDispatch {
    viewPrivacyPolicy: typeof viewPrivacyPolicy,
}

class FooterText extends React.Component<IPropsFromState & IPropsFromDispatch, any> {
	public render() {
		return (
			<div className="footer-text">{this.props.getString(StringId.CopyrightPrePrivacyPolicy)}<a onClick={this._onPrivacyPolicyClick} style={{cursor: "pointer"}}>{this.props.getString(StringId.PrivacyPolicy)}</a>{this.props.getString(StringId.CopyrightPostPrivacyPolicy)}</div>
		);
	}

	private _onPrivacyPolicyClick = (ev: React.MouseEvent<HTMLElement>) => {
		this.props.viewPrivacyPolicy();
	}
}

const mapStateToProps = (state: IQuestionnaireState) => ({
	getString: state.getString,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    viewPrivacyPolicy: () => dispatch(viewPrivacyPolicy()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FooterText);
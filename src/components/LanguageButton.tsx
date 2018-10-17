import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Button } from 'react-bootstrap';

import { IQuestionnaireState, LanguageId, setLanguage } from '../store';

interface ILanguageButtonProps {
	language: LanguageId,
	languageName: string,
}

interface IPropsFromState {
	currentLanguage: string,
}

interface IPropsFromDispatch {
	setLanguage: typeof setLanguage,
}

class LanguageButton extends React.Component<ILanguageButtonProps & IPropsFromState & IPropsFromDispatch> {
	public render() {
		const style: React.CSSProperties = this.props.currentLanguage === this.props.language ? { fontWeight: "bold" } : { }

		return (
			<Button type="button" style={style} onClick={this._onClick}>{this.props.languageName}</Button>
		);
	}

	private _onClick = (ev: React.MouseEvent<Button>) => {
		this.props.setLanguage(this.props.language);
	}
}

const mapStateToProps = (state: IQuestionnaireState) => ({
	currentLanguage: state.currentLanguage,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	setLanguage: (language: LanguageId) => dispatch(setLanguage(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageButton);
import * as React from 'react';
import { Dispatch } from 'redux';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { ShareWidgets, ShareWidgetSize } from './ShareWidgets';
import { copyLinkToClipboard, IConnectedReduxProps, IQuestionnaireState, LanguageId, recordSaveButton, sendPlanEmail } from '../store';
import { StringId }from '../strings';

import './SaveAndInviteControls.css';

export enum SaveAndInviteControlsFlavor {
	SaveAndInvite,
	JustSave,
}

interface ISaveAndInviteControlsProps {
	flavor: SaveAndInviteControlsFlavor,
}

interface IPropsFromState {
	currentLanguage: LanguageId,
    getString: (id: StringId) => string,
}

interface IPropsFromDispatch {
	recordSaveButton: typeof recordSaveButton,
	sendPlanEmail: typeof sendPlanEmail,
	copyLinkToClipboard: typeof copyLinkToClipboard,
}

enum SavePaneExpandState {
	Collapsed,
	Expanded,
}

interface ISavePaneState {
	expandState: SavePaneExpandState,
	emailAddress: string,
	sendButtonEnabled: boolean,
	confirmationEmailAddress: string | undefined,
}

function isValidEmailAddress(emailAddress: string): boolean {
	// https://stackoverflow.com/questions/46370725/how-to-do-email-validation-using-regular-expression-in-typescript
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailAddress);
}

class SaveAndInviteControls extends React.Component<ISaveAndInviteControlsProps & IPropsFromState & IPropsFromDispatch & IConnectedReduxProps, ISavePaneState> {
	private emailAddressInput: HTMLInputElement | null;

	public componentWillMount() {
		this.setState({
			expandState: SavePaneExpandState.Collapsed,
			sendButtonEnabled: false,
			confirmationEmailAddress: undefined,
		});
	}

	public render() {
		const { flavor } = this.props;
		const { expandState: savePaneExpandState, sendButtonEnabled, confirmationEmailAddress } = this.state;

		const saveButtonClassName = flavor === SaveAndInviteControlsFlavor.JustSave ? "vv-button vv-button-filled vv-button-large save-button-large" : "vv-button save-button";
		const saveButtonLabelStringId = flavor === SaveAndInviteControlsFlavor.JustSave ? StringId.SaveYourPlan : StringId.Save;

		const savePaneStyle: React.CSSProperties = savePaneExpandState === SavePaneExpandState.Expanded ? {} : {display: "none"};
		const emailConfirmationStyle: React.CSSProperties = confirmationEmailAddress !== undefined ? {} : {display: "none"};
		
		return (
			<React.Fragment>
				<div className="plan-save-and-invite">
					<div className="plan-save-and-invite-2">
						<div className="plan-save">
							<Button type="button" className={saveButtonClassName} onClick={this._onSaveClick}>{this.props.getString(saveButtonLabelStringId)}</Button>
						</div>

						{
							flavor === SaveAndInviteControlsFlavor.SaveAndInvite ? (
								<div className="plan-invite-people">
									<div className="plan-invite-people-text">{this.props.getString(StringId.PlanPageInvitePeople)}</div>
									<div className="share-widget-container">
										<ShareWidgets size={ShareWidgetSize.Small} />
									</div>
								</div>
							) : (
								<React.Fragment />
							)
						}
					</div>
				</div>

				<div className="save-pane" style={savePaneStyle}>
					<div className="email-address-label VotingVoices-serif">
						{this.props.getString(StringId.SendYourselfALink)}
					</div>

					<div className="email-address-controls">
						<div className="email-address-text-box-container">
							<input
								type="text"
								className="vv-text-box email-address-text-box"
								placeholder={this.props.getString(StringId.EmailAddress)}
								onChange={this._onEmailAddressValueChange}
								ref={input => { this.emailAddressInput = input; }}/>
						</div>
						<div className="save-pane-buttons">
							<Button type="button" disabled={!sendButtonEnabled} className="vv-button vv-button-filled save-pane-button" onClick={this._onEmailSendClick}>{this.props.getString(StringId.Send)}</Button>
							<Button type="button" className="vv-button vv-button-outline save-pane-button copy-link-button" onClick={this._onCopyLinkClick}>{this.props.getString(StringId.CopyLink)}</Button>
						</div>
					</div>

					<div className="email-confirmation VotingVoices-serif" style={emailConfirmationStyle}>
						{this.props.getString(StringId.EmailConfirmationPreEmailAddress)}<strong>{confirmationEmailAddress!}</strong>{this.props.getString(StringId.EmailConfirmationPostEmailAddress)}
					</div>
				</div>
			</React.Fragment>
		)
	}

	private _onSaveClick = (ev: React.MouseEvent<Button>) => {
		this.props.recordSaveButton();

		const { expandState } = this.state;

		if (expandState === SavePaneExpandState.Collapsed) {
			this.setState({ expandState: SavePaneExpandState.Expanded });
		}
		else {
			this.setState({ expandState: SavePaneExpandState.Collapsed });
		}
	}

	private _onEmailAddressValueChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		const enabled = isValidEmailAddress(ev.target.value);

		this.setState({
			emailAddress: ev.target.value,
			sendButtonEnabled: enabled,
		});
	}

	private _onEmailSendClick = (ev: React.MouseEvent<Button>) => {
		this.props.sendPlanEmail(this.state.emailAddress);

		this.setState({
			confirmationEmailAddress: this.state.emailAddress,
		});

		if (this.emailAddressInput !== null) {
			this.emailAddressInput.value = "";
		}
	}

	private _onCopyLinkClick = (ev: React.MouseEvent<Button>) => {
		this.props.copyLinkToClipboard();
	}
}

const mapStateToProps = (state: IQuestionnaireState) => ({
	currentLanguage: state.currentLanguage,
	getString: state.getString,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	recordSaveButton: () => dispatch(recordSaveButton()),
	sendPlanEmail: (emailAddress: string) => dispatch(sendPlanEmail(emailAddress)),
	copyLinkToClipboard: () => dispatch(copyLinkToClipboard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SaveAndInviteControls);
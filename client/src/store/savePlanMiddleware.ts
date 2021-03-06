import { ActionType } from 'typesafe-actions';
import { Store } from 'redux';

import { getPlanPageQueryString } from './queryStringUtilities';
import { IQuestionnaireState, LanguageId, QuestionnaireActionType } from './Types';

import * as actions from './Actions';

type QuestionnaireAction = ActionType<typeof actions>;

// TODO: Don't use a 'dev' endpoint?
const SendEmailEndpoint = 'https://w2799uxd0h.execute-api.us-east-1.amazonaws.com/dev/sendplan';

// TODO: Share code with telemetry.ts?
function invokeSendEmailEndpoint(emailAddress: string, planPageQueryString: string, language: LanguageId) {
	fetch(SendEmailEndpoint, {
		method: "POST",
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ emailAddress, planPageQueryString, language })
	}).then(res => {
		if (res.ok) {
			return res.json();
		}
		else {
			throw new Error(`Failed HTTP response: ${res.status}`);
		}
	}).catch(err => {
		throw new Error(`Unable to POST to send-email endpoint.  err: ${err}`);
	});
}

function isIOS() {
	return navigator.userAgent.match(/ipad|iphone/i);
}

function copyCurrentLocationToClipboard() {
	// https://stackoverflow.com/questions/33855641/copy-output-of-a-javascript-variable-to-the-clipboard
	const url = window.location.href;
	const dummyInput = document.createElement("input");
	document.body.appendChild(dummyInput);
	dummyInput.setAttribute('value', url);
	dummyInput.setAttribute('readonly', 'readonly');

	if (isIOS()) {
		const range = document.createRange();
		range.selectNodeContents(dummyInput);
		const selection = window.getSelection();
		selection.removeAllRanges();
		selection.addRange(range);
		dummyInput.setSelectionRange(0, 999999);
	}
	else {
		dummyInput.select();
	}

	document.execCommand("copy");
	document.body.removeChild(dummyInput);
}

export const savePlanMiddleware = () => (store: Store<IQuestionnaireState>) => (next: any) => (action: QuestionnaireAction) => {
	switch (action.type) {
		case QuestionnaireActionType.SEND_PLAN_EMAIL: {
			invokeSendEmailEndpoint(action.payload.emailAddress, getPlanPageQueryString(store.getState()), store.getState().currentLanguage);
			return next(action);
		}
		case QuestionnaireActionType.COPY_LINK: {
			copyCurrentLocationToClipboard();
			return next(action);
		}
	}

	return next(action);
}
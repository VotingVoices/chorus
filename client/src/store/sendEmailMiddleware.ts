import { ActionType } from 'typesafe-actions';
import { Store } from 'redux';

import { getPlanPageQueryString } from './queryStringUtilities';
import { IQuestionnaireState, QuestionnaireActionType } from './Types';

import * as actions from './Actions';

type QuestionnaireAction = ActionType<typeof actions>;

// TODO: Don't use a 'dev' endpoint?
const SendEmailEndpoint = 'https://w2799uxd0h.execute-api.us-east-1.amazonaws.com/dev/sendplan';

// TODO: Share code with telemetry.ts?
function invokeSendEmailEndpoint(emailAddress: string, planPageQueryString: string) {
	fetch(SendEmailEndpoint, {
		method: "POST",
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ emailAddress, planPageQueryString })
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

export const sendEmailMiddleware = () => (store: Store<IQuestionnaireState>) => (next: any) => (action: QuestionnaireAction) => {
	switch (action.type) {
		case QuestionnaireActionType.SEND_PLAN_EMAIL: {
			invokeSendEmailEndpoint(action.payload.emailAddress, getPlanPageQueryString(store.getState()));
			return next(action);
		}
	}

	return next(action);
}
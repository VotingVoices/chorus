import { ActionType } from 'typesafe-actions';
import { TelemetryActionType } from './InternalTypes';
import { AnswerId, IQuestionAndAnswer, IZipCodeAnswer, LanguageId, QuestionnaireActionType, QuestionId } from './Types';

import * as actions from './Actions';

type QuestionnaireAction = ActionType<typeof actions>;

const TelemetryEndpoint = 'http://localhost:3001/';
// const TelemetryEndpoint = 'https://gpvz3vnswb.execute-api.us-west-2.amazonaws.com/Stage/SaveSurveyResult';

// Courtesy of 'broofa's answer in https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
function uuidv4() {
	return (`${1e7}${-1e3}${-4e3}${-8e3}${-1e11}`).replace(/[018]/g, c => {
		const i = parseInt(c, undefined);
		return (i ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> i / 4).toString(16)
	});
}

export class TelemetrySession {
	private sessionId: string;

	constructor() {
		this.sessionId = uuidv4();
	}

	public recordLandingPage() {
		this.uploadData({
			event: "LandingPage",
		});
	}

	public recordStartSurvey() {
		this.uploadData({
			event: "StartSurvey",
		});
	}

	public recordAnswer(questionId: QuestionId, answerId: AnswerId | IZipCodeAnswer) {
		this.uploadData({
			event: "Answer",
			question: questionId,
			answer: answerId,
		});
	}

	public recordPlanPage(answers: IQuestionAndAnswer[], language: LanguageId) {
		this.uploadData({
			event: "ViewPlan",
			answers: answers.map(qa => ({ question: qa.questionId, answer: qa.answer })),
			language,
		});
	}

	public recordCallToAction(link: string) {
		this.uploadData({
			event: "CallToActionClicked",
			link,
		});
	}

	public recordStartOver() {
		this.uploadData({
			event: "StartOver",
		});
	}

	public recordPrivacyPolicy() {
		this.uploadData({
			event: "PrivacyPolicy",
		});
	}

	public recordSetLanguage(language: LanguageId) {
		this.uploadData({
			event: "SetLanguage",
			language,
		});
	}

	public recordContact() {
		this.uploadData({
			event: "Contact",
		});
	}

	public recordDonate() {
		this.uploadData({
			event: "Donate",
		});
	}

	private uploadData(data: any) {
		// 'contact' is needs to be unique for every event.
		data.contact = uuidv4();
		data.sessionId = this.sessionId;
		
		fetch(TelemetryEndpoint, {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		}).then(res => {
			if (res.ok) {
				return res.json();
			}
			else {
				throw new Error(`Failed HTTP response: ${res.status}`);
			}
		}).catch(err => {
			throw new Error(`Unable to POST to elemetry endpoint.  err: ${err}`);
		});
	}
}

export function createTelemetrySession(): TelemetrySession {
	return new TelemetrySession();
}

export const telemetryMiddleware = (session: TelemetrySession) => () => (next: any) => (action: QuestionnaireAction) => {
	switch (action.type) {
		case TelemetryActionType.LANDING_PAGE: {
			session.recordLandingPage();
			break;
		}
		case TelemetryActionType.PLAN_PAGE: {
			session.recordPlanPage(action.payload.answers, action.payload.language);
			break;
		}
		case TelemetryActionType.CALL_TO_ACTION: {
			session.recordCallToAction(action.payload.link);
			break;
		}
		case TelemetryActionType.PRIVACY_POLICY: {
			session.recordPrivacyPolicy();
			break;
		}
		case TelemetryActionType.CONTACT: {
			session.recordContact();
			break;
		}
		case TelemetryActionType.DONATE: {
			session.recordDonate();
			break;
		}
		case QuestionnaireActionType.START_SURVEY: {
			session.recordStartSurvey();
			return next(action);
		}
		case QuestionnaireActionType.ANSWER_QUESTION: {
			session.recordAnswer(action.payload.questionId, action.payload.answer);
			return next(action);
		}
		case QuestionnaireActionType.START_OVER: {
			session.recordStartOver();
			return next(action);
		}
		case QuestionnaireActionType.SET_LANGUAGE: {
			session.recordSetLanguage(action.payload.language);
			return next(action);
		}
		default: {
			return next(action);
		}
	}
}
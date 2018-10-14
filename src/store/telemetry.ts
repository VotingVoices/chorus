import { ActionType } from 'typesafe-actions';
import { TelemetryActionType } from './InternalTypes';
import { AnswerId, IQuestionAndAnswer, QuestionnaireActionType, QuestionId } from './Types';

import * as actions from './Actions';

type QuestionnaireAction = ActionType<typeof actions>;

// const TelemetryEndpoint = 'http://localhost:3001/';
const TelemetryEndpoint = 'https://gpvz3vnswb.execute-api.us-west-2.amazonaws.com/Stage/SaveSurveyResult';

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

	public recordAnswer(questionId: QuestionId, answerId: AnswerId) {
		this.uploadData({
			event: "Answer",
			question: questionId,
			answer: answerId,
		});
	}

	public recordPlanPage(answers: IQuestionAndAnswer[]) {
		this.uploadData({
			event: "ViewPlan",
			answers: answers.map(qa => ({ question: qa.questionId, answer: qa.answerId })),
		});
	}

	public recordCallToAction(link: string) {
		this.uploadData({
			event: "CallToActionClicked",
			link
		});
	}

	public recordStartOver() {
		this.uploadData({
			event: "StartOver",
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
			// TODO: Do not throw for ship/production users.
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
			window.scrollTo(0, 0);		// TODO: Move this to a separate middleware
			session.recordPlanPage(action.payload.answers);
			break;
		}
		case TelemetryActionType.CALL_TO_ACTION: {
			session.recordCallToAction(action.payload.link);
			break;
		}
		case QuestionnaireActionType.START_SURVEY: {
			window.scrollTo(0, 0);		// TODO: Move this to a separate middleware
			session.recordStartSurvey();
			return next(action);
		}
		case QuestionnaireActionType.ANSWER_QUESTION: {
			session.recordAnswer(action.payload.questionId, action.payload.answerId);
			return next(action);
		}
		case QuestionnaireActionType.START_OVER: {
			window.scrollTo(0, 0);		// TODO: Move this to a separate middleware
			session.recordStartOver();
			return next(action);
		}
		case QuestionnaireActionType.PRIVACY_POLICY: {
			window.scrollTo(0, 0);		// TODO: Move this to a separate middleware
			return next(action);
		}
		default: {
			return next(action);
		}
	}
}
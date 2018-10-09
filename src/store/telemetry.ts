import { ActionType } from 'typesafe-actions';
import { TelemetryActionType } from './InternalTypes';
import { AnswerId, IQuestionAndAnswer, QuestionnaireActionType, QuestionId } from './Types';

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
			sessionId: this.sessionId,
			event: "LandingPage",
		});
	}

	public recordStartSurvey() {
		this.uploadData({
			sessionId: this.sessionId,
			event: "StartSurvey",
		});
	}

	public recordAnswer(questionId: QuestionId, answerId: AnswerId) {
		this.uploadData({
			sessionId: this.sessionId,
			event: "Answer",
			question: questionId,
			answer: answerId,
		});
	}

	public recordPlanPage(answers: IQuestionAndAnswer[]) {
		this.uploadData({
			sessionId: this.sessionId,
			event: "ViewPlan",
			answers: answers.map(qa => ({ question: qa.questionId, answer: qa.answerId })),
		});
	}

	public recordStartOver() {
		this.uploadData({
			sessionId: this.sessionId,
			event: "StartOver",
		});
	}

	private uploadData(data: any) {
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
			session.recordPlanPage(action.payload.answers);
			break;
		}
		case QuestionnaireActionType.START_SURVEY: {
			session.recordStartSurvey();
			return next(action);
		}
		case QuestionnaireActionType.ANSWER_QUESTION: {
			session.recordAnswer(action.payload.questionId, action.payload.answerId);
			return next(action);
		}
		case QuestionnaireActionType.START_OVER: {
			session.recordStartOver();
			return next(action);
		}
		default: {
			return next(action);
		}
	}
}
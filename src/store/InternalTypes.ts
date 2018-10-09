import { Action as HistoryAction } from 'history';
import { AnswerId, QuestionId, IQuestionAndAnswer } from './Types';

export const enum RouterInternalActionType {
	PUSH = 'ROUTER/PUSH',
	REPLACE = 'ROUTER/REPLACE',
	GO = 'ROUTER/GO',
	GO_BACK = 'ROUTER/GO_BACK',
	GO_FORWARD = 'ROUTER/GO_FORWARD',
}

export const enum RouterActionType {
	LOCATION_CHANGE = 'ROUTER/LOCATION_CHANGE',
}

export interface IRouterPushReplacePayload {
	href: string,
}

export interface IRouterGoPayload {
	index: number,
}

export interface IRouterLocationChangePayload {
	pathname: string,
	search: string,
	hash: string,
	historyAction: HistoryAction | undefined,
}

export const enum TelemetryActionType {
	START_SESSION = 'TELEMETRY/START_SESSION',
	LANDING_PAGE = 'TELEMETRY/LANDING_PAGE',
	START_SURVEY = 'TELEMETRY/START_SURVEY',
	ANSWER = 'TELEMETRY/ANSWER',
	PLAN_PAGE = 'TELEMETRY/PLAN_PAGE',
	START_OVER = 'TELEMETRY/START_OVER',
}

export interface IRecordAnswerPayload {
	question: QuestionId,
	answer: AnswerId,
}

export interface IRecordPlanPagePayload {
	answers: IQuestionAndAnswer[],
}
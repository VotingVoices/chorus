import { action } from 'typesafe-actions';
import { IRecordAnswerPayload, IRecordPlanPagePayload, TelemetryActionType } from './InternalTypes';
import { AnswerId, IQuestionAndAnswer, QuestionId } from './Types';

export const recordStartSession = () =>
	action(TelemetryActionType.START_SESSION);

export const recordLandingPage = () =>
	action(TelemetryActionType.LANDING_PAGE);

export const recordStartSurvey = () =>
	action(TelemetryActionType.START_SURVEY);

export const recordAnswer = (question: QuestionId, answer: AnswerId) =>
	action(TelemetryActionType.ANSWER, { question, answer } as IRecordAnswerPayload);

export const recordPlanPage = (answers: IQuestionAndAnswer[]) =>
	action(TelemetryActionType.PLAN_PAGE, { answers } as IRecordPlanPagePayload);

export const recordStartOver = () =>
	action(TelemetryActionType.START_OVER);
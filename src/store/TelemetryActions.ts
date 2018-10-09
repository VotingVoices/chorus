import { action } from 'typesafe-actions';
import { IRecordAnswerPayload, TelemetryActionType } from './InternalTypes';
import { QuestionId, AnswerId } from './Types';

export const recordLandingPage = () =>
	action(TelemetryActionType.LANDING_PAGE);

export const recordStartSurvey = () =>
	action(TelemetryActionType.START);

export const recordAnswer = (question: QuestionId, answer: AnswerId) =>
	action(TelemetryActionType.ANSWER, { question, answer } as IRecordAnswerPayload);
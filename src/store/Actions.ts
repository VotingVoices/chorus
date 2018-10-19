import { Action as HistoryAction } from 'history';
import { action } from 'typesafe-actions';
import { AnswerId, IAnswerQuestionPayload, IQuestionAndAnswer, ISetLanguagePayload, IZipCodeAnswer, LanguageId, QuestionId, QuestionnaireActionType } from './Types';
import { IRecordCallToActionPayload, IRecordPlanPagePayload, IRouterLocationChangePayload, RouterActionType, TelemetryActionType } from './InternalTypes';

export const startSurvey = () =>
	action(QuestionnaireActionType.START_SURVEY);

export const startOver = () =>
	action(QuestionnaireActionType.START_OVER);

export const answerQuestion = (questionId: QuestionId, answer: AnswerId | IZipCodeAnswer) =>
	action(QuestionnaireActionType.ANSWER_QUESTION, { questionId, answer } as IAnswerQuestionPayload);

export const viewPrivacyPolicy = () =>
	action(QuestionnaireActionType.PRIVACY_POLICY);

export const setLanguage = (language: LanguageId) =>
	action(QuestionnaireActionType.SET_LANGUAGE, { language } as ISetLanguagePayload);

export const locationChange = (pathname: string, search: string, hash: string, historyAction: HistoryAction | undefined) =>
	action(RouterActionType.LOCATION_CHANGE, { pathname, search, hash, historyAction } as IRouterLocationChangePayload);

export const recordStartSession = () =>
	action(TelemetryActionType.START_SESSION);

export const recordLandingPage = () =>
	action(TelemetryActionType.LANDING_PAGE);

export const recordPlanPage = (answers: IQuestionAndAnswer[], language: LanguageId) =>
	action(TelemetryActionType.PLAN_PAGE, { answers, language } as IRecordPlanPagePayload);

export const recordCallToAction = (link: string) =>
	action(TelemetryActionType.CALL_TO_ACTION, { link } as IRecordCallToActionPayload);

export const recordPrivacyPolicy = () =>
	action(TelemetryActionType.PRIVACY_POLICY);
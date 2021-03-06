import { Action as HistoryAction } from 'history';
import { action } from 'typesafe-actions';
import { AnswerId, IAnswerQuestionPayload, IQuestionAndAnswer, ISendPlanEmailPayload, ISetLanguagePayload, IZipCodeAnswer, LanguageId, QuestionId, QuestionnaireActionType } from './Types';
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

export const sendPlanEmail = (emailAddress: string) =>
	action(QuestionnaireActionType.SEND_PLAN_EMAIL, { emailAddress } as ISendPlanEmailPayload);

export const copyLinkToClipboard = () =>
	action(QuestionnaireActionType.COPY_LINK);

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

export const recordContact = () =>
	action(TelemetryActionType.CONTACT);

export const recordDonate = () =>
	action(TelemetryActionType.DONATE);

export const recordSaveButton = () =>
	action(TelemetryActionType.SAVE_BUTTON);
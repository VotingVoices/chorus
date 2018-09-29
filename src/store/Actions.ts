import { Action as HistoryAction } from 'history';
import { action } from 'typesafe-actions';
import { AnswerId, IAnswerQuestionPayload, QuestionId, QuestionnaireActionType } from './Types';
import { IRouterLocationChangePayload, RouterActionType } from './InternalTypes';

export const answerQuestion = (questionId: QuestionId, answerId: AnswerId) =>
	action(QuestionnaireActionType.ANSWER_QUESTION, { questionId, answerId } as IAnswerQuestionPayload);

export const startOver = () =>
	action(QuestionnaireActionType.START_OVER);
	
export const locationChange = (pathname: string, search: string, hash: string, historyAction: HistoryAction | undefined) =>
	action(RouterActionType.LOCATION_CHANGE, { pathname, search, hash, historyAction } as IRouterLocationChangePayload);
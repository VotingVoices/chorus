import { action } from 'typesafe-actions';
import { AnswerId } from '../AnswerId';
import { QuestionId } from '../QuestionId';
import { IAnswerQuestionPayload, QuestionnaireActionType } from '../Types';

export const answerQuestion = (questionId: QuestionId, answerId: AnswerId) =>
	action(QuestionnaireActionType.ANSWER_QUESTION, { questionId, answerId } as IAnswerQuestionPayload);

export const startOver = () =>
	action(QuestionnaireActionType.START_OVER);
	
export { locationChange } from '../Router/Actions';
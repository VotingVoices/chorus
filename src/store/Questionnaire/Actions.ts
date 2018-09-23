import { action } from 'typesafe-actions';
import { QuestionnaireActionType } from './Types';

export const answerQuestion = () => action(QuestionnaireActionType.ANSWER_QUESTION);
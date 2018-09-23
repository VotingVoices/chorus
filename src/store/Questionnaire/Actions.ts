import { action } from 'typesafe-actions';
import { QuestionnaireActionTypes } from './Types';

export const answerQuestion = () => action(QuestionnaireActionTypes.ANSWER_QUESTION);
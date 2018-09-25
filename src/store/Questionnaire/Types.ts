import { Action, AnyAction, Dispatch } from 'redux';
import { IQuestionAndAnswer } from '../IQuestionAndAnswer';		// TODO: Should this be defined in this file?
import { AnswerId } from '../AnswerId';
import { QuestionId } from '../QuestionId';

export interface IQuestionnaireState {
	readonly answers: IQuestionAndAnswer[];
	readonly dotNavStep: number;
}

export const enum QuestionnaireActionType {
	ANSWER_QUESTION = '@@Questionnaire/ANSWER_QUESTION',
}

export interface IConnectedReduxProps<A extends Action = AnyAction> {
	dispatch: Dispatch<A>;
}

export interface IAnswerQuestionPayload {
	questionId: QuestionId;
	answerId: AnswerId;
}
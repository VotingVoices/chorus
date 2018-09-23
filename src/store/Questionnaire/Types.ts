import { Action, AnyAction, Dispatch } from 'redux';

export interface IQuestionnaireState {
	readonly currentDotNavStep: number;
}

export const enum QuestionnaireActionType {
	ANSWER_QUESTION = '@@Questionnaire/ANSWER_QUESTION',
}

export interface IConnectedReduxProps<A extends Action = AnyAction> {
	dispatch: Dispatch<A>;
}
import { Action, AnyAction, Dispatch } from 'redux';
import { IQuestionAndAnswer } from './IQuestionAndAnswer';		// TODO: Should this be defined in this file?
import { AnswerId } from './AnswerId';
import { QuestionId } from './QuestionId';

export const enum AppView {
	Questionnaire,
	Plan,
}

export interface IQuestionnaireState {
	readonly answers: IQuestionAndAnswer[];
	readonly currentView: AppView;
	readonly currentQuestionId: QuestionId | undefined;
	readonly dotNavStep: number;
	readonly counter: number;
	readonly mostRecentActionWasBackButton: boolean;
}

export const enum QuestionnaireActionType {
	ANSWER_QUESTION = 'QUESTIONNAIRE/ANSWER_QUESTION',
	START_OVER = 'QUESTIONNAIRE/START_OVER',
}

export interface IConnectedReduxProps<A extends Action = AnyAction> {
	dispatch: Dispatch<A>;
}

export interface IAnswerQuestionPayload {
	questionId: QuestionId;
	answerId: AnswerId;
}
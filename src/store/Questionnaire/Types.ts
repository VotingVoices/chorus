export interface IQuestionnaireState {
	readonly currentDotNavStep: number;
}

export const enum QuestionnaireActionType {
	ANSWER_QUESTION = '@@Questionnaire/ANSWER_QUESTION',
}
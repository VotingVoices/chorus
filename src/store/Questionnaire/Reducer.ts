import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';

import { IQuestionnaireState, QuestionnaireActionType } from './Types';
import { AnswerId } from '../AnswerId';
import { QuestionId } from '../QuestionId';
import { QUESTIONS } from '../Questions';
import * as actions from './Actions';

type QuestionnaireAction = ActionType<typeof actions>;

function answerQuestion(prevState: IQuestionnaireState, questionId: QuestionId, answerId: AnswerId): IQuestionnaireState {
	const answers = prevState.answers;

    const question = QUESTIONS.find(q => q.id === questionId);

    const existingAnswer = answers.find(qa => qa.questionId === question!.id);
    if (existingAnswer === undefined) {
        answers.push({ questionId: question!.id, answerId });
    }
    else {
        existingAnswer!.answerId = answerId;
    }

    const nextQuestionId = question!.nextQuestionId(answerId);
    const dotNavStep = QUESTIONS.find(q => q.id === nextQuestionId)!.dotNavStep;

    return { answers, currentQuestionId: nextQuestionId, dotNavStep };
}

const reducer: Reducer<IQuestionnaireState> = (state: IQuestionnaireState, action: QuestionnaireAction) => {
	switch (action.type) {
		case QuestionnaireActionType.ANSWER_QUESTION: {
			return answerQuestion(state, action.payload.questionId, action.payload.answerId);
		}
		default: {
			return state;
		}
	}
}

export { reducer as questionnaireReducer };
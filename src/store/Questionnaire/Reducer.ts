import { Reducer } from 'redux';
import { IAnswerQuestionPayload, IQuestionnaireState, QuestionnaireActionType } from './Types';
import { AnswerId } from '../AnswerId';
import { QuestionId } from '../QuestionId';
import { QUESTIONS } from '../Questions';

const initialState: IQuestionnaireState = {
	answers: [],
	dotNavStep: 1,
};

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

    return { answers, dotNavStep };
}

const reducer: Reducer<IQuestionnaireState> = (state = initialState, action) => {
	switch (action.type) {
		case QuestionnaireActionType.ANSWER_QUESTION: {
			const payload = action.Payload as IAnswerQuestionPayload;
			return answerQuestion(state, payload.questionId, payload.answerId);
		}
		default: {
			return state;
		}
	}
}

export { reducer as questionnaireReducer };
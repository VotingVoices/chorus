import { Reducer } from 'redux';
import { IQuestionnaireState, QuestionnaireActionType } from './Types';

const initialState: IQuestionnaireState = {
	currentDotNavStep: 1,
};

const reducer: Reducer<IQuestionnaireState> = (state = initialState, action) => {
	switch (action.type) {
		case QuestionnaireActionType.ANSWER_QUESTION: {
			return { ...state, currentDotNavStep: state.currentDotNavStep + 1 };
		}
		default: {
			return state;
		}
	}
}

export { reducer as questionnaireReducer };
import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';

import { AppView, IQuestionnaireState, QuestionnaireActionType } from './Types';
import { RouterActionType } from '../Router/Types';		// Maybe move this Reducer out of the 'Questionnaire' directory?
import { AnswerId } from '../AnswerId';
import { QuestionId } from '../QuestionId';
import { QUESTIONS } from '../Questions';
import * as actions from './Actions';
import { readStateFromLocation } from '../../readStateFromLocation';

type QuestionnaireAction = ActionType<typeof actions>;

export const DEFAULT_STATE = {
	answers: [],
	currentView: AppView.Questionnaire,
	currentQuestionId: QuestionId.AreYouRegistered,
	dotNavStep: 1,
	counter: 1,
	mostRecentActionWasBackButton: false,
} as IQuestionnaireState;

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

	if (nextQuestionId !== undefined) {
		const dotNavStep = QUESTIONS.find(q => q.id === nextQuestionId)!.dotNavStep;
		return {
			answers,
			currentQuestionId:
			nextQuestionId,
			currentView:
			AppView.Questionnaire,
			dotNavStep,
			counter: prevState.counter + 1,
			mostRecentActionWasBackButton: false,
		};
	}
	else {
		// End of questionnaire; change to the Plan view.
		return {
			...prevState,
			answers,
			currentView:
			AppView.Plan,
			counter: prevState.counter + 1,
			mostRecentActionWasBackButton: false
		};
	}
}

function respondToBackButton(prevState: IQuestionnaireState, pathname: string, search: string) : IQuestionnaireState {
	const { state } = readStateFromLocation(prevState, pathname, search);

	return {
		...state,
		mostRecentActionWasBackButton: true,
	}
}

const reducer: Reducer<IQuestionnaireState> = (state: IQuestionnaireState, action: QuestionnaireAction) => {
	switch (action.type) {
		case QuestionnaireActionType.ANSWER_QUESTION: {
			return answerQuestion(state, action.payload.questionId, action.payload.answerId);
		}
		case QuestionnaireActionType.START_OVER: {
			return DEFAULT_STATE;
		}
		case RouterActionType.LOCATION_CHANGE: {
			if (action.payload.historyAction === "POP") {
				return respondToBackButton(state, action.payload.pathname, action.payload.search);
			}
		}
		default: {
			return state;
		}
	}
}

export { reducer as questionnaireReducer };
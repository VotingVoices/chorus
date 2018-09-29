import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';

import { AppView, AnswerId, getVotingStateId, IQuestionnaireState, MostRecentTransition, QuestionId, QuestionnaireActionType } from './Types';
import { RouterActionType } from './InternalTypes';
import { PLAN_DOT_NAV_STEP, QUESTIONS } from './Questions';
import * as actions from './Actions';
import { readStateFromLocation } from '../readStateFromLocation';

type QuestionnaireAction = ActionType<typeof actions>;

export const DEFAULT_STATE = {
	answers: [],
	votingStateId: undefined,
	currentView: AppView.LandingPage,
	currentQuestionId: QuestionId.AreYouRegistered,
	dotNavStep: 1,
	counter: 1,
	mostRecentTransition: undefined,
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

	let votingStateId = prevState.votingStateId;

	if (questionId === QuestionId.VoteByMailState) {
		votingStateId = getVotingStateId(answerId);
	}

	const nextQuestionId = question!.nextQuestionId(answerId);

	if (nextQuestionId !== undefined) {
		const dotNavStep = QUESTIONS.find(q => q.id === nextQuestionId)!.dotNavStep;
		return {
			answers,
			votingStateId,
			currentQuestionId: nextQuestionId,
			currentView:
			AppView.Questionnaire,
			dotNavStep,
			counter: prevState.counter + 1,
			mostRecentTransition: undefined,
		};
	}
	else {
		// End of questionnaire; change to the Plan view.
		return {
			...prevState,
			answers,
			currentView:
			AppView.Plan,
			dotNavStep: PLAN_DOT_NAV_STEP,
			counter: prevState.counter + 1,
			mostRecentTransition: undefined
		};
	}
}

function respondToBackOrForwardButton(prevState: IQuestionnaireState, pathname: string, search: string) : IQuestionnaireState {
	const { state } = readStateFromLocation(prevState, pathname, search);

	return {
		...state,
		mostRecentTransition: state.dotNavStep < prevState.dotNavStep ? MostRecentTransition.Back : MostRecentTransition.Forward,
	}
}

export const surveyReducer: Reducer<IQuestionnaireState> = (state: IQuestionnaireState, action: QuestionnaireAction) => {
	switch (action.type) {
		case QuestionnaireActionType.ANSWER_QUESTION: {
			return answerQuestion(state, action.payload.questionId, action.payload.answerId);
		}
		case QuestionnaireActionType.START_OVER: {
			return {
				...DEFAULT_STATE,
				currentView: AppView.Questionnaire,
				answers: [],
				mostRecentTransition: MostRecentTransition.Back,
			};
		}
		case RouterActionType.LOCATION_CHANGE: {
			if (action.payload.historyAction === "POP") {
				return respondToBackOrForwardButton(state, action.payload.pathname, action.payload.search);
			}
		}
		default: {
			return state;
		}
	}
}
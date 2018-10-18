import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';

import { AppView, AnswerId, getVotingStateId, IQuestionnaireState, LanguageId, MostRecentTransition, QuestionId, QuestionnaireActionType } from './Types';
import { RouterActionType } from './InternalTypes';
import { PLAN_DOT_NAV_STEP, QUESTIONS } from './Questions';
import * as actions from './Actions';
import { readStateFromLocation } from '../readStateFromLocation';
import { getEnglishString, getSpanishString, StringId } from '../strings';

type QuestionnaireAction = ActionType<typeof actions>;

function getGetStringImplementation(language: LanguageId): (id: StringId) => string {
	switch (language) {
		case LanguageId.English:
			return getEnglishString;

		case LanguageId.Spanish:
			return getSpanishString;

		default:
			throw new Error("Unknown LanguageId");
	}
}

export const DEFAULT_STATE = {
	answers: [],
	votingStateId: undefined,
	currentView: AppView.LandingPage,
	currentQuestionId: QuestionId.AreYouRegistered,
	dotNavStep: 0,
	counter: 1,
	pushLocation: true,
	mostRecentTransition: undefined,
	getString: getGetStringImplementation(LanguageId.English),
	currentLanguage: LanguageId.English,
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
			pushLocation: true,
			mostRecentTransition: undefined,
			getString: prevState.getString,
			currentLanguage: prevState.currentLanguage,
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
			pushLocation: true,
			mostRecentTransition: undefined
		};
	}
}

function getStateTransition(oldState: IQuestionnaireState, newState: IQuestionnaireState): MostRecentTransition {
	if (oldState.currentView === AppView.PrivacyPolicy) {
		return MostRecentTransition.Immediate;
	}

	if (newState.dotNavStep < oldState.dotNavStep) {
		return MostRecentTransition.Back;
	}
	else {
		return MostRecentTransition.Forward;
	}
}

function respondToBackOrForwardButton(prevState: IQuestionnaireState, pathname: string, search: string) : IQuestionnaireState {
	const { state } = readStateFromLocation(prevState, pathname, search);

	return {
		...state,
		pushLocation: false,
		mostRecentTransition: getStateTransition(prevState, state),
	}
}

export const surveyReducer: Reducer<IQuestionnaireState> = (state: IQuestionnaireState, action: QuestionnaireAction) => {
	switch (action.type) {
		case QuestionnaireActionType.START_SURVEY: {
			return {
				...DEFAULT_STATE,
				currentView: AppView.Questionnaire,
				answers: [],
				dotNavStep: 1,
				counter: DEFAULT_STATE.counter + 1,
			};
		}
		case QuestionnaireActionType.START_OVER: {
			return {
				...DEFAULT_STATE,
				currentView: AppView.Questionnaire,
				answers: [],
				dotNavStep: 1,
				mostRecentTransition: MostRecentTransition.Back,
			};
		}
		case QuestionnaireActionType.ANSWER_QUESTION: {
			return answerQuestion(state, action.payload.questionId, action.payload.answerId);
		}
		case QuestionnaireActionType.PRIVACY_POLICY: {
			return {
				...state,
				currentView: AppView.PrivacyPolicy,
				counter: state.counter + 1,
				pushLocation: true,
				mostRecentTransition: MostRecentTransition.Immediate,
			}
		}
		case QuestionnaireActionType.SET_LANGUAGE: {
			return {
				...state,
				getString: getGetStringImplementation(action.payload.language),
				currentLanguage: action.payload.language,
			}
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
import * as queryString from 'query-string';

import { ALL_QUESTION_IDS, AppView, getVotingStateId, IQuestionAndAnswer, IQuestionnaireState, PLAN_DOT_NAV_STEP, QuestionId, QUESTIONS } from './store';

function getViewFromPath(pathname: string): AppView | undefined {
	if (pathname === '/LandingPage') {
		return AppView.LandingPage;
	}
	else if (pathname === '/Survey') {
		return AppView.Questionnaire;
	}
	else if (pathname === '/Plan') {
		return AppView.Plan;
	}

	return undefined;
}

function dotNavStepFromAppView(appView: AppView): number {
	switch (appView) {
		case AppView.LandingPage: {
			return 0;
		}
		case AppView.Questionnaire: {
			return 1;
		}
		case AppView.Plan: {
			return PLAN_DOT_NAV_STEP;
		}
		default: {
			throw new Error('Unrecognized AppView');
		}
	}
}

export const CurrentQuestionQueryParameterName = 'q';

export interface IReadStateResult {
	state: IQuestionnaireState,
	appViewSpecified: boolean,
	questionSpecified: boolean,
}

export function readStateFromLocation(existingState: IQuestionnaireState, pathname: string, search: string): IReadStateResult {
	const appView = getViewFromPath(pathname);

	if (appView !== undefined) {
		const queryValues = queryString.parse(search);

		let currentQuestionId = queryValues[CurrentQuestionQueryParameterName];
		let dotNavStep = dotNavStepFromAppView(appView!);
		let questionSpecified = true;

		if (currentQuestionId == null) {
			currentQuestionId = QuestionId.AreYouRegistered;
			questionSpecified = false;
		}
		else {
			dotNavStep = QUESTIONS.find(q => q.id === currentQuestionId)!.dotNavStep;
		}

		const answers: IQuestionAndAnswer[] = existingState.answers;
		let votingStateId = existingState.votingStateId;

		ALL_QUESTION_IDS.forEach((questionId: QuestionId) => {
			const answerId = queryValues[questionId];

			if (answerId != null) {
				const existingAnswer = answers.find(qa => qa.questionId === questionId);
				if (existingAnswer !== undefined) {
					existingAnswer.answerId = answerId;
				}
				else {
					answers.push({ questionId, answerId });
				}

				if (questionId === QuestionId.VoteByMailState) {
					votingStateId = getVotingStateId(answerId);
				}
			}
		});

		return {
			state: {
				answers,
				votingStateId,
				currentView: appView!,
				currentQuestionId,
				dotNavStep,
				counter: existingState.counter + 1,
				mostRecentTransition: undefined,
			},
			appViewSpecified: true,
			questionSpecified,
		};
	}
	else {
		return {
			state: existingState,
			appViewSpecified: false,
			questionSpecified: false,
		};
	}
}
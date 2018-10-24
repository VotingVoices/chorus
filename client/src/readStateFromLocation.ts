import * as queryString from 'query-string';

import { ALL_QUESTION_IDS, AppView, AnswerId, getVotingStateId, IQuestionAndAnswer, IQuestionnaireState, IZipCodeAnswer, LanguageId, PLAN_DOT_NAV_STEP, QuestionId, QUESTIONS, votingStateFromZip } from './store';
import { getGetStringImplementation } from './getGetStringImplementation';

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
	else if (pathname === '/Privacy') {
		return AppView.PrivacyPolicy;
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
		case AppView.PrivacyPolicy: {
			return 0;
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

function getAnswer(queryValues: any, questionId: QuestionId) : AnswerId | IZipCodeAnswer {
	const rawAnswer = queryValues[questionId];

	if (questionId === QuestionId.ZipCode) {
		return { zipCode: rawAnswer } as IZipCodeAnswer;
	}

	return rawAnswer;
}

export function readStateFromLocation(existingState: IQuestionnaireState, pathname: string, search: string, allowMiddleOfSurveyState: boolean): IReadStateResult {
	const appView = getViewFromPath(pathname);

	if (appView !== undefined) {
		if (appView === AppView.Questionnaire && !allowMiddleOfSurveyState) {
			return {
				state: existingState,
				appViewSpecified: false,
				questionSpecified: false,
			};
		}
		
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
			const answer = getAnswer(queryValues, questionId);

			if (answer != null) {
				const existingAnswer = answers.find(qa => qa.questionId === questionId);
				if (existingAnswer !== undefined) {
					existingAnswer.answer = answer;
				}
				else {
					answers.push({ questionId, answer });
				}

				if (questionId === QuestionId.ZipCode && (answer as IZipCodeAnswer).zipCode !== undefined) {
					votingStateId = votingStateFromZip((answer as IZipCodeAnswer).zipCode);
				}
				if (questionId === QuestionId.VoteByMailState && (answer as AnswerId) !== undefined) {
					votingStateId = getVotingStateId(answer as AnswerId);
				}
			}
		});

		const languageParameter = queryValues.lang;

		const language: LanguageId = languageParameter !== null && languageParameter !== undefined ? languageParameter : LanguageId.English;

		return {
			state: {
				answers,
				votingStateId,
				currentView: appView!,
				currentQuestionId,
				dotNavStep,
				counter: existingState.counter + 1,
				pushLocation: true,
				mostRecentTransition: undefined,
				// TODO: Read language from the location
				getString: getGetStringImplementation(language),
				currentLanguage: language,
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
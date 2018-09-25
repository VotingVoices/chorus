import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, AnyAction } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory, Location } from 'history';
import { push } from 'connected-react-router';
import * as queryString from 'query-string';

import App from './App';
import configureStore from './configureStore';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { ALL_QUESTION_IDS, AppView, IQuestionAndAnswer, IQuestionnaireState, PLAN_DOT_NAV_STEP, QuestionId } from './store';

const history = createBrowserHistory();

function getViewFromPath(pathname: string): AppView | undefined {
	if (pathname === '/Survey') {
		return AppView.Questionnaire;
	}
	else if (pathname === '/Plan') {
		return AppView.Plan;
	}

	return undefined;
}

function dotNavStepFromAppView(appView: AppView): number {
	switch (appView) {
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

function readInitialStateFromUrl(location: Location<any>): IQuestionnaireState {
	const appView = getViewFromPath(location.pathname);

	if (appView !== undefined) {
		const queryValues = queryString.parse(location.search);

		const answers: IQuestionAndAnswer[] = [];

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
			}
		});

		return {
			answers,
			currentView: appView!,
			currentQuestionId: QuestionId.AreYouRegistered,
			dotNavStep: dotNavStepFromAppView(appView!),
			counter: 1,
		}
	}
	else {
		// Return default initial state
		return {
			answers: [],
			currentView: AppView.Questionnaire,
			currentQuestionId: QuestionId.AreYouRegistered,
			dotNavStep: 1,
			counter: 1,
		};
	}
}

const initialState = readInitialStateFromUrl(history.location);

const store = configureStore(history, initialState);

function pathFromState(state: IQuestionnaireState): string {
	switch (state.currentView) {
		case AppView.Questionnaire: {
			return '/Survey';
		}

		case AppView.Plan: {
			const queryStringParameters = state.answers.map(qa => `${qa.questionId}=${qa.answerId}`).join('&');
			return `/Plan?${queryStringParameters}`;
		}

		default: {
			throw new Error('Unrecognized AppView.');
		}
	}
}

function syncViewChangesToNavigation(s: Store<IQuestionnaireState, AnyAction>) {
	let currentState: IQuestionnaireState = initialState;

	function handleChange() {
		const nextState = s.getState();

		if (nextState.counter !== currentState.counter) {
			currentState = nextState;

			s.dispatch(push(pathFromState(nextState)));
		}
	}

	handleChange();

	s.subscribe(handleChange);
}

syncViewChangesToNavigation(store);

ReactDOM.render(
	<Provider store={store}>
		<App store={store} history={history} />
	</Provider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();

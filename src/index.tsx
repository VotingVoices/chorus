import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, AnyAction } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import App from './App';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import { CurrentQuestionQueryParameterName, readStateFromLocation } from './readStateFromLocation';
import { AppView, IQuestionnaireState, push, QuestionId } from './store';

import './index.css';

const history = createBrowserHistory();

const defaultState = {
	answers: [],
	currentView: AppView.Questionnaire,
	currentQuestionId: QuestionId.AreYouRegistered,
	dotNavStep: 1,
	counter: 1,
	mostRecentActionWasBackButton: false,
} as IQuestionnaireState;

const initialState = readStateFromLocation(defaultState, history.location.pathname, history.location.search);

const store = configureStore(history, initialState);

function pathFromState(state: IQuestionnaireState): string {
	switch (state.currentView) {
		case AppView.Questionnaire: {
			return `/Survey?${CurrentQuestionQueryParameterName}=${state.currentQuestionId}`;
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

			if (!nextState.mostRecentActionWasBackButton) {
				s.dispatch(push(pathFromState(nextState)));
			}
		}
	}

	handleChange();

	s.subscribe(handleChange);
}

syncViewChangesToNavigation(store);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();

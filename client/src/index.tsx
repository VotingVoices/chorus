import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, AnyAction } from 'redux';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';

import App from './App';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import { CurrentQuestionQueryParameterName, readStateFromLocation } from './readStateFromLocation';
import { AppView, DEFAULT_STATE, getLangParameter, getPlanPageQueryString, IQuestionnaireState, push, recordStartSession } from './store';

import './index.css';

const history = createHashHistory();

const readStateResult = readStateFromLocation(DEFAULT_STATE, history.location.pathname, history.location.search);

const initialState = readStateResult.state;

const store = configureStore(history, initialState);

function pathFromState(state: IQuestionnaireState): string {
	switch (state.currentView) {
		case AppView.LandingPage: {
			return `/LandingPage?${getLangParameter(state)}`;
		}
		
		case AppView.Questionnaire: {
			return `/Survey?${CurrentQuestionQueryParameterName}=${state.currentQuestionId}&${getLangParameter(state)}`;
		}

		case AppView.Plan: {
			return `/Plan?${getPlanPageQueryString(state)}`;
		}

		case AppView.PrivacyPolicy: {
			// We currently don't translate the privacy policy into Spanish.
			return `/Privacy`;
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

			// If we got here via some method besides the back/forward button in the browsers,
			// push the current state to the location.
			if (nextState.pushLocation) {
				s.dispatch(push(pathFromState(nextState)));
			}
		}
	}

	handleChange();

	s.subscribe(handleChange);
}

syncViewChangesToNavigation(store);

// Navigate to a well-formed URL for the first question
if (!readStateResult.appViewSpecified || !readStateResult.questionSpecified) {
	store.dispatch(push(pathFromState(store.getState())));
	store.dispatch(recordStartSession());
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();

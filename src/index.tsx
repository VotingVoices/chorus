import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, AnyAction } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { push } from 'connected-react-router';
// import { AnyAction } from 'typesafe-actions';

import App from './App';
import configureStore from './configureStore';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { AppView, IQuestionnaireState, QuestionId } from './store';

const history = createBrowserHistory();

const initialState = {
	answers: [],
	currentView: AppView.Questionnaire,
	currentQuestionId: QuestionId.AreYouRegistered,
	dotNavStep: 1,
	counter: 1,
} as IQuestionnaireState;

const store = configureStore(history, initialState);

function pathFromState(state: IQuestionnaireState): string {
	switch (state.currentView) {
		case AppView.Questionnaire: {
			return '/Survey';
		}

		case AppView.Plan: {
			return '/Plan';
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

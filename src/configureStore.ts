import { Store, createStore, applyMiddleware } from 'redux';
import { History } from 'history';

import { createTelemetrySession, IQuestionnaireState, surveyReducer, routerMiddleware, startHistoryListener } from './store';

export default function configureStore(history: History, initialState: IQuestionnaireState): Store<IQuestionnaireState> {
	const session = createTelemetrySession();

	const store = createStore(
		surveyReducer,
		initialState,
		applyMiddleware(
			routerMiddleware(history, session)));

	startHistoryListener(history, store);

	return store;
}
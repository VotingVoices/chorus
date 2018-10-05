import { Store, createStore, applyMiddleware } from 'redux';
import { History } from 'history';

import { IQuestionnaireState, surveyReducer, routerMiddleware, startHistoryListener } from './store';
import { createTelemetrySession, telemetryMiddleware } from './telemetry';

export default function configureStore(history: History, initialState: IQuestionnaireState): Store<IQuestionnaireState> {
	const session = createTelemetrySession();

	const store = createStore(
		surveyReducer,
		initialState,
		applyMiddleware(
			routerMiddleware(history),
			telemetryMiddleware(session)));

	startHistoryListener(history, store);

	return store;
}
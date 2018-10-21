// TODO: Should this file be in the 'store' directory?

import { Store, createStore, applyMiddleware } from 'redux';
import { History } from 'history';

import { createTelemetrySession, IQuestionnaireState, surveyReducer, routerMiddleware, scrollMiddleware, sendEmailMiddleware, startHistoryListener, telemetryMiddleware } from './store';

export default function configureStore(history: History, initialState: IQuestionnaireState): Store<IQuestionnaireState> {
	const session = createTelemetrySession();

	const store = createStore(
		surveyReducer,
		initialState,
		applyMiddleware(
			scrollMiddleware(),
			routerMiddleware(history),
			telemetryMiddleware(session),
			sendEmailMiddleware()));

	startHistoryListener(history, store);

	return store;
}
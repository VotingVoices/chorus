import { Store, createStore, applyMiddleware } from 'redux';
import { History } from 'history';

import { IQuestionnaireState, surveyReducer, routerMiddleware, startHistoryListener } from './store';

export default function configureStore(history: History, initialState: IQuestionnaireState): Store<IQuestionnaireState> {
	const store = createStore(
		surveyReducer,
		initialState,
		applyMiddleware(routerMiddleware(history)));

	startHistoryListener(history, store);

	return store;
}
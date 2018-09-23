import { Store, createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { History } from 'history';

import { IQuestionnaireState, questionnaireReducer } from './store';

export default function configureStore(history: History, initialState: IQuestionnaireState): Store<IQuestionnaireState> {
	const store = createStore(
		connectRouter(history)(questionnaireReducer),
		initialState,
		applyMiddleware(routerMiddleware(history)));

	return store;
}
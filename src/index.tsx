import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
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
	dotNavStep: 1
} as IQuestionnaireState;

const store = configureStore(history, initialState);

ReactDOM.render(
	<Provider store={store}>
		<App store={store} history={history} />
	</Provider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();

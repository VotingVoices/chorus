import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import App from './App';
import configureStore from './configureStore';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { QuestionId } from './store';

const history = createBrowserHistory();

// TODO: De-dupe with the 'initialState' in Reducer.ts
const store = configureStore(history, { answers: [], currentQuestionId: QuestionId.AreYouRegistered, dotNavStep: 1 });

ReactDOM.render(
	<Provider store={store}>
		<App store={store} history={history} />
	</Provider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();

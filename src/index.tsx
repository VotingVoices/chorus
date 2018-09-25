import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import App from './App';
import configureStore from './configureStore';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

const store = configureStore(history, { answers: [], dotNavStep: 1 });

ReactDOM.render(
	<Provider store={store}>
		<App store={store} history={history} />
	</Provider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();

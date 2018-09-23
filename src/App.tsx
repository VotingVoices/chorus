import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Plan } from './components/Plan';
import { Questionnaire } from './components/Questionnaire';

class App extends React.Component {
	public render() {
		return (
			<Router>
				<Switch>
					<Route exact={true} path="/" component={Questionnaire} />
					<Route path="/plan*" component={Plan} />
					<Route path="/*" component={Questionnaire} />
				</Switch>
			</Router>
		);
	}
}

export default App;
import * as React from 'react';
import { Store } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { History } from 'history';

import './App.css';
import { Plan } from './components/Plan';
import { Questionnaire } from './components/Questionnaire';
import { IQuestionnaireState } from './store';

interface IPropsFromState {
	currentDotNavStep: number;
}

interface IAppProps {
	store: Store<IQuestionnaireState>;
	history: History;
}

class App extends React.Component<IPropsFromState & IAppProps> {
	public render() {
		const { currentDotNavStep } = this.props;

		return (
			<React.Fragment>
				<Router>
					<Switch>
						<Route exact={true} path="/" component={Questionnaire} />
						<Route path="/plan*" component={Plan} />
						<Route path="/*" component={Questionnaire} />
					</Switch>
				</Router>

				<p>Nav step: {currentDotNavStep}</p>
			</React.Fragment>
		);
	}
}

const mapStateToProps = ({ currentDotNavStep }: IQuestionnaireState) => ({
	currentDotNavStep
})

export default connect(mapStateToProps)(App);
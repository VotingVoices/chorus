import * as React from 'react';
import { Store } from 'redux';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { History } from 'history';

import './App.css';
import { Plan } from './components/Plan';
import { Questionnaire } from './components/Questionnaire';
import { IQuestionnaireState } from './store';

interface IAppProps {
	store: Store<IQuestionnaireState>;
	history: History;
}

class App extends React.Component<IAppProps> {
	public render() {
		const { history } = this.props;

		return (
			<ConnectedRouter history={history}>
				<Switch>
					<Route exact={true} path="/" component={Questionnaire} />
					<Route path="/plan*" component={Plan} />
					<Route path="/*" component={Questionnaire} />
				</Switch>
			</ConnectedRouter>
		);
	}
}

const mapStateToProps = (state: IQuestionnaireState) => ({ })

export default connect(mapStateToProps)(App);
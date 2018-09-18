import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Plan } from './components/Plan';
import { Questionnaire } from './components/Questionnaire';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={Questionnaire} />
          <Route path="/plan" component={Plan} />
        </div>
      </Router>
    );
  }
}

export default App;
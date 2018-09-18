import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Questionnaire } from './components/Questionnaire';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Route exact={true} path="/" component={Questionnaire} />
      </Router>
    );
  }
}

export default App;
import * as React from 'react';
import './App.css';
import { QuestionCarousel, QUESTIONS } from './components/QuestionCarousel';
import { BrowserRouter } from 'react-router-dom'

class App extends React.Component {

  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Voting Voices</h1>
          </header>
          <p className="App-intro" />
          <QuestionCarousel questions={ QUESTIONS } />
        </div>
      </BrowserRouter>
    );
  }

}

export default App;

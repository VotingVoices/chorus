import * as React from 'react';
import './App.css';
import { QuestionCarousel, QUESTIONS } from './components/questioncarousel';
import { DotNavigationBar } from './components/DotNavigationBar';



class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Voting Voices</h1>
        </header>
        <p className="App-intro" />
        <QuestionCarousel questions={ QUESTIONS } />
        <DotNavigationBar currentStep={1} />
      </div>
    );
  }

}

export default App;

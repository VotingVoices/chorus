import * as React from 'react';
import { QuestionCarousel, QUESTIONS } from '../QuestionCarousel';

export class Questionnaire extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Voting Voices</h1>
        </header>
        <p className="App-intro" />
        <QuestionCarousel questions={ QUESTIONS } />
      </div>
    );
  }
}

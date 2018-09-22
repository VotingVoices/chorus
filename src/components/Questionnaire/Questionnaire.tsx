import * as React from 'react';
import { QUESTION_CAROUSEL, QUESTIONS } from '../QuestionCarousel';

export class Questionnaire extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Voting Voices</h1>
        </header>
        <p className="App-intro" />
        <QUESTION_CAROUSEL questions={ QUESTIONS } />
      </div>
    );
  }
}

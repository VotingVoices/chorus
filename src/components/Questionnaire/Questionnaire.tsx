import * as React from 'react';

import { IConnectedReduxProps } from '../../store';
import { QUESTION_CAROUSEL, QUESTIONS } from '../QuestionCarousel';

export class Questionnaire extends React.Component<IConnectedReduxProps, any> {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Voting Voices</h1>
        </header>
        <p className="App-intro" />
        <QUESTION_CAROUSEL {...this.props} questions={ QUESTIONS } />
      </div>
    );
  }
}

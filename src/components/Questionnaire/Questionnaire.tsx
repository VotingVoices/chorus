import * as React from 'react';

import { IConnectedReduxProps } from '../../store';
import { QuestionCarousel } from '../QuestionCarousel';

export class Questionnaire extends React.Component<IConnectedReduxProps, any> {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Voting Voices</h1>
        </header>
        <p className="App-intro" />
        <QuestionCarousel {...this.props} />
      </div>
    );
  }
}

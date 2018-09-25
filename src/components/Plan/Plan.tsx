import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as queryString from 'query-string';
import { getAnswerLabel } from '../Answer';
import { getQuestionFullLabel } from '../Question';
import { ALL_QUESTION_IDS, QuestionId } from '../../store';

export class Plan extends React.Component<RouteComponentProps<any>, any> {
  public render() {
    const queryValues = queryString.parse(this.props.location.search);

    return (
      <div className="App">
        <p>This is your voting plan.</p>
        <div>
          {ALL_QUESTION_IDS.map(
              (questionId: QuestionId) => {
                  const questionLabel = getQuestionFullLabel(questionId);
                  const answerId = queryValues[questionId];

                  if (answerId != null) {
                    const answerLabel = getAnswerLabel(answerId);
                    return <p key={questionId}>{questionLabel} = {answerLabel}</p>
                  }
                  else {
                    return <div key={questionId} />
                  }
              }
          )}
        </div>
      </div>
    );
  }
}

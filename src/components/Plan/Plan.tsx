import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as queryString from 'query-string';

export class Plan extends React.Component<RouteComponentProps<any>, any> {
  public render() {
    const queryValues = queryString.parse(this.props.location.search);

    return (
      <div className="App">
        <p>This is your voting plan.</p>
        <p>Q1: {queryValues.q1}</p>
      </div>
    );
  }
}

import * as React from 'react';
import './App.css';
import { Question } from './components/question';
import { IQuestionOptionProps } from './components/questionoption';
import logo from './logo.svg';

export interface IQuestionHostState {
  selectedKey?: string;
}

class App extends React.Component<any, IQuestionHostState> {
  constructor(props: any, context?: any) {
    super(props, context);
    this.state = {
      selectedKey: 'nothing'
    };
  }

  public render() {
    const options = [
      {
        key: 'A',
        label: 'A',
      } as IQuestionOptionProps,
      {
        key: 'B',
        label: 'B'
      }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Selected: {this.state.selectedKey ? this.state.selectedKey : 'nothing'}
        </p>
        <Question label="Test question?" options={options} onChange={this._onChange} />
      </div>
    );
  }

  private _onChange = (ev: any, option: IQuestionOptionProps): void => {
    this.setState({ selectedKey: option.key });
  }
}

export default App;

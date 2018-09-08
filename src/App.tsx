import * as React from 'react';
import './App.css';
import { Question } from './components/question';
import { IQuestionOptionProps } from './components/questionoption';
import logo from './logo.svg';

class App extends React.Component {
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
          To get started, Hello World <code>src/App.tsx</code> and save to reload.
        </p>
        <Question label="Test question?" options={options} />
      </div>
    );
  }
}

export default App;

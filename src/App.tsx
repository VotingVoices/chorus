import * as React from 'react';
import './App.css';
import { DotNavigationBar } from './components/DotNavigationBar';
import Header from './Header';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <DotNavigationBar currentStep={4} />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Header name="REACT" />
      </div>
    );
  }
}

export default App;

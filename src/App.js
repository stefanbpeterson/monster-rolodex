import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import PrimaryButton from './Components/UI/PrimaryButton';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Stefan',
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name}</p>
          <PrimaryButton />
        </header>
      </div>
    );
  }
}

export default App;

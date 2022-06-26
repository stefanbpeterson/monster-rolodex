import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import PrimaryButton from './Components/UI/PrimaryButton';

class App extends Component {
  constructor() {
    super();

    this.updateName = this.updateName.bind(this)

    this.state = {
      name: 'Stefan',
    }
  }

  updateName = (newName) => {
    if (this.state.name == 'Stefan') {
        this.setState({
          name: newName
        })
    } else {
      this.setState({
        name: 'Stefan'
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name}</p>
          <PrimaryButton newName={this.updateName} />
        </header>
      </div>
    );
  }
}

export default App;
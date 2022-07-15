import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/stefanbpeterson/sonic-api/characters')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { characters: users }
      }));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    const filteredCharacters = this.state.characters.filter((character) => {
      return character.name.toLocaleLowerCase().includes(this.state.searchField)
    })
    
    return (
          <div className='text-center'>
            <CardList onSearchChange={this.onSearchChange} className='card-list' characters={filteredCharacters} maxHeight='max-h-60' />
          </div>
    );
  }
}

export default App;
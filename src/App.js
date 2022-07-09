import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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
      <div className="App">
        <SearchBox onSearchChange={this.onSearchChange} placeholder='Search characters' />
        <CardList characters={filteredCharacters} />
      </div>
    );
  }
}

export default App;
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
      <div className='text-center'>
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-10">
            <div className="space-y-12">
              <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Sonic Friends</h2>
                <p className="text-xl text-gray-300">
                  Find your favorite Sonic characters!
                </p>
              </div>
            </div>
          </div>
        <SearchBox onSearchChange={this.onSearchChange} characters={filteredCharacters} placeholder='Search for Sonic characters' />
        <CardList className='card-list' characters={filteredCharacters} maxHeight='max-h-60' />
      </div>
    );
  }
}

export default App;
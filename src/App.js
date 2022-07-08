import './App.css';
import { Component } from 'react';
import PrimaryButton from './Components/UI/PrimaryButton';
import SecondaryButton from './Components/UI/SecondaryButton'

class App extends Component {
  constructor() {
    super();

    // this.updateName = this.updateName.bind(this)

    this.state = {
      characters: [],
      searchField: ''
    }

    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://my-json-server.typicode.com/stefanbpeterson/sonic-api/characters')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { characters: users }
      },
      () => {
        console.log(this.state)
      }));
  }

  // updateName = (newName) => {
  //   if (this.state.name === 'Stefan') {
  //       this.setState({
  //         name: newName
  //       })
  //   } else {
  //     this.setState({
  //       name: 'Stefan'
  //     })
  //   }
  // }


  render() {
    console.log('render')

    const filteredCharacters = this.state.characters.filter((character) => {
      return character.name.toLocaleLowerCase().includes(this.state.searchField)
    })
    
    return (
      <div className="App">
        <div className='flex justify-center'>
          <div className='basis-1/3'>
            <input className='search-box block w-full px-3 py-1.5 text-base text-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' type='search' placeholder='Search Sonic Characters' onChange={(event) => {
              const searchField = event.target.value.toLocaleLowerCase()
              this.setState(() => {
                return { searchField }
              })
            }} />
          </div>
        </div>
        <div>
          {filteredCharacters.map((characters) => (
            <div className='flex-auto'>
              <h1 key={characters.id}>{characters.name}</h1>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
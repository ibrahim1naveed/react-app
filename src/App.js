import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component'; 
import { SearchBox } from './components/search-box/search-box.component';




class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    
    };
    //this.state = {string: 'this is sym'};
    //this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState( { monsters: users }));
  } 

  handleChange = e =>  {
    this.setState({searchField: e.target.value}) ;
    // you have explicitly state what you want the context of 'this' to be.
  }

  render() {
    // filtering the monsters according to the search field.
    const {monsters, searchField } = this.state; //used to destructure the object.
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox 
        placeholder='Search Monster'
        handleChange={this.handleChange} 
        />

        <CardList monsters={filteredMonsters} />  
      </div>
    );
  }
}
        /*<div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>{ this.state.string }</p>
            <button onClick={() => this.setState( {string: 'hello this is actually ibrahim'})}>
              Change text here.
            </button>
          </header>
        </div>*/
    




export default App;

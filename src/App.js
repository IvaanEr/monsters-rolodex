import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    this.getMonsters();
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((m) =>
      m.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }

  getMonsters = async () => {
    try {
      const monsters = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const monsters_json = await monsters.json();
      this.setState({ monsters: monsters_json });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    this.getMonsters();
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }

  async getMonsters() {
    try {
      const monsters = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const monsters_json = await monsters.json();
      this.setState({ monsters: monsters_json });
    } catch (err) {
      console.log(err);
    }
  }
}

export default App;

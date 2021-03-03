import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      nameArr: [`Talon`, `Abby`, `Tanner`, `Holly`, `Beau`, `Angee`]
    }
  }
  render() {
    let nameList = this.state.nameArr.map((elem, i) => {
      return <h2 key={i}>{elem}</h2>;
    })
  return (
    <div className="App">{nameList}</div>
  );
  }
}

export default App;

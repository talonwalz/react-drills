import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      sports: [`Tennis`, `Basketball`, `Baseball`, `Football`, `Soccer`, `Pickleball`],
      filterArr: []
    }
  }
  handleChange(filter) {
    this.setState({filterArr: filter})
  }
  render() {
    let list = this.state.sports.filter((elem, i) => {
      return elem.includes(this.state.filterArr)
    })
    .map((elem, i) => {
      return <h2 key={i}>{elem}</h2>
    })
  return (
    <div className="App">
      <input type="text" onChange={event => this.handleChange(event.target.value)}/>
      <p>{list}</p>
    </div>
  );
  }
}
  

export default App;

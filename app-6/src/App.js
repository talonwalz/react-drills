import React, { Component } from 'react';
import Todo from './Component/TodoComponent'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: ``,
      list: []
    }
    this.createTodo = this.createTodo.bind(this)
  }
  handleInput(val) {
    this.setState({input: val})
  }
  createTodo() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ``
    })
  }

  render() {
    let list = this.state.list.map((elem, i) => {
      return <Todo key={i} task={elem} />
    })
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <div>
        <input value={this.state.input} placeholder='Enter new task' onChange={event => this.handleInput(event.target.value)}/>
        <button onClick={this.createTodo}>Add</button>
        </div>
        <br/>
        <p>{list}</p>
      </div>
    );
  }
}

export default App;

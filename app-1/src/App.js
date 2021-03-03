import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

 class App extends Component {
   constructor() {
     super()
     this.state = {
       textBox: ``
     }
   }
   handleChange(value) {
     this.setState({textBox: value})
   }

  render() {
    return (
    <div className="App">
      <input type="text" onChange={event => this.handleChange(event.target.value)}/>
      <p>{this.state.textBox}</p>
    </div>
  );
}
 }

export default App;

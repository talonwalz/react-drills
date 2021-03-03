import React, {Component} from 'react';

class NewTask extends Component {
    constructor() {
        super() 
        this.state = {
            input: ``
        }
        this.addTask = this.addTask.bind(this)
    }
    handleInput(task) {
        this.setState({input: task})
    }
    addTask() {
        this.props.add(this.state.input);
        this.setState({input: ``});
    }
    render() {
        return(
            <section>
                <input value={this.state.input} placeholder="Enter new task" onChange={event => this.handleInput(event.target.value)}/>
                <button onClick={this.addTask}>Add</button>
            </section>
        )
    }
}

export default NewTask
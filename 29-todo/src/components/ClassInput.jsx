/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: '',
      count: 2,
      editVal: "",
      editIndex: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditStart = this.handleEditStart.bind(this)
    this.handleEditChange = this.handleEditChange.bind(this)
    this.handleSave = this.handleSave.bind(this)

  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: '',
      count: state.count + 1
    }));
  }

  handleDelete(itemToDelete) {
    this.setState((state) => ({
      todos: state.todos.filter((item) => item !== itemToDelete),
      count: state.count - 1
    }));
  }

  handleEditStart(index) {
    this.setState ((state) => ({
      editIndex: index,
      
    }))
  }

  handleEditChange(e) {
    this.setState((state) => ({
      editVal: e.target.value
    }))
  }

  handleSave() {
    this.setState((state) => {
    const updatedTodos = [...state.todos];
    updatedTodos[state.editIndex] = state.editVal;
    
    return{
      todos: updatedTodos,
      editIndex: null,
      editVal: "",

    }
    })
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!  Tasks: {this.state.count}</h4>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={todo}>
            {this.state.editIndex === index ? (
<>
<input type="text"
value={this.state.editVal}
onChange={this.handleEditChange}/>
<button onClick={() => this.handleSave}>Save</button>
</>
            ) : (
              <>
                  {todo}
              <button onClick={() => this.handleDelete(todo)}>Delete</button>
              <button onClick={() => this.handleEditStart(index)}>Edit</button>
              </>
            
            )}

            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;

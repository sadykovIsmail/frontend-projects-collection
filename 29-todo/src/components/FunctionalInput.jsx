import React, { useState } from 'react';

// eslint-disable-next-line react/function-component-definition, react/prop-types
const FunctionalInput = ({ name }) => {
  /*
    We declare two state variables and their setters,
    one to store the To-Do's
    and the other to store the value of the input field
  */
  const [todos, setTodos] = useState(['Just some demo tasks', 'As an example']);
  const [inputVal, setInputVal] = useState('');
  const [count, setCount] = useState(2);
  const [editValue, setEditValue] = useState("")
  const [editIndex, setEditIndex] = useState(null)


  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todo) => [...todo, inputVal]);
    setInputVal('');
        setCount(count + 1)

  };

  const handleDelete = (deleteItem) => {
    setTodos(todos.filter((todo) => todo !== deleteItem))
    setCount(count - 1)
  }

  const handleEditStart = (index) => {
setEditIndex(index)
  }

  const handleEditChange = (e) => {
setEditValue(e.target.value)
  }

  const handleSave = () => {
    const updated = [...todos]
    updated[editIndex] = editValue
    setTodos(updated)
    setEditIndex(null)
    setEditValue("")
  }




  return (
    <section>
      <h3>{name}</h3>
      {/* The input field to enter To-Do's */}
      <form onSubmit={handleSubmit}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="task-entry">Enter a task: </label>
        <input
          type="text"
          name="task-entry"
          value={inputVal}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h4>All the tasks!         Tasks: {count}</h4>

      {/* The list of all the To-Do's, displayed */}
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            {editIndex === index ? (
              <>
              <input type="text"
              onChange={handleEditChange}
              value={editValue}/>
              <button onClick={handleSave}>Save</button>
              </>
            ) : (
<>
{todo}
          <button onClick={ () => handleEditStart(index)}>Edit</button>

          <button onClick={() => handleDelete(todo)}>Delete</button>
          
</>

            )}
            </li>
        ))}
      </ul>
    </section>
  );
};

export default FunctionalInput;

import React, { useState } from 'react';
import "./App.css"

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [liststyle, setListStyle] = useState('circle')

  const changeStyle = () => {
    setListStyle('disc')
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter'){
      addTodo();
    }
  }

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const style = {
    listStyleType: liststyle,
    cursor: 'pointer',
  };


  return (
    <div>
      <div className='wrap-title'>
        <h1>To Do List</h1>
      </div>
      <div className='wrap'>
        <input className='Input'
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleEnter}
          
        />
        <button className='Button' onClick={addTodo}>Plus</button>
      </div>
      <div className='wrap'>
        <ul className='unorderlist'>
          {todos.map((todo, index) => (
            <li className='list' key={index} style={style} >
              {todo}
            </li>
          ))}
        </ul>
      </div>
      <div className='wrap'>
        <button className='Button' onClick={changeStyle}>Today finish!</button>
      </div>
    </div>
  );
}

export default TodoList;




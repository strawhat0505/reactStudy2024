import React, { useState } from 'react';
import "./App.css"


function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [liststyle, setListStyle] = useState('circle')
  const [color, setColor] = useState('#aee4ff');


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

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  const style = {
    listStyleType: liststyle,
    cursor: 'pointer',
    
  };

  const changeColor = (color) => {
    setColor(color)
  }


  return (
    <div className='background' style={{backgroundColor: color, justifyContent: 'center', minHeight: '100vh' }}>
      <nav style={{position: 'absolute'}}>
        <div style={{ margin: '20px 0 0 30px'}}>
          <h3>[Click a Button!]</h3>
        </div>
        <div style={{  display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '10px', margin: '0 30px 30px' , gap: '10px',  }}>
        <button className='colorbutton' style={{backgroundColor: '#aee4ff'}} onClick={() => changeColor('#aee4ff')}></button>
        <button className='colorbutton' style={{backgroundColor: '#6a9cfd'}} onClick={() => changeColor('#6a9cfd')}></button>
        <button className='colorbutton' style={{backgroundColor: '#ffb8d0'}} onClick={() => changeColor('#ffb8d0')}></button>
        <button className='colorbutton' style={{backgroundColor: '#fee251'}} onClick={() => changeColor('#fee251')}></button>
        <button className='colorbutton' style={{backgroundColor: '#feb281'}} onClick={() => changeColor('#feb281')}></button>
        </div>
      </nav>
      
      <section className='section'>
        <div className='wrap-title'>
          <h1 style={{ color: color, fontSize: '40px'}}>To Do List</h1>
          <p style={{margin: '10px 10px 0 10px'}} onClick={() => window.open('http://127.0.0.1:3002/src/index.html')}>(self-studying)</p>
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
                {todo} <button className='Button' onClick={() => deleteTodo(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className='wrap'>
          <button className='Button' onClick={changeStyle}>Today finish!</button>
        </div>
      </section>
    </div>
  );
}

export default TodoList;




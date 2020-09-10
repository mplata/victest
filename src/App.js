import React, { useState } from 'react';
import './App.css';
import TodosContainer from './components/todos/todos-container';

function App() {

  let todos = ['Ir al cine',"Pandemia",'Tarea 3'];
  let [todo,setTodo] = useState('');

  
  
  return (
    <div className="App">
      <header className="App-header">
        Victor Batiz 
        <TodosContainer todos={todos}/>
      </header>
    </div>
  );
}

export default App;

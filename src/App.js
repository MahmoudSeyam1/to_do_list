import { useState, useRef} from 'react';
import './App.css';

function App() {

  const [todos, setTodos ] = useState([]);
  const inputRef = useRef();


  const addTasks = () => {
    const input = inputRef.current.value;
    const newItem = {completed: false, input};
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };

  const handelItemDone = (index) => {
    const newTodo = [...todos];
    newTodo[index].completed = !newTodo[index].completed;
    setTodos(newTodo);
  };
const handelDelete = (index) => {
  const newTodo = [...todos];
  newTodo.splice(index, 1);
  setTodos(newTodo);
}; 

  return (
    <div className="App">
      <h1>To Do List</h1>
        <div className='todo-container'>
            <ul>
              {todos.map(({input, completed}, index) => {
                return ( 
                    <div className='item'>
                        <li onClick={() =>handelItemDone(index)} key={index} className={completed ? "done" : "" }>{input}</li>
                        <span onClick={() => handelDelete(index)} className='delete-item'>❌</span>
                    </div>
                );
              })}
            </ul>
            <div className='input-btn-container'>
              <input  ref={inputRef}  placeholder='Enter Your Task...' />
              <button onClick={addTasks}>Add</button>
            </div>
        </div>
    </div>
  );
};

export default App;

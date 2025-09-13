import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  function NewInput(e){
    setTask(e.target.value);
    console.log(task);
  }
  function addTask(){
    setTaskList([...taskList, task]);
    console.log(taskList);
    setTask('');
  }
  
  return (
    <>
    <ul>
    {taskList.map((t, index) => (
    <li key={index}>{t}</li>
  ))}
    </ul>
    <p>{task}</p>
    <input type="text" name="input" id="newInput"  onChange={NewInput}/>
    <button onClick={addTask}>Add</button>
    </>
  )
}

export default App

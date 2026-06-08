import React, {useState} from 'react';
import './TodoList.css'
function TodoList() {
  const [tasks,setTask] = useState(["Take a bath","Eat Lunch"]);
  const [newTask,setNewtask] = useState("");

  const addTask = () => {
    if(newTask.trim() !== "") {
      setTask(t => [...t,newTask]);
      setNewtask("");
    }
  }

  const deleteTask = (index) => {
    setTask(prev => {
      return prev.filter((_,ind) => ind != index);
    })
  }

  const upTask = (index) => {
      setTask(prev => {
        const updated = [...prev];
        if(index > 0) {
          [updated[index],updated[index-1]] = [updated[index-1],updated[index]];
        }
        return updated;
      })
  }
  
  const downTask = (index) => {
      setTask(prev => {
        const updated = [...prev];
        if(index+1 < prev.length) {
          [updated[index],updated[index+1]] = [updated[index+1],updated[index]];
        }
        return updated;
      })
  }

  return(
  <div className='container'>
  <h1>To Do List</h1>
    <ol >
      {tasks.map((element,index) => (
        <li key={index}>
          {element}
          <button className ="delete-btn" onClick={() => deleteTask(index)}>
            Delete
          </button>
          <button onClick={() => upTask(index)}>
            Up
          </button>
          <button onClick={() => downTask(index)}>
            Down
          </button>
        </li>
      ))}
    </ol>

    <input 
    id="element"
    placeholder='To do Works...'
    value = {newTask}
    onChange={(e) => setNewtask(e.target.value)
    }
    />
    <button id="add-btn" onClick={addTask}>Add</button>
  </div>
  );
}

export default TodoList;
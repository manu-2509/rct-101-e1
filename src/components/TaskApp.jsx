import React from "react";
import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader"
import AddTask from "./AddTask/AddTask"
import Tasks from "./Tasks/Tasks"
import { useState } from "react";
import data from "../data/tasks.json"
import {v4 as uuid} from"uuid"
const TaskApp = () => {
const [todos,setTodo] = useState(data)
const [unCompletedTask,setUnCompletedTask] = useState(todos.length)
  const handleTodo = (value,setValue)=>{
    if(value===""){
      return
    }

setTodo([...todos,{
id:uuid(),
text:value,
done:false,
count:1
  }])
  handleComplete(todos)
  setValue("")
}
console.log(todos)
  const  handleComplete=(todos)=>{
    setUnCompletedTask(...todos.filter(todo=>todo.status===false))
  }
  const DeleteTask = (id)=>{
    // console.log(id)
    setTodo([...todos.filter(todo=>todo.id!==id)])
    setUnCompletedTask(todos.length)
  }

  return (
    <div data-cy="task-app" className={styles.taskApp}>
      TodoList
    <TaskHeader unCompletedTask={unCompletedTask} totalTask={todos.length}></TaskHeader>
    <AddTask onClick={handleTodo}></AddTask>
     <Tasks todos={todos} DeleteTask={DeleteTask}></Tasks>
    </div>
  );
};

export default TaskApp;

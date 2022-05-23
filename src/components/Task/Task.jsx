import React from "react";
import styles from "./task.module.css";
import {useState} from "react";
import Counter from "../Counter/Counter"
import {ImCross} from "react-icons/im"
const Task = ({count,text,id,DeleteTask,status}) => {
  // console.log(count,text,id)
const [counter,setCounter] =useState(count)
const handleIncrement = (value) => {
  setCounter(value+1)
}
const handleDecrement = (value) => {
  if(value<1){
    return
  }
  setCounter(value-1)
}
let CLASS=""
const handleChange = (e,id) => {
if(e.target.checked===true){
  CLASS="styles.strike"
}
else{
  CLASS="styles.nor"
}
console.log(CLASS)
}
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" className={styles.box} onChange={(e) =>handleChange(e,id)} />
      <div data-cy="task-text" className={CLASS} >{text}</div>
     <Counter counter={counter} handleIncrement={handleIncrement} handleDecrement={handleDecrement}></Counter>
      <button data-cy="task-remove-button" onClick={()=>DeleteTask(id)}><ImCross></ImCross></button>
    </li>
  );
};

export default Task;

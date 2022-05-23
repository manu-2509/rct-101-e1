import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";
const AddTask = ({onClick}) => {
const [value,setValue] = useState("")
  return (
    <div className={styles.todoForm}>
      <input value={value} data-cy="add-task-input" type="text" onChange={(e) =>setValue(e.target.value)}/>
      <button data-cy="add-task-button" onClick={() =>onClick(value,setValue)}>+</button>
    </div>
  );
};

export default AddTask;

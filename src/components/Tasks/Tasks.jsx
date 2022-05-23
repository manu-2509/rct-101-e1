import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task"
import {GiEmptyMetalBucket} from "react-icons/gi"
const Tasks = ({todos ,DeleteTask}) => {

  return (
    <>
    {todos.length!==0?
      <ul data-cy="tasks" className={styles.tasks}>
       {todos.map((task) =>(
         <Task key={task.id} {...task} DeleteTask={DeleteTask} ></Task>
       ))}
      </ul>
      :
      <div data-cy="tasks-empty" className={styles.empty}>
        <GiEmptyMetalBucket></GiEmptyMetalBucket>
        <h3>Nothing Here,its empty</h3>
      </div>
}
    </>
  );
};

export default Tasks;

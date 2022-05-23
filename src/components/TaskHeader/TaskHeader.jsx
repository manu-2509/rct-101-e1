import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({unCompletedTask,totalTask}) => {



  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      TodoList
      <b data-cy="header-remaining-task">{unCompletedTask}</b>
      <b data-cy="header-total-task">{totalTask}</b>
    </div>
  );
};

export default TaskHeader;

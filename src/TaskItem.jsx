
import React from 'react';

function TaskItem(props) {
  return (
    <div>
      <span
        onClick={() => props.toggleTask(props.task.id)}
        style={{
          textDecoration: props.task.done ? 'line-through' : 'none'
        }}
      >
        {props.task.name}
      </span>

      <button onClick={() => props.deleteTask(props.task.id)}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;

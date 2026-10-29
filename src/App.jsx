
import React, { Component } from 'react';
import TaskItem from './TaskItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: '',
      tasks: []
    };
  }

  addTask = () => {
    if (this.state.task.trim() === '') return;

    this.setState({
      tasks: [...this.state.tasks, {
        id: Date.now(),
        name: this.state.task,
        done: false
      }],
      task: ''
    });
  };

  toggleTask = (id) => {
    this.setState({
      tasks: this.state.tasks.map(t =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    });
  };

  deleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter(t => t.id !== id)
    });
  };

  render() {
    const completed = this.state.tasks.filter(t => t.done).length;

    return (
      <div>
        <h2>To-Do App</h2>

        <input
          value={this.state.task}
          onChange={e => this.setState({ task: e.target.value })}
          placeholder="Enter a task"
        />

        <button onClick={this.addTask}>Add</button>

        {this.state.tasks.length === 0
          ? <p>No tasks yet. Add one!</p>
          : this.state.tasks.map(t => (
              <TaskItem
                key={t.id}
                task={t}
                toggleTask={this.toggleTask}
                deleteTask={this.deleteTask}
              />
            ))}

        <p>{completed} of {this.state.tasks.length} tasks done</p>
      </div>
    );
  }
}

export default App;

import React from "react";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  }

  handleDone = (id) => {
    this.setState({
      todos: this.state.todos.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }

        return task;
      }),
    });
  };

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((task) => {
        return task.completed === false;
      }),
    });
  };

  handleAddTodo = (task) => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List: MVP</h1>
        </div>
        <TodoList handleDone={this.handleDone} todos={this.state.todos} />
        <TodoForm
          todos={this.state.todos}
          handleAddTodo={this.handleAddTodo}
          handleClear={this.handleClear}
        />
      </div>
    );
  }
}

export default App;

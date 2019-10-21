import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { Title, Wrapper, Button } from "./TodoSC";

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: "all"
  };

  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  };

  updateTodoToShow = s => {
    this.setState({
      todoToShow: s
    });
  };

  handleDeleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  removeAllTodosThatAreComplete = id => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.complete)
    });
  };

  render() {
    let todos = [];
    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <Wrapper>
        <Title>
          <h1>Todo App</h1>
        </Title>
        <div>
          <TodoForm onSubmit={this.addTodo} />
          {todos.map(todo => (
            <Todo
              key={todo.id}
              toggleComplete={() => this.toggleComplete(todo.id)}
              todo={todo}
              onDelete={() => this.handleDeleteTodo(todo.id)}
            />
          ))}
          <div>
            Todos Left: {this.state.todos.filter(todo => !todo.complete).length}
          </div>
          <div>
            <Button primary onClick={() => this.updateTodoToShow("all")}>
              All
            </Button>
            <Button primary onClick={() => this.updateTodoToShow("active")}>
              Active
            </Button>
            <Button primary onClick={() => this.updateTodoToShow("complete")}>
              Complete
            </Button>
            {this.state.todos.some(todo => todo.complete) ? (
              <div>
                <button onClick={this.removeAllTodosThatAreComplete}>
                  Delete Completed
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </Wrapper>
    );
  }
}

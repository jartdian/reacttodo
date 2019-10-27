import React, { Component } from "react";
import shortid from "shortid";
import { ButtonAdd, Form, Input } from "./TodoSC";

export default class TodoForm extends Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    });
    this.setState({
      text: "",
      focused: false
    });
  };

  onFocus = () => {
    this.setState({ focused: true });
  };

  render() {
    return (
      <Form>
        <form onSubmit={this.handleSubmit}>
          <Input
            onFocus={this.onFocus}
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="write a todo..."
          />
          <ButtonAdd onClick={this.handleSubmit}>Add Todo</ButtonAdd>
        </form>
      </Form>
    );
  }
}

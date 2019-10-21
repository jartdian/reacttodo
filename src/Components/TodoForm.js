import React, { Component } from "react";
import shortid from "shortid";
import { ButtonAdd, Form } from "./TodoSC";

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
      text: ""
    });
  };

  render() {
    return (
      <Form>
        <form onSubmit={this.handleSubmit}>
          <input
            editable={false}
            style={{ border: "none", bottomBorder: "2px solid black" }}
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="todo..."
          />
          <ButtonAdd onClick={this.handleSubmit}>Add Todo</ButtonAdd>
        </form>
      </Form>
    );
  }
}

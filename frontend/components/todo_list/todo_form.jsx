import React from "react";


class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: ""
    };
  }

  updateState() {
    return (event => this.setState({answer: event.currentTarget.value}));
  }

  render () {
    return (
      <div>
      <input onChange={this.updateState()} value={this.state.answer} />
      <button onClick={() => this.props.receiveTodo(this.props.todo)} />
      </div>
    );
  }

}

export default ToDoForm;

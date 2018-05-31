import React, { Component } from 'react';

class IdeaForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.idea.title,
      body: this.props.idea.body
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="title">
        <form>
          <input
            className="input"
            type="text"
            name="title"
            placeholder="Enter a title"
            value={this.state.title}
            onChange={this.handleInput}
          />
          <textarea
            className="input"
            name="body"
            placeholder="Describe your idea"
            value={this.state.body}
            onChange={this.handleInput}
          />
        </form>
      </div>
    );
  }
}
export default IdeaForm;

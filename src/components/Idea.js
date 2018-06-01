import React, { Component } from 'react';

class Idea extends Component {
  handleClick = () => {
    this.props.onClick(this.props.idea.id);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.idea.id);
  };

  render() {
    return (
      <div className="title">
        <span className="deleteButton" onClick={this.handleDelete}>
          X
        </span>
        <h4 onClick={this.handleClick} className="idea-title">
          {this.props.idea.title}
        </h4>
        <p onClick={this.handleClick} className="idea-body">
          {this.props.idea.body}
        </p>
      </div>
    );
  }
}

export default Idea;

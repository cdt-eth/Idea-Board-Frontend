import React, { Component } from 'react';

class Idea extends Component {
  handleClick = () => {
    this.props.onClick(this.props.idea.id);
  };

  render() {
    return (
      <div className="title">
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

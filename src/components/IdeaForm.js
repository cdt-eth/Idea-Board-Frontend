import React, { Component } from 'react';

class IdeaForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="title">
        <form>
          <input className="input" type="text" name="title" placeholder="Enter a title" />
          <textarea className="input" name="body" placeholder="Describe your idea" />
        </form>
      </div>
    );
  }
}
export default IdeaForm;

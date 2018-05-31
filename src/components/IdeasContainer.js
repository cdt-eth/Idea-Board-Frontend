import React, { Component } from 'react';
import axios from 'axios';

class IdeasContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ideas: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/api/v1/ideas.json')
      .then(response => {
        console.log(response);
        this.setState({ ideas: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="items">
        {this.state.ideas.map(idea => {
          return (
            <div className="title" key={idea.id}>
              <h4 className="idea-title"> {idea.title} </h4>
              <p className="idea-body"> {idea.body} </p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default IdeasContainer;

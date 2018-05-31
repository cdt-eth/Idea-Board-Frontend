import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Idea from './Idea';

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
        this.setState({ ideas: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Fragment>
        <div className="buttonDiv">
          <button className="newIdeaButton">New Idea</button>
        </div>
        <div className="items">
          {this.state.ideas.map(idea => {
            return <Idea idea={idea} key={idea.id} />;
          })}
        </div>
      </Fragment>
    );
  }
}
export default IdeasContainer;

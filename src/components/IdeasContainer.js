import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Idea from './Idea';
import update from 'immutability-helper';

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
        // console.log(response);
        this.setState({ ideas: response.data });
      })
      .catch(error => console.log(error));
  }

  addNewIdea = () => {
    axios
      .post('http://localhost:3001/api/v1/ideas.json', { idea: { title: '', body: '' } })
      .then(response => {
        const ideas = update(this.state.ideas, { $splice: [[0, 0, response.data]] });
        this.setState({ ideas: ideas });
      })
      .catch(error => console.log(error.response));
  };

  render() {
    return (
      <Fragment>
        <div className="buttonDiv">
          <button className="newIdeaButton" onClick={this.addNewIdea}>
            New Idea
          </button>
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

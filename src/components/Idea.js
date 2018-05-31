import React from 'react';

const Idea = ({ idea }) => (
  <div className="title" key={idea.id}>
    <h4 className="idea-title"> {idea.title} </h4>
    <p className="idea-body"> {idea.body} </p>
  </div>
);
export default Idea;

import React from 'react';

const projects=(props)=> {
  return (
    <div>
      <h1 id={props.id} className="heading">{props.title}</h1>
      <p className="subtitle">{props.subtitle}</p>
      <p>{props.additonal}</p>
    </div>
  )
};

export default projects;

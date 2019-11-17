import React from 'react';

const detailedabout=(props)=> {
  return (
    <div className={props.class}>
      <img id={props.id} className="photo" src={props.image} alt={props.alttext}/>
      <h1 id={props.id_title} className="sub_white">{props.about}</h1>
      <p className="paragraph_white">{props.summary}</p>
      <br/>
    </div>
  )
};

export default detailedabout;

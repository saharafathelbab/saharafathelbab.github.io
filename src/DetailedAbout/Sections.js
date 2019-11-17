import React from 'react';

const sections=(props)=> {
  return (
    <div>
      <h4 className="section_title">{props.sectiontitle}</h4>
      <p id="mobile_size"className="paragraph">{props.sectioninfo}</p>
      <p id="mobile_size"className="paragraph">{props.additionalinfo}</p>
      <br/>
    </div>
  )
};

export default sections;

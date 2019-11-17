import React from 'react';

const aboutme=(props)=> {
  return (
    <div id={props.id} className= "about-card">
      <br/>
      <h1 id={props.id_title} className="heading">{props.title}</h1>
      <img id={props.id_image} className="project-photo"src={props.photo} alt={props.alttext}/>
      <p id={props.id_para} className="italics">{props.technicalscope}</p>
      <p id={props.id_para2} className="paragraph">{props.summary}</p>
      <p id={props.id_fact} className={props.show}><i class="fas fa-globe-americas"></i>{props.fact}</p>
      <form id={props.id_form}>
       <button className={props.class} type="submit" formaction={props.link}>{props.name}</button>
      </form>
    </div>
  )
};

export default aboutme;

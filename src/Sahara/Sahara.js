import React from 'react';

const sahara=(props)=> {
  return (
    <div className="my-name-and-title">
      <h1 className= "my-name">{props.name}</h1>
      <p className="my-title">{props.title}</p>
      <h2>
        <a className="decoration" href="https://www.linkedin.com/in/saharafathelbab/"><i class="fab fa-linkedin"></i></a>
        &nbsp;&nbsp;
        <a className="decoration" href="https://twitter.com/SaharasDreams"><i class="fab fa-twitter-square"></i></a>
        &nbsp;&nbsp;
        <a className="decoration" href="https://saharasdreams.com"><i class="fab fa-blogger"></i></a>
        &nbsp;&nbsp;
       {/* <a className="decoration" href="https://youtube.com/saharadreams"><i class="fab fa-youtube"></i></a> */}
        <a className="decoration" href="mailto:saharafathelbab1@gmail.com"><i class="fas fa-paper-plane"></i></a>
      </h2>

    </div>
  )
};

export default sahara;

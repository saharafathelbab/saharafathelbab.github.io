import React from 'react';
import logo from './mylogo.jpg';
import myresume from './sahara-fathelbab-resume.pdf';
import me from './profilephoto.jpg';
import lightbulb from './Drawings/lightbulb.png';
import goldline from './Drawings/gold-line.png';
import message from './Drawings/space-message.png';
import hankandstellas from'./Work/hankandstellas.png';
import asme from'./Work/asme.png';
import portfolio from'./Work/myportfolio.png';
import instanthealth from'./Work/instanthealth.png';
import snowypotter from'./Work/snowypotter.jpeg';
import cryptography from'./Work/cryptography.png';
import chromefixme from'./Work/fixme-chrome.png';
import './bars.css';
import './Main.css';
import {slide as Menu} from 'react-burger-menu';
import Sahara from './Sahara/Sahara';
import About from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import Detail from './DetailedAbout/DetailedAbout';
import Section from './DetailedAbout/Sections';


function Main() {
  const CenterImage = (props) => (
    <div className={props.class}>
      <img id="square" src={props.photo} alt={props.alt}/>
    </div>
);
const LeadHeader = (props) => (
  <div className="center">
    <div className="Overlay">{props.title}</div>
      <h2 class="send-front">{props.small}</h2>
  </div>

);

const Button=(props)=> {
  return (
    <div>
      <form>
       <button type="submit" className={props.class} formaction={props.link}>{props.linkname}</button>
      </form>
    </div>
  )
};

  return (

    // <Menu customBurgerIcon={<img src={bars}/>} right>
    <div>
      <div className="background">

        <div className="container-for-logo">
          <a href = "/"><img className="mylogo" src={logo} alt="my logo is my initials SF"/></a>
        </div>

        <Menu right>
          <a id="small-ab" className= "menu-item" href="#a-small-about-me">Intro</a>

          <a id="mywork" className="menu-item" href="#all-my-work">My Work</a>
          <a id="large-about" className="menu-item" href="#more-about-me"> About Me</a>
          <a id="my-resume" className="menu-item" href={myresume}>My Resume</a>

          <a id="contact" className="menu-item" href="#contact-ME">Contact</a>
          <br/>
          <hr/>
          <a id="blog" className="menu-item" href="https://www.saharasdreams.com/"> My Blog</a>
          <a id="youtube" className="menu-item" href="https://youtube.com/saharasdreams"> My YouTube Channel </a>
        </Menu>

      </div>

      <div className="container-for-main-header-area">
        <Sahara name= "hi I'm Sahara. I write code and run a lot." title= "Front End Developer"/>

      </div>


      <div id="a-small-about-me" className="little-about-me">

        <About
        photo={lightbulb}
        id_image="square"
        alttext="lightbulb"
        idtitle="nope"
        id_para2="mobile_size"
        summary= "During the day I'm an inventive developer with a keen interest in all things from web development to Augmented and Virtual Reality. When I'm not brainstorming project ideas or reading through documentation, I'm speeding up on the track with the goal of running a 5K in 20 minutes!"
        fact= " Greater New York City Area"
        id_fact="fact"
        link="#more-about-me"
        name="Learn More"
        class="button-style"
        />
      </div>

      <CenterImage
        class="center"
        photo={goldline}
        alt="gold line"
        />

        <LeadHeader
          title="Projects"
          small="projects"
          />

      <div id="all-my-work" className="projects-section">

      <br/>
      <Projects
        id="nope"
        subtitle="Client Work"
      />
      <div className="grid">
      <About
        photo={hankandstellas}
        alttext="hank and stella's logo"
        id="grey"
        title="Hank & Stella's"
        summary= "Launched Hank & Stella's through Squarespace, ensured landing page accessibility, setup SEO, used industry best design practices to enhance interface usability while providing Squarespace training."
        id_para2="project-paragraph"
        link="https://hankandstellas.com"
        name="View Website"
        class="button-style"
        show="no-show"
      />
      <br/>
      <br/>
      <br/>
      <About
        photo={asme}
        alttext="asme homepage"
        id="grey"
        title="ASME"
        summary= "Ensured design continuity and link validity of American Society of Mechanical Engineers (ASME) website through their refurbishment period to a new content management system (Kentico); praised for detailed documentation."
        id_para2="project-paragraph"
        link="https://asme.org"
        name="View Website"
        class="button-style"
        show="no-show"
        />
      </div>
      <br/>
      <br/>
      <Projects subtitle="Personal Projects"/>
      <br/>

      <div className="grid">
      <About
        photo={portfolio}
        alttext="portfolio landing"
        id="grey"
        title="My Portfolio"
        technicalscope="Technical Scope: React.js, HTML, CSS, "
        summary= "Developed my portfolio in React.js using stateless functional components throughout to ensure DRY Principle; receives and renders appropriate data to screen via class and id hierarchy."
        id_para2="project-paragraph"
        link="https://github.com/saharafathelbab/saharafathelbab.github.io"
        name="View Documentation"
        class="button-style"
        show="no-show"
        />
      <br/>
      <br/>
      <br/>
      <About
        photo={snowypotter}
        alttext="augmented reality harry potter in snowman form"
        id="grey"
        title="Snowy Potter"
        technicalscope="Technical Scope: three.js, A-Frame, Glitch"
        summary= "Developed an Augmented Reality snowman in three.js framework, A-Frame, entity-component-system(ECS) architecture with container objects to envelop data containers. Integrated Quick Response (QR) code."
        id_para2="project-paragraph"
        link="https://github.com/saharafathelbab/Snowy-Potter"
        name="View Documentation"
        class="button-style"
        show="no-show"
        />
      <br/>
      <br/>
      <br/>
      <About
        photo={cryptography}
        alttext="photo of cryptography landing page"
        id="grey"
        title="Cryptography"
        technicalscope="Technical Scope: JavaScript, HTML, CSS"
        summary= "Established an advanced code and cipher system with asynchronous patterns of JavaScript that converts input into code; inspired by the book Code Girls, received positive feedback from author."
        id_para2="project-paragraph"
        link="https://github.com/saharafathelbab/Cryptography"
        name="View Documentation"
        class="button-style"
        show="no-show"
        />
        <br/>
        <br/>
        <br/>
        <About
          photo={instanthealth}
          alttext="instant health home photo"
          id="grey"
          title="Hackathon: Instant Health"
          technicalscope="Technical Scope: JavaScript, HTML, CSS"
          summary= "Partnered with team through the construction of wireframes and prototypes of a web application that displayed user's historical medical data. Received rank in the top four submissions of the healthcare category."
          id_para2="project-paragraph"
          link="https://github.com/saharafathelbab/Instant-Health"
          name="View Documentation"
          class="button-style"
          show="no-show"
          />
        <br/>
        <br/>
        <br/>
        <About
          photo={chromefixme}
          alttext="chrome extension icon - tools"
          id="grey"
          title="FixMe Chrome Extension"
          technicalscope="Technical Scope: JavaScript, jQuery, Chrome API"
          summary= "Developed an extension that improves the readability and accessibility of a website/page/article. The extension changes the background color, surrounding text, and link color."
          id_para2="project-paragraph"
          link="https://github.com/saharafathelbab/FixMe-Chrome-Extension"
          name="View Documentation"
          class="button-style"
          show="no-show"
          />
        </div>
      <br/>
      <br/>


      <Button
      link="https://github.com/saharafathelbab?tab=repositories"
      linkname="View More Personal Projects >"
      class="button-view-more"/>

      </div>

      <CenterImage
        class="center"
        photo={goldline}
        alt="gold line"
        />

      <LeadHeader
        title="About Me"
        small="about me"
        />

      <div id="more-about-me" className="detailed-about-me">

      <div className="little-about-me">

        <About
        photo={me}
        id_image="photo"
        alttext="me"
        idtitle="nope"
        id_para2="mobile_size"
        summary= "I graduated with my Bachelor’s Degree in Computer Science in May 2018 and since then I’ve been focused on my front end freelance work, learning new coding environments such as Augmented Reality, and improving my skillset."
        show= "no-show"
        link={myresume}
        name="My Resume"
        class="button-style"
        />
      </div>

        <CenterImage

          photo={goldline}
          alt="gold line"
          />

        <br/>
        <Section
          sectiontitle="Education"
          sectioninfo="Bachelor of Science in Computer Science, 2018"
        />
        <Section
          sectiontitle="Certifications"
          sectioninfo="Responsive Web Design, 2019"
          additionalinfo="JavaScript Algorithms and Data Structures, 2020"
        />
        <Section
          sectiontitle="Languages"
          sectioninfo="Vanilla JavaScript, HTML/CSS, Python, PHP, Java"
        />
        <Section
          sectiontitle="Framework/Libraries"
          sectioninfo="React.js, A-Frame, three.js"
        />
        <Section
          sectiontitle="Content Management Systems"
          sectioninfo="Kentico, WordPress, Squarespace"
        />
        <Section
          sectiontitle="My Tools"
          sectioninfo="Atom, Adobe XD, GitHub, MySQL"
        />

      </div>

      <div id="contact-ME" className="contact-me">
      <Detail
        image={message}
        id="message_square"
        alttext="space"
        about= "Let's Connect"
        summary= "In need of a front end developer who thinks outside of the box? Look no further, let's get chatting!"
      />
      <Button
      link="mailto:saharafathelbab1@gmail.com"
      linkname="Contact Me"
      class="contact-me-email"
      />
      </div>
    </div>
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>
  );
}

export default Main;

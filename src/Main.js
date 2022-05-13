import React from 'react';
import logo from './mylogo.jpg';
import myresume from './sahara-fathelbab-resume.pdf';
import me from './profilephoto.jpg';
import lightbulb from './Drawings/lightbulb.png';
import goldline from './Drawings/gold-line.png';
import message from './Drawings/space-message.png';
import hankandstellas from'./Work/hankandstellas.png';
import asme from'./Work/asme.png';
import codeHelp from'./Work/codeHelp.jpeg';
import scandiweb from'./Work/scandiweb.png';
import snowypotter from'./Work/snowypotter.jpeg';
import marvelBirthdays from'./Work/marvelBirthdays.png';
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
          {/* <a id="youtube" className="menu-item" href="https://youtube.com/saharasdreams"> My YouTube Channel </a> */}
        </Menu>

      </div>

      <div className="container-for-main-header-area">
        <Sahara name= "hi I'm Sahara. I write code and run a lot." title= "Software Engineer"/>

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
      <Projects subtitle="Pinned Projects on Github"/>
      <br/>

      <div className="grid">

      <About
        photo={marvelBirthdays}
        alttext="Birthday Reminder"
        id="grey"
        title="Birthday Reminder"
        technicalscope="Technical Scope: React.js, HTML, CSS, REST API JSON Server"
        summary= "Birthday Reminder project created originally by John Smilga with a few of my own modifications. Utilizing JSON Server, allows user to add and delete users from JSON file."
        id_para2="project-paragraph"
        link="https://github.com/saharafathelbab/birthday-reminder"
        name="View Files"
        class="button-style"
        show="no-show"
        />
      <br/>
      <br/>
      <br/>
      <About
        photo={scandiweb}
        alttext="Scandiweb"
        id="grey"
        title="Scandiweb Junior Test Assignment"
        technicalscope="Technical Scope: PHP, MySQL, JavaScript, HTML, CSS, Bootstrap"
        summary= "A user is able to add a new product to the MySQL Database, and  delete. Also able to view a list of all products in ascending order from the primary key, name. Logic for products on both add product page and product display page is polymorphism done in both JavaScript and PHP."
        id_para2="project-paragraph"
        link="https://github.com/saharafathelbab/Scandiweb"
        name="View Files"
        class="button-style"
        show="no-show"
        />
      <br/>
      <br/>
      <br/>
      <About
        photo={codeHelp}
        alttext="Coding Challenge Prep"
        id="grey"
        title="Coding Challenge Prep"
        technicalscope="Technical Scope: Python and JavaScript"
        summary= "To share with Discord group I created - if someone needs help solving a problem I solved, each code file has detailed comments to understand my thought process getting to the solution."
        id_para2="project-paragraph"
        link="https://github.com/saharafathelbab/coding-challenge-prep"
        name="View Files"
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
          name="View Files"
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
          name="View Files"
          class="button-style"
          show="no-show"
        />
        </div>
      <br/>
      <br/>


      <Button
      link="https://github.com/saharafathelbab?tab=repositories"
      linkname="View More Projects"
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
        summary= "Since graduating with my Bachelor’s Degree in Computer Science in May 2018, I’ve been focused on learning new coding environments such as Augmented Reality, and improving my skillset."
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
          sectiontitle="FreeCodeCamp Certifications"
          sectioninfo="Responsive Web Design, 2019"
          additionalinfo="JavaScript Algorithms and Data Structures, 2020"
        />
        <Section
          sectiontitle="Veeva Certifications"
          sectioninfo="Veeva Approved Email Business Certification, 2021"
          additionalinfo="Veeva CLM Business Certification, 2021"
        />
        <Section
          sectiontitle="Languages"
          sectioninfo="Vanilla JavaScript, HTML/CSS, Python, PHP, Java, SQL"
        />
        <Section
          sectiontitle="Framework/Libraries"
          sectioninfo="React.js, A-Frame, three.js, jQuery"
        />
        <Section
          sectiontitle="Content Management Systems"
          sectioninfo="Kentico, WordPress, Squarespace"
        />
        <Section
          sectiontitle="Technical Tools"
          sectioninfo="Atom, Visual Studio Code, Git, SourceTree, Google Web Designer, Veeva CRM Application, Salesforce"
        />
        <Section
          sectiontitle="Non-Technical Tools"
          sectioninfo="Photoshop, Adobe Illustrator, Adobe XD, Zeplin"
        />

      </div>

      <div id="contact-ME" className="contact-me">
      <Detail
        image={message}
        id="message_square"
        alttext="space"
        about= "Let's Connect"
        summary= "In need of a Developer who thinks outside of the box? Look no further, let's get chatting!"
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

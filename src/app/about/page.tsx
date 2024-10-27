import React from 'react';
import './about.css'; 

const About = () => {
  return (
    <section className="aboutMeSection">
      <div className="container">
        <div className="aboutText">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. 
            Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
          </p>
        </div>
        <div className="skills">
          <label>Html</label>
          <input type="range" min="0" max="100" value="90" readOnly />
          
          <label>CSS</label>
          <input type="range" min="0" max="100" value="85" readOnly />
          
          <label>Responsivness</label>
          <input type="range" min="0" max="100" value="65" readOnly />
          
          <label>React/NextJs</label>
          <input type="range" min="0" max="100" value="60" readOnly />
        </div>
      </div>
    </section>
  );
};

export default About;

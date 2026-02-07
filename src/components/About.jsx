import React from 'react';
import './About.css';

const About = () => {
  const team = [
    {
      id: 1,
      name: 'Jay',
      role: 'Full Stack Developer',
      image: 'src/images/jay.jpeg',
      description: 'With expertise in modern web technologies, Jay transforms complex ideas into elegant, performant solutions. Dedicated to writing clean code and delivering exceptional user experiences.'
    },
    {
      id: 2,
      name: 'Josh',
      role: 'UI/UX Designer',
      image: 'src/images/josh.jpeg',
      description: 'Josh brings designs to life with a keen eye for detail and user-centered thinking. Passionate about creating intuitive interfaces that blend aesthetics with functionality.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">Meet <span className="gradient-text">DanceCode</span></h2>
          <p className="section-description">
            We're a driven team of web professionals committed to delivering outstanding results. 
            By combining technical expertise with creative vision, we build websites that not only look remarkable but perform flawlessly.
          </p>
        </div>
        <div className="team-grid">
          {team.map((member, index) => (
            <div 
              key={member.id} 
              className="team-card"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="team-image-wrapper">
                <div className="team-image-border">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="team-image"
                  />
                </div>
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

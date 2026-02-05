import React from 'react';
import './About.css';

const About = () => {
  const team = [
    {
      id: 1,
      name: 'Developer 1',
      role: 'Full Stack Developer',
      image: 'https://via.placeholder.com/200/0a1128/00d9ff?text=Dev+1',
      description: 'Passionate about creating seamless user experiences.'
    },
    {
      id: 2,
      name: 'Developer 2',
      role: 'UI/UX Designer',
      image: 'https://via.placeholder.com/200/0a1128/0099ff?text=Dev+2',
      description: 'Bringing creative visions to life through code.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">Meet <span className="gradient-text">DanceCode</span></h2>
          <p className="section-description">
            We're a dynamic duo of passionate developers dedicated to crafting exceptional web experiences. 
            Our synergy brings together technical excellence and creative innovation.
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

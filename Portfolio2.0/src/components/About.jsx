import React from 'react';

function About() {
  return (
    <section id="about" className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 animate__animated animate__fadeInUp font-serif">
          About Me
        </h2>
        {/* Description */}
        <p className="text-lg leading-relaxed text-gray-700 mx-auto animate__animated animate__fadeInUp animate__delay-1s font-serif">
          I am a dedicated full-stack web developer. With a strong foundation in web development, I am currently working and upskilling with AlmaBetter as an SDE 1. I am committed to continuous learning and adapting to new technologies, making me versatile across various tech stacks. My passion for software development drives me to bring diligence, enthusiasm, and innovation to every opportunity.
        </p>
        
        {/* GitHub Contribution Graph */}
        <div className="my-8">
          <h3 className="text-3xl font-bold text-gray-700 mb-4">GitHub Statistics</h3>
          <img 
            src="https://github-readme-stats.vercel.app/api?username=Piysing14&show_icons=true&theme=gotham" 
            alt="GitHub Stats" 
            className="mx-auto" 
          />
        </div>
        <div className="my-8">
          <img 
            src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Piysing14&theme=gotham" 
            alt="GitHub Profile Summary" 
            className="mx-auto" 
          />
        </div>
      </div>
    </section>
  );
}

export default About;

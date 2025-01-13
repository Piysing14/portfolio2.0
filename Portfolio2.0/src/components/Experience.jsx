import React from "react";

function Experience() {
  const experiences = [
    {
      role: "HTML Developer",
      company: "Unicorn Denmart",
      duration: "04/2022 - 09/2022",
      location: "New Delhi",
    },
    {
      role: "Software Engineer",
      company: "Capgemini",
      duration: "10/2022 - 08/2024",
      location: "Gurugram, Haryana",
    },
    {
      role: "SDE 1",
      company: "AlmaBetter",
      duration: "08/2024 - Present",
      location: "Remote",
    },
  ];

  return (
    <section id="experience" className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-semibold mb-4 text-center text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 font-poppins animate__animated animate__fadeInUp font-serif">
          Experience
        </h2>
        <ul className="space-y-4">
          {experiences.map((experience, index) => (
            <li
              key={index}
              className="text-lg leading-relaxed text-gray-700 mx-auto animate__animated animate__fadeInUp animate__delay-1s font-serif"
            >
              {experience.role} at <b>{experience.company}</b> ({experience.duration}) ~{" "}
              <i>{experience.location}</i>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experience;

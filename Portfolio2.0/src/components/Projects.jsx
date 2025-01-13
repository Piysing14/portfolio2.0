import React from "react";

function Projects() {
  const projectList = [
    {
      title: "Tranquil-Trips",
      link: "https://tranquiltrips.onrender.com/listings",
      description: "This project is a web application replicating the core features of Airbnb using the MERN stack.",
      features: [
        "User Authentication with JWT",
        "Property Listings",
        "Review System for Properties",
        "Personalized User Profiles",
      ],
    },
    {
      title: "Todo-List",
      link: "https://todolist-g6q7.onrender.com/",
      description: "A modern, intuitive To-Do List application developed with React for managing tasks efficiently.",
      features: [
        "React Hooks for State Management",
        "Component-Based Architecture",
      ],
    },
    {
      title: "Weather App",
      link: "https://github.com/Piysing14/Weather-App-by-Piyush",
      description:
        "A Weather Application developed using React and integrated with the OpenWeatherMap API.",
      features: [
        "Dynamic Data Rendering",
        "Weather API Integration",
        "Asynchronous Operations",
      ],
    },
  ];

  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-semibold mb-4 text-center text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 font-poppins animate__animated animate__fadeInUp font-serif">
          Projects
        </h2>
        <div className="space-y-6">
          {projectList.map((project, index) => (
            <div key={index}>
              <h3 className="font-semibold">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-3xl font-serif"
                >
                  {project.title}
                </a>
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mx-auto animate__animated animate__fadeInUp animate__delay-1s font-serif">
                {project.description}
              </p>
              <ul className="list-disc pl-5">
                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-lg leading-relaxed text-gray-700 mx-auto animate__animated animate__fadeInUp animate__delay-1s font-serif"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="relative text-center py-16 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white"
    >
      <div className="mx-auto w-full max-w-4xl px-6">
        {/* Image */}
        <img
          src="https://lh3.googleusercontent.com/a/ACg8ocI4088zeboUib2NHcZJ_a-GKKHrWjMNb8_CvO8CieYStJdJLbE=s576-c-no"
          alt="Piyush Singh"
          className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full shadow-xl transform transition duration-500 hover:scale-110"
        />

        {/* Heading and Description */}
        <h1 className="text-4xl sm:text-5xl mt-6 font-bold animate__animated animate__fadeInUp">
          Hi, I’m{" "}
          <span className="text-purple-500 font-semibold">Piyush</span>
        </h1>
        <p className="mt-4 text-lg sm:text-2xl animate__animated animate__fadeInUp animate__delay-1s font-serif">
          Software Engineer | Full Stack Developer | Tech Enthusiast
        </p>
        <p className="text-blue-300 mt-2 text-lg animate__animated animate__fadeInUp animate__delay-2s">
          <i className="fas fa-map-marker-alt"></i> ⚲ Noida, UP, India
        </p>
        <p className="text-lg animate__animated animate__fadeInUp animate__delay-3s">
          Email:{" "}
          <a
            href="mailto:piyushkhati.dev@gmail.com"
            className="text-blue-500 hover:underline font-serif"
          >
            piyushkhati.dev@gmail.com
          </a>
        </p>
        <p className="text-lg animate__animated animate__fadeInUp animate__delay-4s">
          <a
            href="https://www.linkedin.com/in/piysing14"
            className="text-blue-500 hover:underline font-serif"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/Piysing14"
            className="text-blue-500 hover:underline font-serif"
          >
            GitHub
          </a>
        </p>

        {/* Resume Button */}
        <a
          href="Piyush Resume Capgemini.pdf"
          download
          className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-700 transform transition duration-200 hover:scale-105 font-serif"
        >
          Download Resume
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-4">
        <a
          href="https://www.instagram.com/piyushkhati14"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            className="w-10 h-10 rounded-full transition transform duration-300 group-hover:scale-125"
          />
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/piysing14"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <img
            src="https://imgs.search.brave.com/SQsaFNKXL9x2pacICOrPpnY5c1-Eee1Vf0jOmntInaM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
            alt="LinkedIn"
            className="w-10 h-10 rounded-full transition transform duration-300 group-hover:scale-125"
          />
        </a>
        <br />
        <a
          href="https://github.com/Piysing14"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <img
            src="https://imgs.search.brave.com/w5LFW4ei3PC6DUOkw2jcpG1OVDzoYhDqENlECFBWUg8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI0L0dpdGh1Yl9s/b2dvX3N2Zy5zdmc"
            alt="GitHub"
            className="w-10 h-10 rounded-full transition transform duration-300 group-hover:scale-125"
          />
        </a>
      </div>
    </section>
  );
}

export default Hero;

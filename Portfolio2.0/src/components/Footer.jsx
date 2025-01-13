import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="text-center">
        &copy; 2025 Made with <span className="text-red-500">&hearts;</span> by Piyush
      </div>
      <div className="flex items-center justify-center mt-4">
        <a href="https://www.instagram.com/piyushkhati14" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            className="w-7 h-7 hover:opacity-75 transition duration-300"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/piysing14"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4"
        >
          <img
            src="https://imgs.search.brave.com/SQsaFNKXL9x2pacICOrPpnY5c1-Eee1Vf0jOmntInaM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
            alt="LinkedIn"
            className="w-7 h-7 hover:opacity-75 transition duration-300"
          />
        </a>
        <a
          href="https://github.com/Piysing14"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4"
        >
          <img
            src="https://imgs.search.brave.com/w5LFW4ei3PC6DUOkw2jcpG1OVDzoYhDqENlECFBWUg8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI0L0dpdGh1Yl9s/b2dvX3N2Zy5zdmc"
            alt="GitHub"
            className="w-7 h-7 hover:opacity-75 transition duration-300"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

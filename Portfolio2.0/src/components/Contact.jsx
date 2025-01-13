import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-gray-100 to-indigo-50"
    >
      <div className="w-full max-w-md p-8 rounded-xl shadow-xl backdrop-blur-md bg-white/30">
        <h2 className="text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 font-poppins animate__animated animate__fadeInUp">
          Contact Me
        </h2>
        <p className="font-serif">Submit the form below to get in touch with me</p>
        <form
          id="contactForm"
          action="https://getform.io/f/aroomkmb"
          method="POST"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-100"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full mt-1 p-2 border border-transparent rounded-lg focus:ring-2 focus:ring-purple-400 shadow-md bg-white/70 text-gray-900"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-100"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full mt-1 p-2 border border-transparent rounded-lg focus:ring-2 focus:ring-purple-400 shadow-md bg-white/70 text-gray-900"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-100"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
              pattern="[0-9]+"
              className="w-full mt-1 p-2 border border-transparent rounded-lg focus:ring-2 focus:ring-purple-400 shadow-md bg-white/70 text-gray-900"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-100"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message"
              rows="4"
              required
              className="w-full mt-1 p-2 border border-transparent rounded-lg focus:ring-2 focus:ring-purple-400 shadow-md bg-white/70 text-gray-900"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:from-purple-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              Let’s Connect
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;

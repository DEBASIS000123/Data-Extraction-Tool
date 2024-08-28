import React from "react";

const Contact = () => {
  return (
    <div className="bg-indigo-600 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://example.com/path/to/your/logo.png" // Replace with your logo URL
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Contact Us
          </h2>
          <p className="mt-2 text-center text-sm text-gray-200">
            We’d love to hear from you! Fill out the form below and we’ll get
            back to you shortly.
          </p>
        </div>

        {/* Contact Form */}
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Your Message"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Decorative Image or Icons */}
        <div className="mt-10 flex items-center justify-center">
          <img
            className="w-48 h-48 object-cover"
            src="https://example.com/path/to/your/decorative-image.jpg" // Replace with a relevant image URL
            alt="Decorative"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

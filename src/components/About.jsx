import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-indigo-600">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Discover more about our journey, our team, and what drives us forward.
        </p>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 px-4 md:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Mission</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          At DataExtract, our mission is to empower businesses and individuals
          to unlock the full potential of their data through innovative natural
          language processing tools. We strive to provide accessible, accurate,
          and efficient solutions for text analysis and data extraction.
        </p>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Alice Johnson</h3>
            <p className="text-gray-500">CEO & Founder</p>
            <p className="mt-4 text-gray-600">
              Alice has over 10 years of experience in data science and NLP. She
              is passionate about making data accessible to everyone.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Bob Smith</h3>
            <p className="text-gray-500">Lead Engineer</p>
            <p className="mt-4 text-gray-600">
              Bob is a software engineer with a background in machine learning
              and AI. He loves solving complex problems with elegant code.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Carol Williams</h3>
            <p className="text-gray-500">Data Scientist</p>
            <p className="mt-4 text-gray-600">
              Carol specializes in NLP and data analytics. She enjoys
              transforming raw data into actionable insights.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-16 text-center bg-indigo-700 text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Join Us on Our Journey
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
          We are always looking for talented individuals who share our passion
          for data and innovation. Contact us to learn more about career
          opportunities at DataExtract.
        </p>
        <a
          href="/contact"
          className="bg-white text-indigo-700 px-8 py-3 rounded-md shadow-md hover:bg-indigo-600 hover:text-white transition duration-300"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default About;

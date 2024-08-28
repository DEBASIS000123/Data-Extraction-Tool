import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to DataExtract
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Extract valuable insights from your data with our state-of-the-art NLP
          tool. Effortlessly analyze and understand large volumes of text.
        </p>
        <Link
          to="/extract"
          className="bg-white text-indigo-600 px-6 py-3 rounded-md shadow-md hover:bg-indigo-600 hover:text-white transition duration-300"
        >
          Get Started
        </Link>
      </section>

      {/* Feature Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16 py-10">
        <div className="bg-white text-indigo-600 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Fast Processing</h2>
          <p>
            Our tool quickly analyzes text data to deliver actionable insights
            within seconds, saving you time and effort.
          </p>
        </div>
        <div className="bg-white text-indigo-600 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Accurate Analysis</h2>
          <p>
            Leverage the power of NLP to achieve highly accurate text analysis,
            ensuring reliable results every time.
          </p>
        </div>
        <div className="bg-white text-indigo-600 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Easy Integration</h2>
          <p>
            Integrate our tool seamlessly into your existing workflows with
            minimal setup and maximum efficiency.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Extract Data?</h2>
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

export default Home;

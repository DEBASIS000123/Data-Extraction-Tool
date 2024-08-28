import React, { useState } from "react";

const TextExtractionForm = () => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for the text extraction logic
    console.log("Text to extract:", inputText);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        rows="5"
        placeholder="Enter text to extract data from..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300"
      >
        Extract Data
      </button>
    </form>
  );
};

export default TextExtractionForm;

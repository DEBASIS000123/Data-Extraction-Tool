import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-grow container mx-auto p-4">{children}</main>
    </div>
  );
};

export default Layout;

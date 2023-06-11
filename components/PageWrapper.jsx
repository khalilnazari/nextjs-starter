import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <main>
      <div className="container mx-auto py-8">{children}</div>
    </main>
  );
};

export default PageWrapper;

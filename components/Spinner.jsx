import React from "react";
import PageWrapper from "./PageWrapper";

const Spinner = () => {
  return (
    <PageWrapper>
      <div className="min-h-[50vh] w-full flex items-center justify-center">
        <span className="text-2xl font-light">Loading...</span>
      </div>
    </PageWrapper>
  );
};

export default Spinner;

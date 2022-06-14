import React from "react";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";

function PageContent() {
  return (
    <>
      {/* Page content */}
      <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
        <Project />
        <About />
        <Contact />
        {/* End page content */}
      </div>
    </>
  );
}

export default PageContent;

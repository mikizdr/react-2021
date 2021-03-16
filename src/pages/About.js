import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h4>React version: {React.version}</h4>
      <Link to="/">Back</Link>
    </div>
  );
};

export default About;

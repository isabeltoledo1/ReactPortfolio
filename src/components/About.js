import React from "react";
import author from "../me.jpg";

const About = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="photo-wrap">
          <div className="col-lg-6 col-xs-12">
            <img className="profile-img" src={author} alt="author" />
          </div>
        </div>

        <div className="col-lg-6 col-xs-12">
          <h1>About Me</h1>
          <p>Hello! Nice to meet you and welcome to my page. </p>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import author from "../me.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="row">
        <div className="photo-wrap">
          <div className="col-lg-4 col-xs-12">
            <img className="profile-img" src={author} alt="author" />
          </div>
        </div>

        <div className="col-lg-6 col-xs-12">
          <h1>About Me</h1>
          <p>Hi! I'm Isabel, nice to meet you. Currently located in Salt Lake City, Utah. I am a full stack web developer student and am eager to jump into the world of web development. Learning about about web development has been a challenging yet rewarding journey and I am excited to see where this new road will take me. Check out my porfolio section to take a look at my recent work. </p>
        </div>
      </div>
    </div>
  );
};

export default About;

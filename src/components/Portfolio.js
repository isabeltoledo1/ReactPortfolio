import React from "react";
import notetaker from  "../images/notetaker.png";
import typecheck from  "../images/typecheck.png";
import weather from  "../images/weather.png";
import workday from  "../images/workday.png";


const Portfolio = () => {


return (
<div id = "portfolio" className = "portfolio-wrapper">
<div className = "container">
<h1 className = "text=uppercase text-center py-5 ">My Recent Work</h1>
<div className = "image-box-wrapper row justify-content-center">
<div className = "portfolio-image-box">
<img className = "portfolio-image" src = {notetaker} alt= "notetaker app"/>
<a className="nav-link" href="https://github.com/isabeltoledo1/IsabelToledo-NoteTaker">Source Code</a>
<a className="nav-link" href="https://young-springs-50574.herokuapp.com/">Deployed App</a>
<div className ="overflow"></div>
</div>



<div className = "portfolio-image-box">
<img className = "portfolio-image" src = {typecheck} alt= "typecheck app"/>
<a className="nav-link" href="https://github.com/IsraaBeseiso/TypeCheck#Instructions">Source Code</a>
<a className="nav-link" href="https://typingcheck.herokuapp.com/">Deployed App</a>
<div className ="overflow"></div>
</div>


<div className = "portfolio-image-box">
<img className = "portfolio-image" src = {weather} alt= "weather app"/>
<a className="nav-link" href="https://github.com/isabeltoledo1/IsabelToledo-WeatherDashboard">Source Code</a>
<a className="nav-link" href="https://isabeltoledo1.github.io/IsabelToledo-WeatherDashboard/">Deployed App</a>
<div className ="overflow"></div>
</div>


<div className = "portfolio-image-box">
<img className = "portfolio-image" src = {workday} alt= "workday app"/>
<a className="nav-link" href="https://github.com/isabeltoledo1/IsabelToledo-DayPlanner">Source Code</a>
<a className="nav-link" href="https://isabeltoledo1.github.io/IsabelToledo-DayPlanner/">Deployed App</a>
<div className ="overflow"></div>


</div>
</div>
</div>


</div>



    )
}

export default Portfolio;
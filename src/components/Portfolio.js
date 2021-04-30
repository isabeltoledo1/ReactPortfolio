import React from "react";
import notetaker from  "../images/notetaker.png";
import typecheck from  "../images/typecheck.png";
import weather from  "../images/weather.png";
import workday from  "../images/workday.png";


const Portfolio = () => {


return (
<div className = "portfolio-wrapper">
<div className = "container">
<h1 className = "text=uppercase text-center py-5">My Recent Work</h1>
<div className = "image-box-wrapper row justify-content-center">
<div className = "portfolio-image-box">
<img className = "portfolio-image" src = {notetaker} alt= "notetaker app"/>
<div className ="overflow"></div>
</div>



<div className = "portfolio-image-box">
<img className = "portfolio-image" src = {typecheck} alt= "typecheck app"/>
<div className ="overflow"></div>
</div>


<div className = "portfolio-image-box">
<img className = "portfolio-image" src = {weather} alt= "weather app"/>
<div className ="overflow"></div>
</div>


<div className = "portfolio-image-box">
<img className = "portfolio-image" src = {workday} alt= "workday app"/>
<div className ="overflow"></div>


</div>
</div>
</div>


</div>



    )
}

export default Portfolio;
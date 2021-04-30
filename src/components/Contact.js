import React from "react";

const Contact = () => {
  return (
    <div id = "contact" className="contacts">
      <div className="text-center">
        <h1>Contact Me</h1>

        <p>Phone: 801-589-8107 Email: isabeltoledo9@gmail.com</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12">

            <input 
            id = "name"
            type="text"
            className="form-control" 
            placeholder="Name" 
            name="name" />

            <input
            id = "phone"
            type ="text"
              className="form-control"
              placeholder="Phone Number"
              phone="phone"
            />

            <input 
            id ="email"
             type= "email"
            className="form-control" 
            placeholder="Email" 
            email="email" />

            <input
            id = "subject"
             type= "text"
              className="form-control"
              placeholder="Subject"
              subject="subject"
            />
              <button className = "btn-main-offer contact-btn" type = "submitt"> Contact Me</button>
          </div>
         
         
          </div>
        </div>
      </div>
    
  );
};

export default Contact;

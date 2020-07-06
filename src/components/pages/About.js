import React from 'react';
import harsh from './1.jpg';

const About = ( )=>
{
  return(
    <>
    <div className="about-section">
  <h1>About Us Page</h1>
</div>
<div className="col-md-4 col-10 mx-auto">

   <div className="card" >
   <img src={harsh} className="card-img-top" alt="hello" />
   <div className="card-body">
   <h5 className="card-title">Harshit Gupta</h5>
   <p className="card-text">Web Developer</p>
    <p className="card-text">Contact Number: 9818767730</p>
    <p className="card-text">guptaji6489@gmail.com</p>
   </div>
   </div>

   </div>
    </>


  )
}

export default About;

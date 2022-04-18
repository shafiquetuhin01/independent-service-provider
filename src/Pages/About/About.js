import React from "react";
import image from "../../../src/Images/shafique.jpeg";
const About = () => {
  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <h2 className="text-info text-center">Personal Information</h2>
      <div className="d-flex justify-content-center">
        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src={image} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Name: Md Shafiqul Islam</h5>
            <h6 class="card-title">Ocupation: Web Designer</h6>
            <h6 class="card-title">Location: Dhaka, Bangladesh</h6>
            <small class="card-title">Contact No: 01678042832 (WhatsApp)</small>
            <a href="#" class="btn btn-primary w-100">
              Details Information
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

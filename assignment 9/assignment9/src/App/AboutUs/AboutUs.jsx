import React from "react";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2 className="mb-4">About Us</h2>
        <div className="row">
          <div className="col-md-4">
            <Card color="#32a852" text="About Our Company" />
          </div>
          <div className="col-md-8">
            <div className="card p-4 bg-light">
              <h5 className="card-title mb-3">Welcome to our Job Portal!</h5>
              <p className="card-text mb-4">
                We strive to connect talented individuals with top-notch
                companies offering a diverse range of job opportunities. Our
                platform simplifies the job search process, providing access to
                various job listings, resources, and insights to help you land
                your dream job.
              </p>
              <p className="card-text mb-4">
                Whether you're a seasoned professional or just starting your
                career journey, our platform caters to all your job search
                needs. We value diversity, excellence, and innovation, aiming to
                bridge the gap between job seekers and employers.
              </p>
              <p className="card-text mb-0">
                Join us and explore endless career possibilities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

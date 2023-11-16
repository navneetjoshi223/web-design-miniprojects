// /src/components/Jobs/Jobs.js
import React from "react";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";

const Jobs = () => {
  const jobDetails = [
    {
      id: 1,
      title: "Software Engineer",
      description:
        "Developing and maintaining software applications, writing code, debugging, and testing.",
    },
    {
      id: 2,
      title: "Data Scientist",
      description:
        "Analyzing and interpreting complex data sets, creating models, and providing data-driven solutions.",
    },
    {
      id: 3,
      title: "Web Developer",
      description:
        "Building user-friendly and responsive web applications, using frontend and backend technologies.",
    },
    {
      id: 4,
      title: "Network Engineer",
      description:
        "Designing, implementing, and managing computer networks, ensuring functionality and security.",
    },
    {
      id: 5,
      title: "Cybersecurity Analyst",
      description:
        "Protecting computer systems and networks from cyber threats, monitoring security measures.",
    },
    {
      id: 6,
      title: "AI/Machine Learning Engineer",
      description:
        "Developing AI and machine learning algorithms, implementing and optimizing models.",
    },
  ];

  return (
    <div>
      <Navbar />
      <h2 className="m-3">Jobs</h2>
      <p className="lead m-3">
        Explore our diverse job offerings across various technical domains. From
        software development to data science, we have opportunities for tech
        enthusiasts.
      </p>
      <div className="row m-2">
        {jobDetails.map((job) => (
          <div className="col-md-4 mb-4" key={job.id}>
            <Card
              color="#2f4abf"
              text={job.title}
              description={job.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;

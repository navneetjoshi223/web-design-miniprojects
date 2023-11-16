import React from 'react';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  const items = [
    {
      title: 'Our Services',
      description: 'Explore our wide range of services designed to meet your needs.',
    },
    {
      title: 'Products List',
      description: 'Check out our diverse list of high-quality products available for you.',
    },
    {
      title: 'Our Team',
      description: 'Meet our dedicated and talented team working behind the scenes.',
    },
    {
      title: 'Subscriptions',
      description: 'Discover subscription plans tailored to enhance your experience.',
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2 className="mb-4">Welcome to the Home Page</h2>
        <div className="row">
          {items.map((item, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <Card color="#FF6663" text={item.title}></Card>
              <p className="card-text mt-3">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

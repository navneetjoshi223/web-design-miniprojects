import React from 'react';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Welcome to Home Page</h2>
        <div className="row">
          {items.map((item, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <Card color="#FF6663" text={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

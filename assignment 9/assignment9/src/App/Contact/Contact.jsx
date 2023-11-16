import React from 'react';
import Navbar from '../Navbar/Navbar';
import Card from '../Card/Card';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2 className='m-3'>Contact Us</h2>
        <div className="row">
          <div className="col-md-6">
            <Card color="#ab32a8" text="Contact details"></Card>
          </div>
          <div className='col-md-6'>
          <p className="card-text">For inquiries and support, contact us at:</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Email: contact@example.com</li>
                <li className="list-group-item">Phone: +1234567890</li>
                <li className="list-group-item">Address: 123 Street, City, Country</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

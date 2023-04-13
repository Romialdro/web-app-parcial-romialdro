import React, { Fragment } from 'react';
export default function Footer() {
  return (
    <Fragment>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>About Us</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium convallis neque, vitae tincidunt turpis venenatis vel. Sed viverra est vel nisi aliquet ultrices.</p>
            </div>
            <div className="col-md-4">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Contact Us</h4>
              <p>123 Main St<br />New York, NY 10001<br />Email: info@example.com<br />Phone: (555) 555-5555</p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

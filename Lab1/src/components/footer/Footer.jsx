import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
      <footer className="bg-dark text-light">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <h5>Contact Us</h5>
              <p>Email: omniagad25&#64;gmail.com</p>
            </div>
            <div className="col-md-6">
              <h5>Follow Us</h5>
              <ul className="list-unstyled d-flex">
                <li className="mx-2">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li className="mx-2">
                  <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li className="mx-2">
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  
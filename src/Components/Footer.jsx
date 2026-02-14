import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <div className="bg-dark">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-light text-decoration-none lh-1">
            <span className="fw-bold">Store Market</span>
          </a>
          <span className="text-light">© 2026 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-light" href="#">
              <i className="bi bi-twitter"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-light" href="#">
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-light" href="#">
              <i className="bi bi-facebook"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
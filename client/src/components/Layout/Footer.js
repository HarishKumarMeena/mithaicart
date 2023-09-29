import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer fixed-bottom">
      {/* <div className="container footer-content"> */}
        <h1 className="text-center">All Right Reserved &copy; <a href="https://www.linkedin.com/in/pravin-pilodiya-998909255">PRAVIN PILODIYA</a></h1>
        <p className="text-center mt-3">
          <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
          <Link to="/policy">Privacy Policy</Link>
        </p>
      {/* </div> */}
    </div>
  );
};

export default Footer;

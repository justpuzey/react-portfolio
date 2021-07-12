import React from "react";
import github from "../../assets/images/gitHub.png"
import linkedin from "../../assets/images/linkedin-icon.png"
import overflow from "../../assets/images/overflow.png"
// import { Link } from "react-router-dom";
// import "./footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="uk-contianer uk-flex uk-flex-column uk-flex-middle">
        <div>
          <a href="https://github.com/justpuzey"><img src={github} style={{ height: "25px", margin: "5px" }} /></a>
          <a href="https://www.linkedin.com/in/puzey/"><img src={linkedin} style={{ height: "25px", margin: "5px" }} /></a>
          <a href=" https://stackexchange.com/users/20587480/justin-puzey"><img src={overflow} style={{ height: "25px", margin: "5px" }} /></a>

        </div>
        <div className="copyright uk-text-small">
          © 2021 Justin Puzey
        </div>
      </div>
    </footer>
  );
}

export default Footer;
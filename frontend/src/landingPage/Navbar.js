import React from "react";
import "./styleMain.css";
import { Link } from "react-router-dom"; // Assuming you have a CSS file for styling

function NavBar() {
  return (
  
      <nav class="navbar navbar-expand-lg border-bottom  ">
        <div class="container-fluid">
          <Link class="navbar-brand p-3 mx-5" to="/">
             <img
              src="media/images/logo.svg"
              alt="Logo"
              style={{ width: "30%" }}
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
        <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav linkList me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/signup">
                  SignUp
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about" >
                  About
                </Link>
              </li>  
              <li class="nav-item ">
                <Link class="nav-link" to="/product">
                  Product
                </Link>
              </li> 
              <li class="nav-item">
                <Link class="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li> 
              <li class="nav-item">
                <Link class="nav-link" to="/support">
                  Support
                </Link>
              </li>         
            </ul>
          </div>
        </div>
      </nav>

  );
}

export default NavBar;

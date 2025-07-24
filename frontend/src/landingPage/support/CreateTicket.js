import React from "react";
import "./supportStyle.css";

function CreateTicket() {
  let linkStyle = {
    textDecoration: "none",
    lineHeight: "2.1rem",
  };
  return (
    <div className="container">
      <h3 className="mt-5">To create a ticket, select a relevant topic</h3>

      <div className="row  mt-5 ">
        <div className="col-4 ">
          <h5 className="mb-4">
            <i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h5>
          <a href="/" style={linkStyle}>
            Resident individual
          </a>
          <br />
          <a href="/" style={linkStyle}>
            Minor
          </a>
          <br />
          <a href="/ " style={linkStyle}>
            Non Resident Indian (NRI)
          </a>
          <br />
          <a href="/" style={linkStyle}>
            Company, Partnership, HUF and LLP
          </a>
          <br />
          <a href="/" style={linkStyle}>
            Glossary
          </a>
          <br />
        </div>

        <div className="col-4">
          <h5 className="mb-4">
            <i class="fa-solid fa-user"></i> Your Zerodha Account
          </h5>
          <a href="/" style={linkStyle}>
            Your Profile
          </a>
          <br />
          <a href="/" style={linkStyle}>
            Account modification{" "}
          </a>
          <br />
          <a href="/ " style={linkStyle}>
            Client Master Report (CMR) and Depository Participant
          </a>
          <br />
          <a href="/" style={linkStyle}>
            Nomination
          </a>
          <br />
          <a href="/" style={linkStyle}>
            Transfer and conversion of securities{" "}
          </a>
          <br />
        </div>

        <div className="col-4">
          <h5 className="mb-4">
            <i class="fa-solid fa-chart-column"></i> Kite
          </h5>
          <a href="/" style={linkStyle}>
            IPO
          </a>
          <br />
          <a href="/" style={linkStyle}>
            Trading FAQs
          </a>
          <br />
          <a href="/ " style={linkStyle}>
            Margin Trading Facility (MTF) and Margins
          </a>
          <br />
          <a href="/" style={linkStyle}>
            Charts and orders
          </a>
          <br />
          <a href="/" style={linkStyle}>
            Alerts and Nudges
          </a>
          <br />{" "}
          <a href="/" style={linkStyle}>
            General
          </a>
        </div>
      </div>

      <div className="row  " style={{ marginTop: "4rem" }}>
        <div className="col-4">
          <h5 className="mb-4">
            <i class="fa-solid fa-indian-rupee-sign"></i> Funds
          </h5>
          <a href="/" style={linkStyle}>
            Add money
          </a>
          <br />
          <a href="/" style={linkStyle}>
            Withdraw money
          </a>
          <br />
          <a href="/ " style={linkStyle}>
            Add bank accounts
          </a>
          <br />
          <a href="/" style={linkStyle}>
            eMandates
          </a>

          <br />
        </div>

        <div className="col-4">
          <h5 className="mb-4">
           <i class="fa-solid fa-at"></i> Console
          </h5>
          <a href="/" style={linkStyle}>
            Portfolio
          </a>
          <br />
          <a href="/" style={linkStyle}>
            Corporate actions
          </a>
          <br />
          <a href="/ " style={linkStyle}>
            Funds statement
          </a>
          <br />
          <a href="/" style={linkStyle}>
            Reports
          </a>
          <br />
          <a href="/" style={linkStyle}>
            Profile
          </a>
          <br />
          <a href="/" style={linkStyle}>
            Segments
          </a>
        </div>

        <div className="col-4">
          <h5 className="mb-4">
            <i class="fa-solid fa-coins"></i> Coin
          </h5>
          <a href="/" style={linkStyle}>
            Mutual funds
          </a>
          <br />
          <a href="/" style={linkStyle}>
            National Pension Scheme (NPS)
          </a>
          <br />
          <a href="/ " style={linkStyle}>
            Fixed Deposit (FD)
          </a>
          <br />
          <a href="/" style={linkStyle}>
            Features on Coin
          </a>
          <br />
          <a href="/" style={linkStyle}>
            Payments and Orders
          </a>
          <br />
          <a href="/" style={linkStyle}>
            General
          </a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;

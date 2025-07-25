import React from "react";
import "./styleMain.css"; // Assuming you have a CSS file for styling

function Footer() {
  return (
    <footer
      className=" text-center py-3 border-top mt-5"
      style={{ backgroundColor: "rgb(240, 240, 240)" }}
    >
      <div className="container mt-4" style={{ width: "75%", margin: "auto" }}>
        <div className="row">
          <div className="col-3">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              style={{ width: "50%" }}
            />
            <p className="mt-4">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
            <div className="social-icons">
              <a href="/google.com" className="me-2">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="/google.com" className="me-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/google.com" className="me-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/google.com" className="me-2">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="/google.com" className="me-2">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="col-3 footer-links">
            <p>Company</p>
            <a href="/google.com">About</a>
            <br />
            <a href="/google.com">Products</a>
            <br />
            <a href="/google.com">Pricing</a>
            <br />
            <a href="/google.com">Referral programme</a>
            <br />
            <a href="/google.com">Careers</a>
            <br />
            <a href="/google.com">Zerodha.tech</a>
            <br />
            <a href="/google.com">Press & media</a>
            <br />
            <a href="/google.com">Zerodha cares (CSR)</a>
            <br />
          </div>
          <div className="col-3 footer-links">
            <p>Support</p>
            <a href="/google.com">Contact</a>
            <br />
            <a href="/google.com">Support portal</a>
            <br />
            <a href="/google.com">Z-Connect blog</a>
            <br />
            <a href="/google.com">List of charges</a>
            <br />
            <a href="/google.com">Downloads & resources</a>
            <br />
          </div>
          <div className="col-3 footer-links">
            <p>Account</p>
            <a href="/google.com">Open an account</a>
            <br />
            <a href="/google.com">Fund transfer</a>
            <br />
            <a href="/google.com">60 day challenge</a>
            <br />
          </div>
        </div>
      </div>
      <div
        className="paraContainer text-muted "
        style={{ fontSize: "0.7rem ", lineHeight: "1.5rem" , width: "75%", margin: "auto" }}
      >
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
          Registration no.: INZ000038238 Registered Address: Zerodha Broking
          Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
          School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
          any complaints pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
        </p>

        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>

        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>

        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          create a ticket here.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

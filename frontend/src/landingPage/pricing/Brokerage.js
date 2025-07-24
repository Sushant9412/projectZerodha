import React from "react";

function Brokerage() {
  return (
    <div className="container border-top " style={{marginTop:"7rem"}}>
      <div
        className="row text-center mt-5 mb-5  "
        style={{ paddingTop: "2rem" }}
      >
        <div className="col-6">
          <h4 style={{ color: "rgb(56, 126, 209)" }}>Brokerage</h4>

          <ul
            className="text-muted mt-5"
            style={{
              textAlign: "left",
              marginLeft: "5rem",
              lineHeight: "2.2rem",
            }}
          >
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-6">
          <h4 style={{ color: "rgb(56, 126, 209)" }}>List</h4>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;

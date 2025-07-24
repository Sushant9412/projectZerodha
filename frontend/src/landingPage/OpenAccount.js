import React from "react";

function OpenAccount() {
  return (
    <>
      <div className="container  text-center mt-2 mb-5 p-3">
        <h1 className="mt-5 statsFont">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="btn btn-primary signUpButton mt-2 fs-10 "
          style={{ width: "10%", margin: "0 auto" }}
        >
          Sign Up Now
        </button>
      </div>
    </>
  );
}

export default OpenAccount;

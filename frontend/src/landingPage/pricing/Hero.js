import React from "react";

function Hero() {
    let styles = {
        width: "80%",

    }

    let paragraphStyles = {
        fontSize: "1rem",
        marginTop: "2rem",
        padding:"0.5rem"
    }
  return (
    <div className="container">
      <div className="row text-center mt-4 mb-5 ">
        <h2 className="mt-5">Charges</h2>
        <h6 className="text-muted mt-3 mb-5" style={{ fontSize: "1.2rem" }}>
          Free equity investments and flat ₹20 traday and F&O trades
        </h6>
      </div>

      <div
        className="row text-center  mt-5 mb-5 "
        style={{ width:"83%" , margin:"0 auto" }}
      >
        <div className="col-4 text-center mt-5" >
          <img
            src="/media/images/pricingEquity.svg"
            alt="pricing"
            className="img-fluid"
            style={styles}
          />
          <h3 className="mt-3">Free equity delivery</h3>
          <p className="text-muted" style={paragraphStyles}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 text-center  mt-5">
          <img
            src="/media/images/intradayTrades.svg"
            alt="pricing"
            className="img-fluid"
            style={styles}
          />
          <h3 className="mt-3">Intraday and F&O trades</h3>
          <p className="text-muted" style={paragraphStyles}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 text-center  mt-5">
          <img
            src="/media/images/pricingEquity.svg"
            alt="pricing"
            className="img-fluid"
            style={styles}
          />
          <h3 className="mt-3">Free direct MF</h3>
          <p className="text-muted" style={paragraphStyles}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

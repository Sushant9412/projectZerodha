import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="team-container">
      <div className="row text-center border-top">
        <h1 className="text-muted mt-5">People</h1>
      </div>
      <div
        className="row mt-3 p-5 mb-5 "
        style={{
          width: "75%",
          margin: "auto",
          fontSize: "1.1rem",
          lineHeight: "2.1rem",
        }}
      >
        <div className="col-6 text-center p-5 mx-auto">
          <img
            src="/media/images/nithinKamath.jpg"
            alt="Team"
            style={{ width: "74%", borderRadius: "100%" }}
          />
          <h1 className="fs-3 mt-4 text-muted">Nithin Kamath</h1>
          <p className="fs-6 mt-1 text-muted">Founder & CEO</p>
        </div>

        <div className="col-6 mt-5 p-3 fs-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p >Connect on
            <Link style={{textDecoration:"none"}}  to={"https://nithinkamath.me/"}> Homepage </Link>/
            <Link style={{textDecoration:"none"}}  to={"https://tradingqna.com/u/nithin/summary"}> TradingQnA </Link>/
            <Link style={{textDecoration:"none"}}  to={"https://tradingqna.com/u/nithin/summary"}> Twitter </Link>  </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

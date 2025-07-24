import React from "react";
import "./supportStyle.css";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="supportWrapper ">
        <h3 className="mt-5">Support Portal</h3>
        <a href="/" className="mt-5">
          Track Tickets
        </a>
      </div>


      <div className="row p-5 ">
s
        <div className="col-6" id="row1" style={{ width: "40%",
     marginLeft: "7rem"}} >
          <h4>Search for an answer or browse help topics to create a ticket</h4>

          <input placeholder="Eg. how do I activate F&O" />
          <br />

          <a href="/">Track account opening</a>
          <a href="/">Track segment activation</a>
          <a href="/">Intraday margins</a><br/>
          <a href="/">Kite user manual</a>
        </div>


        <div className="col-6 " style={{ width: "30%",
     marginLeft: "10rem"}} >
          <h4>Feature</h4>
          <ol>
            <li>
              <a href="/">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="/">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>

        </div>
      </div>
    </section>
  );
}

export default Hero;

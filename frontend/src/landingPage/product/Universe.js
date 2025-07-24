import React from "react";
import "./buttonStyle.css"; // Assuming you have a CSS file for button styles

function Universe() {
  const styles = {
    fontSize: "0.8rem",
    width: "80%",
    margin: "0 auto",
    marginBottom: "2rem",
    marginTop: "1.5rem",
    color: "#6c757d",
    lineHeight: "1.4rem",
  };

  const buttonStyles = {
    width: "20%",
    margin: "0 auto",
    backgroundColor: "#387ed1",
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = "black";
  };
  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "#387ed1";
  };

  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className=" fs-1 mt-5 ">The Zerodha Universe</h1>
        <p className=" mt-3 mb-5 ">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div
        className="row text-center mt-5"
        style={{ width: "85%", margin: "0 auto" }}
      >
        <div className="col-4 ">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Console"
            style={{ width: "50%" }}
          />
          <p style={styles}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 ">
          <img
            src="media/images/streakLogo.png"
            alt="Console"
            style={{ width: "40%" }}
          />
          <p style={styles}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>{" "}
        </div>

        <div className="col-4 ">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Console"
            style={{ width: "50%", height: "30%" }}
          />
          <p style={styles}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>{" "}
        </div>
      </div>

      <div
        className="row text-center mt-5"
        style={{ width: "85%", margin: "0 auto" }}
      >
        <div className="col-4 ">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Console"
            style={{ width: "55%" }}
          />
          <p style={styles}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>{" "}
        </div>

        <div className="col-4 ">
          <img
            src="media/images/dittoLogo.png"
            alt="Console"
            style={{ width: "30%", height: "30%" }}
          />
          <p style={styles}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 ">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Console"
            style={{ width: "50%" }}
          />
          <p style={styles}>
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <button
          className="btn btn-primary hoverClass mt-2 fs-10 p-2 "
          style={buttonStyles}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          SignUp Now
        </button>
      </div>
    </div>
  );
}

export default Universe;

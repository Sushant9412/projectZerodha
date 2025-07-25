import React from "react";
import "./font.css";
import "./style.css";

function Stats() {
  return (
    <>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-6 p-5 ">
            <h1 className="statsFont mt-5 mb-5">Trust with confidence</h1>
            <h3 className="statsFont mt-4 ">Customer-first always</h3>
            <p className="text-muted">
              That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh
              crores worth of equity investments.
            </p>

            <h3 className="statsFont mt-4  ">No spam or gimmicks</h3>
            <p className="text-muted">
              {" "}
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>

            <h3 className="statsFont mt-4  ">The Zerodha universes</h3>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>

            <h3 className="statsFont mt-4  ">Do better with money</h3>
            <p className="text-muted">
              {" "}
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>

          <div className="col-6 p-5">
            <img
              src="media/images/ecosystem.png"
              alt="stats"
              style={{ width: "90%" }}
            />
            <div className="text-center mt-5">
              <a href="./Hero.js" className="anchorTags mx-5">
                Explore our products <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a href="./Hero.js" className="anchorTags mx-5">
                Try Kite demo <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;

import React from "react";

function LeftSection({
  imgUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container  ">
      <div className="row p-4 ">
        <div className="col-7 mt-5 p-5">
          <img src={imgUrl} alt={productName} style={{ marginLeft: "4rem" }} />
        </div>
        <div className="col-5 mt-5  p-5">
          <h1 className="p-3" style={{ marginTop: "4rem", fontSize: "3rem" }}>
            {productName}
          </h1>
          <p className="text-muted p-3">{productDescription}</p>

          <div className="links mb-4">
            {tryDemo ? (
              <a
                href={tryDemo}
                style={{ marginLeft: "1rem", marginRight: "7rem" ,textDecoration: 'none' }}
              >
                {tryDemo}
                <i class="fa-solid fa-arrow-right mx-2" style={{fontSize:"0.9rem"}}></i>
              </a>
            ) : null}
            {learnMore ? (
              <a href={learnMore} style={{textDecoration: 'none'}}>
                {learnMore}
                <i class="fa-solid fa-arrow-right mx-2" style={{fontSize:"0.9rem"}}></i>
              </a>
            ) : null}
          </div>
          <div className="app-links">
            <a
              href={googlePlay}
              style={{ marginLeft: "1rem", marginRight: "2rem" }}
            >
              <img src="/media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore}>
              <img src="/media/images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;

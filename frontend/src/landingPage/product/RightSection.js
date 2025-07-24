import React from "react";

function RightSection({ imgUrl, productName, productDescription, learnMore }) {
  return (
    <div className="container">
      <div className="row p-4">
        <div className="col-5 mt-5  p-5">
          <h1 className="p-3" style={{ marginTop: "4rem", fontSize: "3rem" }}>
            {productName}
          </h1>
          <p className="text-muted p-3">{productDescription}</p>

          {learnMore ? (
            <a href={learnMore} style={{ marginLeft: "1rem" ,textDecoration: 'none' }}>
              {learnMore}  <i class="fa-solid fa-arrow-right mx-2" style={{fontSize:"0.9rem"}}></i>
            </a>
          ) : null}
        
        </div>
        <div className="col-7 mt-5 p-5">
          <img src={imgUrl} alt={productName} style={{ marginLeft: "4rem" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;

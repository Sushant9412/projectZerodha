import React from "react";

function AllTeam() {
  return (
    <div className="all-team-container mb-5">
      <div
        className="row text-center  "
        style={{
        
          width: "75%",
          margin: "auto",
          fontSize: "1.1rem",
          lineHeight: "2.1rem",
        }}
      >
        <div className="col-4 " > 
          <img
            src="/media/images/AllTeams/nikhil.png"
            alt="Nithin Kamath"
            style={{ width: "55%", borderRadius: "100%" ,height: "65%"}}
          />
          <h1 className="fs-3 mt-4 text-muted">Nikhil Kamath</h1>
          <p className="fs-6 mt-1 text-muted">Co-founder & CFO</p>
        </div>
        <div className="col-4">
          <img
            src="/media/images/AllTeams/kailsah.png"
            alt="Nithin Kamath"
            style={{ width: "55%", borderRadius: "100%" ,height: "65%"}}
          />
          <h1 className="fs-3 mt-4 text-muted">Dr. Kailash Nadh</h1>
          <p className="fs-6 mt-1 text-muted">CTO</p>
        </div>
        <div className="col-4">
          <img
            src="/media/images/AllTeams/venu.png"
            alt="Nithin Kamath"
            style={{ width: "55%", borderRadius: "100%" ,height: "65%"}}
          />
          <h1 className="fs-3 mt-4 text-muted">Venu Madhav</h1>
          <p className="fs-6 mt-1 text-muted">COO</p>
        </div>
      </div>



      <div
        className="row mt-5 text-center "
        style={{
          width: "75%",
          margin: "auto",
          fontSize: "1.1rem",
          lineHeight: "2.1rem",
        }}
      >
        <div className="col-4  ">
          <img
            src="/media/images/AllTeams/hanan.png"
            alt="Nithin Kamath"
             style={{ width: "55%", borderRadius: "100%" ,height: "65%"}}
          />
          <h1 className="fs-3 mt-4 text-muted">Hanan Delvi</h1>
          <p className="fs-6 mt-1 text-muted">CCO</p>
        </div>
        <div className="col-4">
          <img
            src="/media/images/AllTeams/seema.png"
            alt="Nithin Kamath"
            style={{ width: "55%", borderRadius: "100%" ,height: "65%"}}
          />
          <h1 className="fs-3 mt-4 text-muted">Seema Patil</h1>
          <p className="fs-6 mt-1 text-muted">Director</p>
        </div>
        <div className="col-4">
          <img
            src="/media/images/AllTeams/kartik.png"
            alt="Nithin Kamath"
             style={{ width: "55%", borderRadius: "100%" ,height: "65%"}}
          />
          <h1 className="fs-3 mt-4 text-muted">Karthik Rangappa</h1>
          <p className="fs-6 mt-1 text-muted">Chief of Education</p>
        </div>
      </div>

      <div
        className="row mt-5 text-center "
        style={{
          width: "75%",
          margin: "auto",
          fontSize: "1.1rem",
          lineHeight: "2.1rem",
        }}
      >
        <div className="col-4  ">
          <img
            src="/media/images/AllTeams/austin.png"
            alt="Nithin Kamath"
            style={{ width: "55%", borderRadius: "100%" ,height: "65%"}}
          />
          <h1 className="fs-3 mt-4 text-muted">Austin Prakesh</h1>
          <p className="fs-6 mt-1 text-muted">Director Strategy</p>
        </div>
      </div>
    </div>
  );
}

export default AllTeam;

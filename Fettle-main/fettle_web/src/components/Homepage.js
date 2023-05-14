import { Link } from "react-router-dom";

export function Homepage() {
  return (
    <div
      className="py-5"
      style={{ background: "linear-gradient(-180deg, #c3e8a7, #bbe2ed)" }}
    >
      <div className="main container">
        <div>
          <h2 style={{ textAlign: "center", margin: "0vh 0vh" }}>
            Taste of Nature In Fettle
          </h2>
        </div>
        <div
          className="container"
          style={{
            padding: "45px 50px",
          }}
        >
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner" style={{ borderRadius: "5vh" }}>
              <div className="carousel-item active">
                <img
                  src="https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="d-block w-100 rounded"
                  height="600px"
                  width="60vh"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="d-block w-100 rounded"
                  height="600px"
                  width="60vh"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("./Images/amadej-tauses-xWOTojs1eg4-unsplash.jpg")}
                  className="d-block w-100 rounded"
                  height="600px"
                  width="60vh"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div id="aboutus">&nbsp;</div>
      </div>
      <hr />
    </div>
  );
}

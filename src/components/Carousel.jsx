import React from "react";
import "./caro.css";
export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/pizza 2.webp"
              className="d-block w-100 carousel-image"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/pizza 8.webp"
              className="d-block w-100 carousel-image"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/pizza 10.webp"
              className="d-block w-100 carousel-image"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
}

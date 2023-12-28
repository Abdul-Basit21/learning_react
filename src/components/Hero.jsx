import React from "react";
import heroImg from "../images/promo.png";
import "./Hero.css";

export default function Hero() {
  return (
    <>
      <div className="container-fluid hero-main">
        <div className="container">
          <div className="row align-items-center">
            <div className="hero-content col-lg-6 col-md-10 col-sm-12">
              <h2 className="hero-text-main">
                The Smarter
                <br /> Way to Learn
                <br /> <span className="changeable-text">Anything</span>
              </h2>
              <p className="my-4 hero-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, iusto labore laudantium aliquam doloribus minima quos
                aut eveniet facere est soluta, natus praesentium numquam
                reiciendis. Architecto incidunt rem laborum ea?
              </p>
            </div>
            <div className="hero-img col-lg-6 col-md-10 col-sm-12">
              <img src={heroImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

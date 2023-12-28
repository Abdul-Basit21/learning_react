import React, { useEffect } from "react";
import "./Counter.css";

export default function Counter() {
  useEffect(() => {
    // Set the locale for number formatting based on the document language
    const locale = document.documentElement.lang === "en" ? "en-EN" : "de-DE";
    // Set the interval in milliseconds to update the number
    const updateInterval = 40;
    // Set the total number of updates for the animation
    const totalUpdates = 50;

    function count(element) {
      const targetNumber = parseInt(element.getAttribute("data-number"), 10);
      let currentNumber = 0;
      const increment = targetNumber / totalUpdates;

      // Update the numbers in the elements
      const intervalId = setInterval(() => {
        currentNumber += increment;

        if (currentNumber >= targetNumber) {
          clearInterval(intervalId);
          currentNumber = targetNumber;
        }

        element.innerHTML = Math.round(currentNumber).toLocaleString(locale);
      }, updateInterval);
    }

    // Select all elements with the class "js-counter"
    const keyFacts = document.querySelectorAll(".js-counter");

    // Create a new Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Check if the element has already been counted
          if (!entry.target.counted) {
            // Animate the number
            count(entry.target);
            // Set the counted flag to true to prevent multiple counts
            entry.target.counted = true;
            // Stop observing the element
            observer.unobserve(entry.target);
          }
        }
      });
    });

    // Observe each element with the "js-counter" class
    keyFacts.forEach((keyFact) => {
      observer.observe(keyFact);
    });
  }, []);

  return (
    <div className="container counter-section py-5">
      <div className="row">
        <div className="col-12 mb-3">
          <h2 className="hero-text-main about-text">
            Our Great
            <span className="changeable-text"> Achivements</span>
          </h2>
        </div>
      </div>
      <div className="js-counters row justify-content-center">
        <div className="col-lg-3 col-md-6 col-10">
          <div className="counter-box">
            <i className="fa-regular fa-face-smile"></i>
            <div className="counter-content">
              <span className="js-counter" data-number="550">
                0
              </span>
              &nbsp;+
              <h3 className="counterSymbol">
                <span>HAPPY CLIENTS</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-10">
          <div className="counter-box">
            <i class="fa-brands fa-envira"></i>
            <div className="counter-content">
              <span className="js-counter" data-number="1500">
                0
              </span>
              &nbsp;+
              <h3 className="counterSymbol">
                <span>PROJECTS</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-10">
          <div className="counter-box">
            <i class="fa-solid fa-percent"></i>
            <div className="counter-content">
              <span className="js-counter" data-number="99.99">
                0
              </span>
              &nbsp;%
              <h3 className="counterSymbol">
                <span>ACCURACY</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-10">
          <div className="counter-box">
            <i class="fa-solid fa-users"></i>
            <div className="counter-content">
              <span className="js-counter" data-number="50">
                0
              </span>
              &nbsp;+
              <h3 className="counterSymbol">
                <span>PROFESSIONALS</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

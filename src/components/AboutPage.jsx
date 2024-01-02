import React from "react";
import "./AboutPage.css";
import TeamMembers from "./AboutPage.config";

export default function AboutPage() {
  TeamMembers.sort();
  console.log(TeamMembers);

  return (
    <>
      <div className="page-main-banner">
        <h2 className="page-head">About Us</h2>
      </div>
      <div className="container">
        <div className="member-wrapper">
          {TeamMembers.map((item, index) => (
            <div key={index} className="team-member">
              <img className="member-img" src={item.avatar} alt={item.Name} />
              <br />
              {item.Name}
              <br />
              {item.Destination}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

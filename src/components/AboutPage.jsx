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
        <div className="row my-5 ">
          {TeamMembers.map((item, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 col-sm-12 mb-5 px-3 d-flex justify-content-center"
            >
              <div className="team-member">
                <div className="member-img-wrapper">
                  <img
                    className="member-img"
                    src={item.avatar}
                    alt={item.Name}
                  />
                  <ul className="member-social-info">
                    <li>
                      <a href={item.socialLinks.facebook}>
                        <i class="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href={item.socialLinks.linkedin}>
                        <i class="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="plus-hover">
                      <a href="">
                        <i className="fa-solid fa-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <h2 className="member-name">
                  <a href="">{item.Name}</a>
                </h2>
                <p className="memeber-destination">{item.Destination}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

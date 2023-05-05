import React from "react";
import Card from "./Card";
import "./Teams.css";
import tech_team_banner from "../assets/tech-team-banner.jpg";
import logistics_team_banner from "../assets/logistics-team-banner.jpg";
import pr_team_banner from "../assets/pr-team-banner.jpg";
import content_team_banner from "../assets/content-team-banner.jpg";

function Teams() {
  return (
    <div className="teams" id="teams">
      <h1 className="section-header teams-header">Teams</h1>
      <div className="teams-cards">
        <Card
          image={tech_team_banner}
          title="Tech Team"
          description="Dogecoin crashes, so does our website.
Unfortunately we don't have an Elon Musk at our disposal. Join our tech team and help us out."
          className="card-child"
        />
        <Card
          image={logistics_team_banner}
          title="Logistics Team"
          description="Amateurs discuss Events ,  Professionals discuss Logistics 
Join the backbone behind every event , the *Logistics Team*"
          className="card-child"
        />
        <Card
          image={pr_team_banner}
          title="PR Team"
          description="Wannabe Insta Influencer?
Passionate Networking Nerd?
Networking skills build karna hai?
Spread the good word of our Student Branch. Join the PR team 😉"
          className="card-child"
        />
        <Card
          image={content_team_banner}
          title="Content Team"
          description="JUSB needs content : Kalm
Content team understaffed : Panik
Recruitment drive : Kalm"
          className="card-child"
              />
          </div>
          <a href="https://ieee-jaduniv.in/team.html" className="teams-button button" target="_blank">
          More about Teams
        </a>
    </div>
  );
}

export default Teams;

import React from "react";
import Tile from "../Tile";
import "./Projects.css";

const projects = [
  {
    name: "FoodSpace",
    github: "https://github.com/char55/FoodSpace",
    desciption:
      "A mobile application for finding and sharing recipes, searchable via categories",
    projectLink: undefined,
  },
  {
    name: "Food Pickup App",
    github: "https://github.com/char55/Food-PickUp-App",
    desciption: `A UberEats style application, fully phone responsive, and uses twilio's api to text users`,
    projectLink: undefined,
  },
  {
    name: "Chats-a-lot",
    github: "https://github.com/char55/Chats-a-lot",
    desciption:
      "ChattyApp enables users from various locations to chat together, on one server, with picture/gif sharing capabilities",
    projectLink: undefined,
  },
  {
    name: "Tiny App",
    github: "https://github.com/char55/tinyAppProject",
    desciption:
      "TinyApp is a full stack web application that allows users to shorten long URLs",
    projectLink: undefined,
  },
  {
    name: "Tweeter",
    github: "https://github.com/char55/tweeter",
    desciption: "A twitter clone project, to practice front-end development.",
    projectLink: "https://tweeter-char55.herokuapp.com/",
  },
];

function Projects() {
  // links must be full URL https://www.google.ca
  return (
    <>
      <div className="projects-container">
        <div> Personal Projects completed to date:</div>
        <div className="project-list">
          {projects.map((project, index) => (
            <Tile
              key={index}
              projectName={project.name}
              projectLink={project.projectLink}
              projectDescription={project.desciption}
              githubLink={project.github}
            ></Tile>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;

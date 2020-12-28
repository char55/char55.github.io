import React from "react";
import "./Resume.css";

const workHistory = [
  {
    company: "Beslogic",
    start: "dec 2018",
    end: "aug 2019",
    role: "software developer",
    language: [
      "angular 7",
      "angular materials",
      "bootstrap",
      "WebSockets",
      "C# .NETCore",
    ],
    description: `Constructed and developed software, from conception to deployment, utilizing angular 7, angular materials, bootstrap, WebSockets, and C# .NETCore, working in a small team.`,
  },

  {
    company: "Calforex",
    start: "july 2014",
    end: "sept 2018",
    role: "Supervisor",
    description: `Supervisor at a currency exchange bureau
Responsible for organizing schedules, staying accountable for all in-store inventory, customer-service based sales, and ensuring that FINTRAC regulations are followed
`,
  },
  {
    company: "Mcgill University",
    start: "May 2012",
    end: "aug 2012",
    role: "Researcher Assistant",
    language: ["MATLAB"],
    description: `Researcher in Dr. Julio C. Martinez-Trujillo's laboratory; investigated binocular rivalry as well as aiding in data analysis.
Utilized MATLAB to develop and create an application to test, record, and analyze data to develop the desired experiment
`,
  },
  {
    company: "Mcgill University",
    start: "May 2011",
    end: "aug 2011",
    role: "Researcher Assistant",
    description: `Researcher in Dr. Erik Cook's laboratory; investigated changes in temporal perception due to visual adaption.  
Utilized MATLAB to create an application to test, record, and analyze data for the desired experiment
Results for which were ultimately published as a scientific paper.`,
    language: ["MATLAB"],
  },
];

function Resume() {
  return (
    <>
      <div className="resume-container">
        <div className="resume-bio">
          I am a Full-Stack Software Developer with a background in physiology,
          neuroscience, and finance. I am hardworking, principled and love a
          challenge. I'm adept in independent work and am a proficient team
          player, recognizing the importance of communication and direction for
          projects. My interests stem from a desire to learn, helping others,
          and to contribute to the world around me.
        </div>
        <div className="resumeLink">
          <h3>Online Resume</h3>
          <a href="https://resume.creddle.io/resume/dmbw2wy5s4u">Resume</a>
        </div>
      </div>
    </>
  );
}

export default Resume;

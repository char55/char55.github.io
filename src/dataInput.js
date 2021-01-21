const projects = [
  {
    name: 'FoodSpace',
    github: 'https://github.com/char55/FoodSpace',
    desciption:
      'A mobile application for finding and sharing recipes, searchable via categories',
    projectLink: undefined,
  },
  {
    name: 'Food Pickup App',
    github: 'https://github.com/char55/Food-PickUp-App',
    desciption: `A UberEats style application, fully phone responsive, and uses twilio's api to text users`,
    projectLink: undefined,
  },
  {
    name: 'Github Finder',
    github: 'https://github.com/char55/github-finder',
    desciption: `React application that fetches, displays, and can search github users/avatars`,
    projectLink: 'https://githubfinderchar55.netlify.app/',
  },
  {
    name: 'Chats-a-lot',
    github: 'https://github.com/char55/Chats-a-lot',
    desciption:
      'ChattyApp enables users from various locations to chat together, on one server, with picture/gif sharing capabilities',
    projectLink: undefined,
  },
  {
    name: 'Tiny App',
    github: 'https://github.com/char55/tinyAppProject',
    desciption:
      'TinyApp is a full stack web application that allows users to shorten long URLs',
    projectLink: undefined,
  },
  {
    name: 'Tweeter',
    github: 'https://github.com/char55/tweeter',
    desciption: 'A twitter clone project, to practice front-end development.',
    projectLink: 'https://tweeter-char55.herokuapp.com/',
  },
];

const workHistory = [
  {
    company: 'Beslogic',
    start: 'dec 2018',
    end: 'aug 2019',
    role: 'software developer',
    language: [
      'angular 7',
      'angular materials',
      'bootstrap',
      'WebSockets',
      'C# .NETCore',
    ],
    description: `Constructed and developed software, from conception to deployment, utilizing angular 7, angular materials, bootstrap, WebSockets, and C# .NETCore, working in a small team.`,
  },

  {
    company: 'Calforex',
    start: 'july 2014',
    end: 'sept 2018',
    role: 'Supervisor',
    description: `Supervisor at a currency exchange bureau
  Responsible for organizing schedules, staying accountable for all in-store inventory, customer-service based sales, and ensuring that FINTRAC regulations are followed
  `,
  },
  {
    company: 'Mcgill University',
    start: 'May 2012',
    end: 'aug 2012',
    role: 'Researcher Assistant',
    language: ['MATLAB'],
    description: `Researcher in Dr. Julio C. Martinez-Trujillo's laboratory; investigated binocular rivalry as well as aiding in data analysis.
  Utilized MATLAB to develop and create an application to test, record, and analyze data to develop the desired experiment
  `,
  },
  {
    company: 'Mcgill University',
    start: 'May 2011',
    end: 'aug 2011',
    role: 'Researcher Assistant',
    description: `Researcher in Dr. Erik Cook's laboratory; investigated changes in temporal perception due to visual adaption.  
  Utilized MATLAB to create an application to test, record, and analyze data for the desired experiment
  Results for which were ultimately published as a scientific paper.`,
    language: ['MATLAB'],
  },
];

module.exports = { projects, workHistory };

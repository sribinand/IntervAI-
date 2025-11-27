// ================================
// TECH NAME NORMALIZATION MAPPINGS
// ================================
export const mappings = {
  // JS frameworks
  "react.js": "react",
  reactjs: "react",
  react: "react",

  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",

  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",

  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",

  // Backend frameworks
  "express.js": "express",
  expressjs: "express",
  express: "express",

  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",

  nestjs: "nestjs",

  // Databases
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",

  mysql: "mysql",
  postgresql: "postgresql",
  postgres: "postgresql",
  sqlite: "sqlite",

  redis: "redis",
  firebase: "firebase",
  prisma: "prisma",

  // DevOps
  docker: "docker",
  kubernetes: "kubernetes",

  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  heroku: "heroku",
  digitalocean: "digitalocean",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",

  // Styling
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  sass: "sass",
  scss: "sass",

  // Languages
  javascript: "javascript",
  js: "javascript",
  typescript: "typescript",
  ts: "typescript",

  html: "html5",
  html5: "html5",
  css: "css3",
  css3: "css3",

  // Tools
  webpack: "webpack",
  babel: "babel",
  parcel: "parcel",
  rollup: "rollup",

  npm: "npm",
  yarn: "yarn",

  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",

  // Testing
  jest: "jest",
  cypress: "cypress",
  mocha: "mocha",
  chai: "chai",
  selenium: "selenium",
  karma: "karma",

  // CMS
  wordpress: "wordpress",
  strapi: "strapi",
  contentful: "contentful",

  // UI/Design tools
  figma: "figma",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",

  // State management
  redux: "redux",
  vuex: "vuex",

  // Additional
  graphql: "graphql",
  apollo: "apollo",
};


// ================================
// INTERVIEW COVER IMAGES
// ================================
export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];


// ================================
// DUMMY INTERVIEW DATA
// ================================
export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];

// Project data for portfolio
// Note: Image paths use import.meta.env.BASE_URL to work with GitHub Pages base path
const baseUrl = import.meta.env.BASE_URL || '/';

export const projects = [
  {
    id: 1,
    title: "Savings by Marcus",
    description: "A financial management application for tracking savings goals and budgets. Built with modern web technologies for a seamless user experience.",
    image: `${baseUrl}images/projects/marcus-savings.png`,
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    liveUrl: "https://louverture-t.github.io/marcus1/",
    githubUrl: "https://github.com/louverture-t/marcus1",
    category: "Frontend"
  },
  {
    id: 2,
    title: "ID Blog Platform",
    description: "A responsive blog platform featuring clean design and intuitive content management. Showcases modern frontend development practices.",
    image: `${baseUrl}images/projects/id-blog.png`,
    technologies: ["React", "CSS3", "Responsive Design"],
    liveUrl: "https://louverture-t.github.io/id-blog/",
    githubUrl: "https://github.com/louverture-t",
    category: "Frontend"
  },
  {
    id: 3,
    title: "Code Refactor Legacy",
    description: "Modernization of legacy codebase with improved accessibility, semantic HTML, and optimized performance. Demonstrates code quality improvements.",
    image: `${baseUrl}images/projects/code-refactor.png`,
    technologies: ["HTML5", "CSS3", "Accessibility", "SEO"],
    liveUrl: "https://louverture-t.github.io/week_1_coderefactorLT/",
    githubUrl: "https://github.com/louverture-t",
    category: "Frontend"
  },
  {
    id: 4,
    title: "Adventure Game",
    description: "An interactive web-based adventure game with dynamic storytelling and engaging user interactions. Built with vanilla JavaScript.",
    image: `${baseUrl}images/projects/adventure-game.png`,
    technologies: ["JavaScript", "HTML5", "CSS3", "Game Logic"],
    liveUrl: "https://louverture-t.github.io/week3_capstone/",
    githubUrl: "https://github.com/louverture-t",
    category: "Frontend"
  },
  {
    id: 5,
    title: "Flame Keeper Adventure",
    description: "A narrative-driven web game featuring interactive gameplay and visual storytelling. Showcases creative frontend development skills.",
    image: `${baseUrl}images/projects/flame-keeper.png`,
    technologies: ["JavaScript", "CSS Animations", "Interactive UI"],
    liveUrl: "https://louverture-t.github.io/week2_finntheflamekeeperLT/",
    githubUrl: "https://github.com/louverture-t",
    category: "Frontend"
  }
];

import pizzaProjectImg from '../assets/images/profileimage.jpeg'; 

export const projectsData = [
  {
    id: 1,
    title: "Pizza Ordering App",
    url: "https://pizza-store-demo.vercel.app",
    description: "A full-stack MERN pizza ordering platform featuring real-time order tracking, custom toppings selector, and interactive UI card components.",
    image: pizzaProjectImg, // Ya direct string path: "/images/pizza.png"
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    liveUrl: "https://pizza-store-demo.vercel.app",
    githubUrl: "https://github.com/waqas/pizza-ordering-app"
  },
  {
    id: 2,
    title: "DevPortfolio IDE Theme",
    url: "https://waqas-portfolio.dev",
    description: "A developer portfolio built with React and CSS modules inspired by modern code editors with dark/light mode and dynamic skill grids.",
    image: pizzaProjectImg,
    tags: ["React.js", "CSS3", "Vite", "Lucide React"],
    liveUrl: "https://waqas-portfolio.dev",
    githubUrl: "https://github.com/waqas/portfolio-ide"
  }
];
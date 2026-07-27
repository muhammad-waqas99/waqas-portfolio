import hostwelcomeImg from "../assets/images/hostwelcome.webp";
import chatNovaImg from "../assets/images/chat-nova.webp";
import noteVaultImg from "../assets/images/notevault.webp";
import shortUrlImg from "../assets/images/short-url.webp";
import blogAppImg from "../assets/images/blog-app.webp";
import movenpickImg from "../assets/images/movenpick.webp";

export const projectsData = [
  {
    id: 1,
    title: "Host Welcome",
    image: hostwelcomeImg,
    description:
      "A modern responsive web hosting platform featuring domain search, hosting plans, VPS, dedicated servers, SSL certificates, and reseller hosting pages with a clean UI.",
    tags: [
      "React",
      "CSS3",
      "React Router",
      "Responsive Design",
      "JavaScript"
    ],
    liveUrl: "https://hostwelcome.com/",
    githubUrl: "https://github.com/muhammad-waqas99/Host-Welcome"
  },

  {
    id: 2,
    title: "Chat Nova",
    image: chatNovaImg,
    description:
      "A real-time full-stack chat application featuring Clerk authentication, Socket.IO messaging, media sharing with ImageKit, online presence tracking, and dynamic themes.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Clerk",
      "ImageKit"
    ],
    githubUrl: "https://github.com/muhammad-waqas99/chat-nova"
  },

  {
    id: 3,
    title: "NoteVault",
    image: noteVaultImg,
    description:
      "A full-stack note management application that enables users to securely create, organize, update, and delete personal notes through a responsive MERN architecture.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Bootstrap"
    ],
    liveUrl: "https://notevault1.netlify.app/",
    githubUrl: "https://github.com/muhammad-waqas99/NoteVault"
  },

  {
    id: 4,
    title: "URL Shortener",
    image: shortUrlImg,
    description:
      "A secure URL shortening platform with authentication, click analytics, role-based access control, and link management built using Node.js, Express, MongoDB, and EJS.",
    tags: [
      "Node.js",
      "Express",
      "MongoDB",
      "EJS",
      "Authentication"
    ],
    githubUrl: "https://github.com/muhammad-waqas99/Short-URL"
  },

  {
    id: 5,
    title: "Blog App",
    image: blogAppImg,
    description:
      "A full-stack blogging platform with user authentication, Cloudinary image uploads, profile management, comments, and CRUD operations for publishing blog posts.",
    tags: [
      "Node.js",
      "Express",
      "MongoDB",
      "EJS",
      "Cloudinary"
    ],
    liveUrl: "https://blog-app-silk-seven.vercel.app/",
    githubUrl: "https://github.com/muhammad-waqas99/Blog-App"
  },

  {
    id: 6,
    title: "Mövenpick Clone",
    image: movenpickImg,
    description:
      "A responsive frontend clone inspired by the Mövenpick Hotels & Resorts website, built with HTML and CSS featuring modern layouts, destination sections, and responsive navigation.",
    tags: [
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Flexbox"
    ],
    liveUrl: "https://movenpick-clone.vercel.app/",
    githubUrl: "https://github.com/muhammad-waqas99/movenpick-clone"
  }
];
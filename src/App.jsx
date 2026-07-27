import { useEffect, useState } from "react";
import DotGrid from "./components/DotGrid";
import { Header } from "./components/Header";
import Navbar from "./components/Navbar";
import { ArrowUp } from "lucide-react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

const Reveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );
  const [activeTab, setActiveTab] = useState("about");
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);


  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (totalHeight > 0 && (currentScroll / totalHeight) >= 0.3) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <div className="background">
        <DotGrid
          dotSize={3}
          gap={30}
          baseColor={theme === "dark" ? "#11161A" : "#CBD5E1"} 
          activeColor={theme === "dark" ? "#34D399" : "#059669"} 
          proximity={140}
          shockRadius={90}
          shockStrength={5}
          resistance={750}
          returnDuration={1.1}
        />
      </div>

      <div className="app-content">
        <Header theme={theme} toggleTheme={toggleTheme} />

        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
       
        <div id="section-hero">
          <Reveal>
            <Hero />
          </Reveal>
        </div>
        
        <main style={{ padding: "0 20px", color: "var(--ink)", position: "relative", zIndex: 2 }}>
          
          <div id="section-stack" style={{ minHeight: "80vh", scrollMarginTop: "60px", }}>
            <Reveal>
              <Skills />
            </Reveal>
          </div>

          <div id="section-about" style={{ minHeight: "80vh", scrollMarginTop: "60px",  }}>
            <Reveal>
              <About />
            </Reveal>
          </div>

          <div id="section-projects" style={{ minHeight: "80vh", scrollMarginTop: "60px"}}>
            <Reveal>
              <Projects />
            </Reveal>
          </div>

          <div id="section-contact" style={{ minHeight: "80vh", scrollMarginTop: "60px" }}>
            <Reveal>
              <Contact />
            </Reveal>
          </div>

        </main>

        <Footer />

        <button 
          className={`scroll-to-top-btn ${showScrollBtn ? 'show' : ''}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          type="button"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </>
  );
}

export default App;
import { useEffect, useState } from "react";
import DotGrid from "./components/DotGrid";
import { Header } from "./components/Header";
import Navbar from "./components/Navbar";
import { ArrowUp } from "lucide-react";
import Hero from "./components/Hero";

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
            <Hero/>
       
        <main style={{ padding: "20px", color: "var(--ink)", position: "relative", zIndex: 2 }}>
          <div id="section-about" style={{ minHeight: "80vh", scrollMarginTop: "60px" }}>
            <h2>about.md</h2>
            <p>Your about section content here...</p>
          </div>

          <div id="section-stack" style={{ minHeight: "80vh", scrollMarginTop: "60px" }}>
            <h2>stack.json</h2>
            <p>Your tech stack section content here...</p>
          </div>

          <div id="section-projects" style={{ minHeight: "80vh", scrollMarginTop: "60px" }}>
            <h2>projects/</h2>
            <p>Your projects list section content here...</p>
          </div>

          <div id="section-contact" style={{ minHeight: "80vh", scrollMarginTop: "60px" }}>
            <h2>contact.sh</h2>
            <p>Your contact form section content here...</p>
          </div>
        </main>

    
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
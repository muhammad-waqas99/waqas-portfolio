import { useEffect, useState } from "react";
import DotGrid from "./components/DotGrid";
import { Header } from "./components/Header";

function App() {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );


  useEffect(() => {

    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem(
      "theme",
      theme
    );

  }, [theme]);


  const toggleTheme = () => {

    setTheme(
      theme === "dark"
      ? "light"
      : "dark"
    );

  };


  return (
    <>

    <div className="background">
      
      <DotGrid
        dotSize={3}
        gap={30}
        baseColor="#11161A"
        activeColor="#34D399"
        proximity={140}
        shockRadius={90}
        shockStrength={5}
        resistance={750}
        returnDuration={1.1}
      />

    </div>


    <div className="app-content">

      <Header 
        theme={theme}
        toggleTheme={toggleTheme}
      />

    </div>


    </>
  )
}

export default App;
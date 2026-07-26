import { Moon, Sun } from "lucide-react";
import "../css/Header.css"

export const Header = ({theme,toggleTheme}) => {


return (

<div className="terminal-head">


<div className="traffic-lights">
  <span className="light red"></span>
  <span className="light yellow"></span>
  <span className="light green"></span>
</div>

<div className="head-name">
        <span className="head-accent">&lt;&nbsp;</span>
        Waqas <span>.dev</span>
        <span className="head-accent">&nbsp;/&gt;</span>
      </div>

<button 
className="theme-btn"
onClick={toggleTheme}
>

{
theme === "dark"
?
  <span>  <Moon/>Dark</span> 
:
  <span>  <Sun/>Light</span> 
}

</button>


</div>

)

}
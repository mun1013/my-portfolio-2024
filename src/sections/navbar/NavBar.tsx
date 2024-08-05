import { useEffect, useState } from "react";
import Logo from "../../assets/favicon.ico";
import Toggle from "../../components/Toggle/Toggle";
import { data } from "./data";
import "./navbar.css";

type NavBarProps = {
  activeSection: string;
  setTheme: (theme: string) => void;
  theme: string;
};

const NavBar = ({ activeSection, setTheme, theme }: NavBarProps) => {
  const [currentSection, setCurrentSection] = useState("#home");

  useEffect(() => {
    setCurrentSection(activeSection);
  }, [activeSection]);

  return (
    <nav>
      <div className="container nav__container">
        <a href="/" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>
        <div className="nav__items">
          <ul className="nav__menu">
            {data.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className={currentSection === item.link ? "active" : ""}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <Toggle setTheme={setTheme} theme={theme}/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

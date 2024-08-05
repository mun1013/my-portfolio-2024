import { useEffect, useState } from "react";
import "./toggle.css";

/** Re-design from
  * Toggle switch design based on: https://dribbble.com/shots/3220898-Day-Night-toggle-DailyUI-015
  * More info: https://daily-dev-tips.com/posts/creating-day-night-css-only-toggle-switch/
 **/

type ToggleProps = {
  setTheme: (theme: string) => void;
  theme: string;
};

function Toggle({ setTheme, theme }: ToggleProps) {
  const darkLabel = "toggle dark mode";
  const lightLabel = "toggle light mode";
  // false = dark mode
  const [active, setActive] = useState(false);
  // the opposite, for screenreaders
  const [ariaActive, setAriaActive] = useState(true);
  const [ariaLabel, setAriaLabel] = useState(darkLabel);

  const changeThemeAndToggle = () => {
    if (theme === "theme-dark") {
      setTheme("theme-light");
      setActive(true);
      setAriaActive(false);
      setAriaLabel(lightLabel);
    } else {
      setTheme("theme-dark");
      setActive(false);
      setAriaActive(true);
      setAriaLabel(darkLabel);
    }
    localStorage.setItem("theme", theme);
  };

  const handleOnClick = () => {
    changeThemeAndToggle();
  };

  const handleKeypress = (e: any) => {
    if (e.code === "Enter") {
      changeThemeAndToggle();
    }
  };

  useEffect(() => {
    if (theme === "theme-dark") {
      setActive(false);
      setAriaActive(true);
      setAriaLabel(darkLabel);
    } else if (theme === "theme-light") {
      setActive(true);
      setAriaActive(false);
      setAriaLabel(lightLabel);
    }
  }, [theme]);

  return (
    <div className="container--toggle" title="color theme toggle">
      <input
        role="switch"
        aria-checked={ariaActive}
        onKeyDown={handleKeypress}
        type="checkbox"
        id="toggle"
        className="toggle--checkbox"
        onClick={handleOnClick}
        checked={active}
        readOnly
      />
      <label htmlFor="toggle" className="toggle--label" aria-label={ariaLabel}>
        <span className="toggle--label-background"></span>
      </label>
    </div>
  );
}

export default Toggle;

import "./Header.css";

import { ReactComponent as BarIcon } from "../../assets/bars-solid.svg";
import { ReactComponent as SunIcon } from "../../assets/sun-solid.svg";
import { ReactComponent as MoonIcon } from "../../assets/moon-solid.svg";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header-button" onClick={props.onToggleNav}>
        <BarIcon />
      </div>
    </header>
  );
};

export default Header;

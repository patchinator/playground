import style from "./NavbarTwo.module.scss";
import ButtonSlide2 from "../ButtonSlide2/ButtonSlideTwo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUser,
  faCog,
  faNewspaper,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const NavbarTwo = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.navbar_button_wrapper}>
        <ButtonSlide2>
          <FontAwesomeIcon icon={faUser} width="1rem" />
        </ButtonSlide2>
        <ButtonSlide2>
          <FontAwesomeIcon icon={faCog} width="1.25rem" />
        </ButtonSlide2>
        <ButtonSlide2>
          <FontAwesomeIcon icon={faNewspaper} width="1.25rem" />
        </ButtonSlide2>
      </div>
      <div className={style.navbar_search}>
        <input type="text" placeholder="Search our store..." />
        <button>{<FontAwesomeIcon width="1rem" icon={faSearch} />}</button>
      </div>
    </nav>
  );
};

export default NavbarTwo;

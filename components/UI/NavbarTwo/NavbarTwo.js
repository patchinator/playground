import style from "./NavbarTwo.module.scss";
import ButtonSlide2 from "../ButtonSlide2/ButtonSlide2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavbarTwo = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.navbar_button_wrapper}>
        <ButtonSlide2>Profile</ButtonSlide2>
        <ButtonSlide2>About</ButtonSlide2>
        <ButtonSlide2>News</ButtonSlide2>
      </div>
      <div className={style.navbar_search}>
        <input type="text" placeholder="Search our store..." />
        <button>{<FontAwesomeIcon width="1rem" icon={faSearch} />}</button>
      </div>
    </nav>
  );
};

export default NavbarTwo;

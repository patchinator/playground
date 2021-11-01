import style from "./NavbarTwo.module.scss";
import ButtonSlide2 from "../ButtonSlide2/ButtonSlide2";

const NavbarTwo = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.navbar_button_wrapper}>
        <ButtonSlide2>Profile</ButtonSlide2>
        <ButtonSlide2>About</ButtonSlide2>
        <ButtonSlide2>News</ButtonSlide2>
      </div>
      <div>profile</div>
    </nav>
  );
};

export default NavbarTwo;

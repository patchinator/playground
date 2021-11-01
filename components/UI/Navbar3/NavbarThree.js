import style from "./NavbarThree.module.scss";
import ButtonOne from "../Button1/ButtonOne";
import ButtonTwo from "../Button2/ButtonTwo";

const NavbarThree = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.profile}>
        <div className={style.profile_picture}>
          <div className={style.online_status}></div>
        </div>
        <div>Account status</div>
      </div>
      <div className={style.navbar_buttons}>
        <ButtonOne>Settings</ButtonOne>
        <ButtonOne>Support</ButtonOne>
        <ButtonOne>Documentation</ButtonOne>
      </div>
      <div className={style.contact_button_wrapper}>
        <ButtonTwo>Contact</ButtonTwo>
      </div>
    </nav>
  );
};

export default NavbarThree;

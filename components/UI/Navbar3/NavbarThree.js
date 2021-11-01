import style from "./NavbarThree.module.scss";

const NavbarThree = () => {
  return (
    <nav className={style.navbar}>
      <div>test</div>
      <div className={style.navbar_buttons}>
        <div>settings</div>
        <div>support</div>
        <div>documentation</div>
      </div>
      <div>test</div>
    </nav>
  );
};

export default NavbarThree;

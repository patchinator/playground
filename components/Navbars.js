import NavbarOne from "./UI/Navbar1/NavbarOne";
import NavbarTwo from "./UI/Navbar2/NavbarTwo";
import NavbarThree from "./UI/Navbar3/NavbarThree";

import style from "./Navbars.module.scss";

const Navbars = () => {
  return (
    <section>
      <NavbarOne />
      <NavbarTwo />
      <NavbarThree />
    </section>
  );
};

export default Navbars;

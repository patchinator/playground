import { useState, useEffect, useRef } from "react";
import style from "./NavbarOne.module.scss";

const NavbarOne = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const showDropdownHandler = () => {
    setShowDropdown((prev) => !prev);
  };

  useEffect(() => {
    const clickOutsideHandler = (event) => {
      if (
        showDropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", clickOutsideHandler);

    return () => {
      document.removeEventListener("click", clickOutsideHandler);
    };
  }, [showDropdown]);

  return (
    <nav className={style.navbar}>
      <div className={style.title}>NavbarOne</div>
      <div ref={dropdownRef}>
        <button className={style.button} onClick={showDropdownHandler}>
          Menu
        </button>
        <div
          className={`${style.dropdown} ${
            showDropdown ? style.dropdownFadeIn : style.dropdownFadeOut
          }`}
        >
          <a href="#">Profile</a>
          <a href="#">About</a>
          <a href="#">News</a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarOne;

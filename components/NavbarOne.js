import { useState, useEffect, useRef } from "react";

import style from "./NavbarOne.module.scss";
import Button from "./UI/ButtonSlide1/ButtonSlide1";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog, faNewspaper } from "@fortawesome/free-solid-svg-icons";

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
        <Button onClick={showDropdownHandler}>Menu</Button>
        <div
          className={`${style.dropdown} ${
            showDropdown ? style.dropdownFadeIn : style.dropdownFadeOut
          }`}
        >
          <div className={style.dropdown_item}>
            <a href="#">Profile</a>
            <FontAwesomeIcon width="1.2rem" icon={faUser} />
          </div>
          <div className={style.dropdown_item}>
            <a href="#">About</a>
            <FontAwesomeIcon width="1.2rem" icon={faCog} />
          </div>
          <div className={style.dropdown_item}>
            <a href="#">News</a>
            <FontAwesomeIcon width="1.2rem" icon={faNewspaper} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarOne;

import style from "./ButtonSlide2.module.scss";

const ButtonSlide2 = (props) => {
  return (
    <button className={style.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ButtonSlide2;

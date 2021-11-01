import style from "./ButtonSlide1.module.scss";

const ButtonSlide1 = (props) => {
  return (
    <button className={style.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ButtonSlide1;

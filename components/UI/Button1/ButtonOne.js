import style from "./ButtonOne.module.scss";

const ButtonOne = (props) => {
  return (
    <button className={style.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ButtonOne;

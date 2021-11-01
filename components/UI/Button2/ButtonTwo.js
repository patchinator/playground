import style from "./ButtonTwo.module.scss";

const ButtonTwo = (props) => {
  return (
    <button className={style.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ButtonTwo;

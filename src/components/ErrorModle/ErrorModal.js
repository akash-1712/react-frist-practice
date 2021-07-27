import React from "react";
import ReactDOM from "react-dom";
import style from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../UI/Button";
import Wrapper from "../Helper/Wrapper";

const BackDrop = (props) => {
  return <div onClick={props.errorHandler} className={style.backdrop} />;
};
const Modal = (props) => {
  return (
    <Card className={style.modal}>
      <header className={style.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={style.content}>
        <p>{props.message}</p>
      </div>
      <footer className={style.actions}>
        <Button onClick={props.errorHandler}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <Wrapper>
      {ReactDOM.createPortal(
        <BackDrop errorHandler={props.errorHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          errorHandler={props.errorHandler}
        />,
        document.getElementById("modal-root")
      )}
    </Wrapper>
  );
};
export default ErrorModal;

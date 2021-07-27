import React, { useState, fragment, useRef } from "react";
import style from "./addUser.module.css";
import Card from "../Card/Card";
import Button from "../UI/Button";
import ErrorModal from "../ErrorModle/ErrorModal";

const AddUser = (props) => {
  const inputName = useRef();
  const inputAge = useRef();
  // const [givenName, setGivenName] = useState("");
  // const [givenAge, setGivenAge] = useState("");
  const [error, setError] = useState(false);
  const addUserHandler = (event) => {
    event.preventDefault();
    var inputUserName = inputName.current.value;
    var inputUserAge = inputAge.current.value;
    //checking data have an error
    if (inputUserName.trim() === "" || inputUserAge.trim() === "") {
      setError({
        title: "Invalid Input",
        message: "please enter a valid name and age (non-empty value) ",
      });
      return;
    }
    if (+inputUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "please enter a valid name and age (Age > 0) ",
      });
      return;
    }
    //passing data to app
    props.passData({ name: inputUserName, age: inputUserAge });
    //clear the enter value
    inputAge.current.value = "";
    inputName.current.value = "";
  };

  // const setUserNameHandler = (e) => {
  //   setGivenName(e.target.value);
  // };

  // const setAgeHandler = (e) => {
  //   setGivenAge(e.target.value);
  // };

  //Modal handler
  const errorHandler = () => {
    setError(null);
  };

  return (
    <fragment>
      {error ? (
        <ErrorModal
          errorHandler={errorHandler}
          title={error.title}
          message={error.message}
        ></ErrorModal>
      ) : (
        ""
      )}

      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            // value={givenName}
            // onChange={setUserNameHandler}
            ref={inputName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            max="100"
            // onChange={setAgeHandler}
            // value={givenAge}
            ref={inputAge}
          />
          <Button type="submit">AddUser</Button>
        </form>
      </Card>
    </fragment>
  );
};

export default AddUser;

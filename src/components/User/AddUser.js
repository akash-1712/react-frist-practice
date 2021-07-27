import React, { useState } from "react";
import style from "./addUser.module.css";
import Card from "../Card/Card";
import Button from "../UI/Button";
import ErrorModal from "../ErrorModle/ErrorModal";

const AddUser = (props) => {
  const [givenName, setGivenName] = useState("");
  const [givenAge, setGivenAge] = useState("");
  const [error, setError] = useState(false);
  const addUserHandler = (event) => {
    event.preventDefault();
    //checking data have an error
    if (givenName.trim() === "" || givenAge.trim() === "") {
      console.log("cc");
      setError({
        title: "Invalid Input",
        message: "please enter a valid name and age (non-empty value) ",
      });
      return;
    }
    if (+givenAge < 1) {
      setError({
        title: "Invalid Age",
        message: "please enter a valid name and age (Age > 0) ",
      });
      return;
    }
    //passing data to app
    props.passData({ name: givenName, age: givenAge });
    //clear the enter value
    setGivenAge("");
    setGivenName("");
  };

  const setUserNameHandler = (e) => {
    setGivenName(e.target.value);
  };

  const setAgeHandler = (e) => {
    setGivenAge(e.target.value);
  };

  //Modal handler
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
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
            value={givenName}
            onChange={setUserNameHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            max="100"
            onChange={setAgeHandler}
            value={givenAge}
          />
          <Button type="submit">AddUser</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

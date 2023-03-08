import React, { useRef } from "react";

import classes from "./AllForm.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/actions";
import { Link, useNavigate } from "react-router-dom";

function UserForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const websiteInputRef = useRef();

  const userFormHandler = (event) => {
    event.preventDefault();
    const enteredId = Math.random().toString();
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredWebsite = websiteInputRef.current.value;

    const user = {
      id: enteredId,
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
      website: enteredWebsite,
    };

    if (
      enteredName !== "" &&
      enteredEmail !== "" &&
      enteredPhone !== "" &&
      enteredWebsite !== ""
    ) {
      dispatch(addUser(user));
      navigate("/");
    }

    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    phoneInputRef.current.value = "";
    websiteInputRef.current.value = "";
  };

  return (
    <Card>
      <header className={classes.header}>
        <b>Please fill your details</b>
      </header>
      <form onSubmit={userFormHandler}>
        <div>
          <label htmlFor="name" />
          <input
            className={classes.input}
            ref={nameInputRef}
            id="name"
            type="text"
            placeholder="Name"
            autoComplete="off"
            required
          />
          <label htmlFor="email" />
          <input
            className={classes.input}
            ref={emailInputRef}
            id="email"
            type="text"
            placeholder="Email"
            autoComplete="off"
            required
          />
          <label htmlFor="phone" />
          <input
            className={classes.input}
            ref={phoneInputRef}
            id="phone"
            type="text"
            placeholder="Phone"
            autoComplete="off"
            required
          />
          <label htmlFor="link" />
          <input
            className={classes.input}
            ref={websiteInputRef}
            id="link"
            type="text"
            placeholder="Website"
            autoComplete="off"
            required
          />
        </div>
        <footer>
          <Button type="submit">Save</Button>
          <Link to="/" className={classes["route-button"]}>
            Back
          </Link>
        </footer>
      </form>
    </Card>
  );
}

export default UserForm;

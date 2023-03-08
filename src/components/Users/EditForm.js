import React, { useState } from "react";

import classes from "./AllForm.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { useDispatch, useSelector } from "react-redux";
import { addEditedUser } from "../../store/actions";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditForm() {
  let { id } = useParams();
  console.log(id);
  console.log(Number(id));
  id = Number(id);

  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userWebsite, setUserWebsite] = useState("");

  React.useEffect(() => {
    for (let user of users) {
      if (user.id === id) {
        setUserName(user.name);
        setUserEmail(user.email);
        setUserPhone(user.phone);
        setUserWebsite(user.website);
      }
    }
  }, [users, id]);

  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setUserEmail(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setUserPhone(event.target.value);
  };
  const websiteChangeHandler = (event) => {
    setUserWebsite(event.target.value);
  };

  const userFormHandler = (event) => {
    event.preventDefault();

    const user = {
      id: id,
      name: userName,
      email: userEmail,
      phone: userPhone,
      website: userWebsite,
    };

    if (
      userName !== "" &&
      userEmail !== "" &&
      userPhone !== "" &&
      userWebsite !== ""
    ) {
      dispatch(addEditedUser(user));
      navigate("/");
    }
  };

  return (
    <Card>
      <header className={classes.header}>
        <b>Please change your details</b>
      </header>
      <form onSubmit={userFormHandler}>
        <div>
          <label htmlFor="name" />
          <input
            className={classes.input}
            id="name"
            type="text"
            placeholder="Name"
            autoComplete="off"
            value={userName}
            onChange={nameChangeHandler}
            required
          />
          <label htmlFor="email" />
          <input
            className={classes.input}
            id="email"
            type="text"
            placeholder="Email"
            autoComplete="off"
            value={userEmail}
            onChange={emailChangeHandler}
            required
          />
          <label htmlFor="phone" />
          <input
            className={classes.input}
            id="phone"
            type="text"
            placeholder="Phone"
            autoComplete="off"
            value={userPhone}
            onChange={phoneChangeHandler}
            required
          />
          <label htmlFor="link" />
          <input
            className={classes.input}
            id="link"
            type="text"
            placeholder="Website"
            autoComplete="off"
            value={userWebsite}
            onChange={websiteChangeHandler}
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

export default EditForm;

import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import classes from "./AllUserLists.module.css";

const TrashUsers = () => {
  const users = useSelector((state) => state.deletedUsers);

  return (
    <>
      <header className={classes.header}>
        <Link to="/" className={classes["route-button"]}>
          Home
        </Link>
        <Link to="/favUsers" className={classes["route-button"]}>
          Fav Users
        </Link>
        <Link to="/trashUsers" className={classes["route-button"]}>
          Trash Users
        </Link>
      </header>
      <div className={classes.container}>
        {users.map((user) => (
          <Card key={user.id} className={`${classes.user}`}>
            <div className={classes["img-section"]}>USER IMAGE</div>
            <div className={classes["info-section"]}>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <div>{user.phone}</div>
              <div>{user.website}</div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default TrashUsers;

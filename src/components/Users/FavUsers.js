import React from "react";

import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AllUserLists.module.css";
import { FiHeart } from "react-icons/fi";
import { markFav } from "../../store/actions";
import { Link } from "react-router-dom";

const FavUsers = () => {
  const users = useSelector((state) => state.favUsers);
  const dispatch = useDispatch();

  const favusers = [];
  for (let user of users)
    if (user.isDeleted !== true) {
      favusers.push(user);
    }

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
        {favusers.map((user) => (
          <Card key={user.id} className={`${classes.user}`}>
            <div className={classes["img-section"]}>USER IMAGE</div>
            <div className={classes["info-section"]}>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <div>{user.phone}</div>
              <div>{user.website}</div>
            </div>
            <div className={classes["tool-section"]}>
              <Button onClick={() => dispatch(markFav(user.id))}>
                {user.isFav === true ? (
                  <FiHeart fill="red" />
                ) : (
                  <FiHeart color="red" />
                )}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default FavUsers;

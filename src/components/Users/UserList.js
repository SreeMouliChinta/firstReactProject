import React from "react";

import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AllUserLists.module.css";
import { BiTrash } from "react-icons/bi";
import { FiHeart, FiEdit } from "react-icons/fi";
import { deleteUser, markFav } from "../../store/actions";
import { Link } from "react-router-dom";

const UserList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <>
      <header className={classes.header}>
        <Link to="/addUser" className={classes["route-button"]}>
          Add User
        </Link>
        <Link to="/favUsers" className={classes["route-button"]}>
          Fav Users
        </Link>
        <Link to="/trashUsers" className={classes["route-button"]}>
          Trash Users
        </Link>
      </header>
      <section className={classes.container}>
        {users.map((user) => (
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
              <Link to={`/editForm/${user.id}`} className={classes["route-button"]}>
                <FiEdit />
              </Link>
              <Button onClick={() => dispatch(deleteUser(user.id))}>
                <BiTrash />
              </Button>
            </div>
          </Card>
        ))}
      </section>
    </>
  );
};

export default UserList;

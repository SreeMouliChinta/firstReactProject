import React, { useEffect } from "react";

import data from "./data.json";
import classes from "./App.module.css";
import Card from "./components/UI/Card";
import UserList from "./components/Users/UserList";
import UserForm from "./components/Users/UserForm";
import FavUsers from "./components/Users/FavUsers";
import TrashUsers from "./components/Users/TrashUsers";
import { useDispatch } from "react-redux";
import { addAllUsers, deleteAllUsers } from "./store/actions";
import { Route, Routes } from "react-router-dom";
import EditForm from "./components/Users/EditForm";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deleteAllUsers());
    dispatch(addAllUsers(data));
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <Card className={classes.App}>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/addUser" element={<UserForm />} />
          <Route path="/favUsers" element={<FavUsers />} />
          <Route path="/trashUsers" element={<TrashUsers />} />
          <Route path="/editForm/:id" element={<EditForm />} />
        </Routes>
      </Card>
    </div>
  );
}

export default App;

import {
  ADD_ALL_USERS,
  ADD_USER,
  DELETE_ALL_USERS,
  DELETE_USER,
  EDITED_USER,
  EDIT_USER,
  MARK_FAV,
} from "./constants";

export const addAllUsers = (users) => {
  return {
    type: ADD_ALL_USERS,
    payload: {
      users,
    },
  };
};

export const deleteAllUsers = () => {
  return {
    type: DELETE_ALL_USERS,
  };
};

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: {
      user,
    },
  };
};

export const markFav = (favUserId) => {
  return {
    type: MARK_FAV,
    payload: {
      favUserId,
    },
  };
};

export const editUser = (userId) => {
  return {
    type: EDIT_USER,
    payload: {
      userId,
    },
  };
};


export const addEditedUser = (editedUser) => {
  return {
    type: EDITED_USER,
    payload: {
      editedUser,
    },
  };
};

export const deleteUser = (delUserId) => {
  return {
    type: DELETE_USER,
    payload: {
      delUserId,
    },
  };
};

import {
  ADD_ALL_USERS,
  ADD_USER,
  DELETE_ALL_USERS,
  DELETE_USER,
  EDITED_USER,
  EDIT_USER,
  MARK_FAV,
} from "./constants";

const initialState = {
  users: [],
  editUser: [],
  favUsers: [],
  deletedUsers: [],
};

export const reducer = (state = initialState, action) => {
  const { users, deletedUsers } = state;
  const newUsers = [];
  const editingUser = [];
  const markedFav = [];

  switch (action.type) {
    case ADD_ALL_USERS:
      return { ...state, users: [...state.users, ...action.payload.users] };

    case DELETE_ALL_USERS:
      return { ...state, users: [] };

    case ADD_USER:
      return { ...state, users: [...state.users, action.payload.user] };

    case MARK_FAV:
      const { favUserId } = action.payload;

      for (let user of users) {
        if (user.id === favUserId) {
          user.isFav === true ? (user.isFav = false) : (user.isFav = true);
        }
        if (user.isFav === true) {
          markedFav.push(user);
        }
      }
      return { ...state, users: [...users], favUsers: [...markedFav] };

    case EDIT_USER:
      const { userId } = action.payload;

      for (let user of users) {
        if (userId === user.id) {
          editingUser.push(user);
        }
      }
      return { ...state, editUser: [...editingUser] };

    case EDITED_USER:
      const { editedUser } = action.payload;
      for (let user of users) {
        Number(editedUser.id) !== user.id
          ? newUsers.push(user)
          : newUsers.push(editedUser);
      }
      return { ...state, users: [...newUsers] };

    case DELETE_USER:
      const { delUserId } = action.payload;
      for (let user of users) {
        if (user.id !== delUserId) {
          newUsers.push(user);
        } else {
          user.isDeleted = true;
          state.deletedUsers.push(user);
        }
      }
      return {
        ...state,
        users: newUsers,
        deletedUsers: [...deletedUsers],
      };

    default:
      return state;
  }
};

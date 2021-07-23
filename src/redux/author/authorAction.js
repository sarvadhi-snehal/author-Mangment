import { ADD_AUTHOR, UPDATE_AUTHOR, DELETE_AUTHOR } from "./authorTypes";

export const addAuthor = (payload) => {
  let id = Math.floor(Math.random() * 10000 + 10 - 1);
  let fullName = payload.name + " " + payload.surname;
  console.log(fullName);
  let author = { ...payload, id, fullName };
  return {
    type: ADD_AUTHOR,
    info: "Adding Author",
    payload: author,
  };
};

export const updateAuthor = (author) => {
  return {
    type: UPDATE_AUTHOR,
    info: "Update Author Detail",
    payload: author,
  };
};

export const deleteAuthor = (author) => {
  return {
    type: DELETE_AUTHOR,
    info: "Delete Author",
    payload: author,
  };
};

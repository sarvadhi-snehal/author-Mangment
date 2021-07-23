import { ADD_AUTHOR, UPDATE_AUTHOR, DELETE_AUTHOR } from "./authorTypes";

const intialState = {
  authors: [],
};

const authorReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_AUTHOR:
      console.log(action.payload);
      return {
        ...state,
        authors: [...state.authors, action.payload],
      };

    case UPDATE_AUTHOR:
      let a = action.payload;
      return {
        ...state,
        authors: state.authors.map((author) =>
          author.id === a.id ? a : author
        ),
      };

    case DELETE_AUTHOR:
      return {
        ...state,
        authors: state.authors.filter((a) => a.id !== action.payload),
      };
    default:
      return state;
  }
};

export default authorReducer;

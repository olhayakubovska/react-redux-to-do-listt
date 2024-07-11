import { readTodos } from "../api";

const setToDoActions = (searchPhrase = "", isAlphabetSorting = false) => {
  return (dispatch) => {
    readTodos(searchPhrase, isAlphabetSorting).then((data) => {
      dispatch({
        type: "SET_TODOS",
        payload: data,
      });
    });
  };
};

export default setToDoActions;

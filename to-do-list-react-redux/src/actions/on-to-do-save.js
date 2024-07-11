// const onToDoSaveAction = (id, value) => {
//   return (dispatch) => {
//     fetch(`http://localhost:3003/todos/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json;charset=utf-8" },
//       body: JSON.stringify({
//         title: value,
//         completed: false,
//         // isEditing: false,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch({
//           type: "SAVE_TODO",
//           payload: data,
//         });
//       });
//   };
// };

// export default onToDoSaveAction;

import { updateTodo } from "../api";

const onToDoSaveAction = (id, title) => {
  return (dispatch) => {
    const updatedTodo = { id, title };
    updateTodo(updatedTodo).then((data) => {
      dispatch({
        type: "SAVE_TODO",
        payload: data,
      });
    });
  };
};

export default onToDoSaveAction;

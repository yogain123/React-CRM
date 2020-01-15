import axios from "axios";

export function addData(data) {
  return async dispatch => {
    data.id = Date.now();
    await axios.post("http://localhost:2222/users", data);
    dispatch({
      type: "ADD_DATA",
      payload: data
    });
  };
}

export function deleteData(index, id) {
  return async dispatch => {
    await axios.delete(`http://localhost:2222/users/${id}`);
    dispatch({
      type: "DELETE_DATA",
      payload: index
    });
  };
}

export function modifyData(data, index) {
  return {
    type: "MODIFY_DATA",
    payload: { data, index }
  };
}

export function deleteAll() {
  return {
    type: "DELETE_ALL"
  };
}

export function getAll() {
  return async dispatch => {
    let data = await axios.get("http://localhost:2222/users");
    dispatch({
      type: "GET_ALL",
      payload: data.data
    });
  };
}

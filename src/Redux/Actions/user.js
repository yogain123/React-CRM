export function addData(data) {
  return {
    type: "ADD_DATA",
    payload: data
  };
}

export function deleteData(index) {
  return {
    type: "DELETE_DATA",
    payload: index
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

export function filterData(value) {
  return {
    type: "FILTER_DATA",
    payload: value
  };
}

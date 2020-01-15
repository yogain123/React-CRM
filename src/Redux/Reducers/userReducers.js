import _ from "lodash";

let initialState = [
  {
    firstName: "yogendra",
    lastName: "saxena",
    email: "yogendrasaxena56@gmail.com"
  },
  {
    firstName: "khushi",
    lastName: "srivastava",
    email: "KS@gmail.com"
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_DATA": {
      let newState = _.cloneDeep(state);
      newState.push(action.payload);
      return newState;
    }
    case "DELETE_ALL": {
      return [];
    }
    case "DELETE_DATA": {
      let newState = _.cloneDeep(state);
      newState.splice(action.payload, 1);
      return newState;
    }
    case "MODIFY_DATA": {
      let newState = _.cloneDeep(state);
      newState.splice(action.payload.index, 1, action.payload.data);
      return newState;
    }
    default: {
      return state;
    }
  }
}

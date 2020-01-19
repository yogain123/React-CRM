import _ from "lodash";

let initialState = [
  {
    firstName: "yogendra",
    lastName: "saxena",
    email: "yogendrasaxena56@gmail.com",
    show: true
  },
  {
    firstName: "sunder",
    lastName: "raghvan",
    email: "sunderrag2@gmail.com",
    show: true
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_DATA": {
      let newState = _.cloneDeep(state);
      action.payload.show = true;
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
      action.payload.data.show = true;
      newState.splice(action.payload.index, 1, action.payload.data);
      return newState;
    }
    case "FILTER_DATA": {
      let newState = _.cloneDeep(state);
      newState = newState.map(item => {
        if (item.email.includes(action.payload)) {
          item.show = true;
        } else {
          item.show = false;
        }
        return item;
      });
      return newState;
    }
    default: {
      return state;
    }
  }
}

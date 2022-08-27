import { NAME, LAST_NAME, EMAIL, PASSWORD } from "./actions/login";

export const initialState = {
  name: { state: false, value: "" },
  lastName: { state: false, value: "" },
  email: { state: false, value: "" },
  password: { state: false, value: "" },
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME:
      return {
        name: { state: true, value: action.payload },
        lastName: { state: false, value: state.lastName.value },
        email: { state: false, value: state.email.value },
        password: { state: false, value: state.password.value },
      };
    case LAST_NAME:
      return {
        name: { state: false, value: state.name.value },
        lastName: { state: true, value: action.payload },
        email: { state: false, value: state.email.value },
        password: { state: false, value: state.password.value },
      };
    case EMAIL:
      return {
        name: { state: false, value: state.name.value },
        lastName: { state: false, value: state.lastName.value },
        email: { state: true, value: action.payload },
        password: { state: false, value: state.password.value },
      };
    case PASSWORD:
      return {
        name: { state: false, value: state.name.value },
        lastName: { state: false, value: state.lastName.value },
        email: { state: false, value: state.email.value },
        password: { state: true, value: action.payload },
      };
    default:
      return state;
  }
};

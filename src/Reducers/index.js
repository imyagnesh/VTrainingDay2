import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./authReducer";
import users from "./userReducer";

export default combineReducers({
  form: formReducer,
  auth,
  users
});

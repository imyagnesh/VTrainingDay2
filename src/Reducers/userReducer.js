import * as types from "../constants/actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOAD:
      return { ...state, loading: true };
    case types.USER_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case types.USER_LOAD:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

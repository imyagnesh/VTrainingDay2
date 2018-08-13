import reducer from "../userReducer";
import * as types from "../../constants/actionTypes";

describe("user reducer", () => {
  expect(
    reducer(
      {},
      {
        type: types.USER_LOAD,
        payload: undefined
      }
    )
  ).toEqual({
    loading: true,
    data: [],
    error: false
  });
});

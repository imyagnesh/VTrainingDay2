import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../authActions";
import * as types from "../../constants/ActionTypes";
import fetchMock from "fetch-mock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Auth Actions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it("getUser Action", () => {
    fetchMock.getOnce("http://localhost:3000/users", {
      body: { todos: ["do something"] },
      headers: { "content-type": "application/json" }
    });

    const expectedActions = [
      { type: types.USER_LOAD, payload: undefined },
      { type: types.USER_SUCCESS, payload: { todos: ["do something"] } }
    ];
    const store = mockStore({ todos: [] });
    return store.dispatch(actions.getUser()).then(res => {
      // return of async actions

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

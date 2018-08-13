import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "./Store/configureStore";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const store = configureStore();
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const enzymeWrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );

  return {
    enzymeWrapper
  };
}

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Test App Component", () => {
  it("test for li", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find("li").length).toEqual(3);
    expect(
      enzymeWrapper
        .find(Link)
        .first()
        .prop("to")
    ).toEqual("/");
  });
});

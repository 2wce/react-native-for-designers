import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Home from "./screens/Home";
import { OPEN_MENU, CLOSE_MENU } from "./constants";

interface Action {
  type: string;
}

const initialState = {
  action: "closeMenu",
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CLOSE_MENU:
      return { action: "closeMenu" };

    case OPEN_MENU:
      return { action: "openMenu" };

    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;

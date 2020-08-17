import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
//import Home from "./screens/Home";
import { OPEN_MENU, CLOSE_MENU, UPDATE_NAME } from "./constants";
import AppNavigator from "./navigation";

interface Action {
  type: string;
  name?: string;
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

    case UPDATE_NAME:
      return { name: action.name, action: "closeMenu" };

    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;

import React, { useReducer, useEffect } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";

import TrackContext from "./src/context/TrackContext";

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  const initialState = {
    token: null,
    errorMessage: "",
  };

  function ourReducer(state, action) {
    switch (action.type) {
      case "ADD_ERROR":
        return { ...state, errorMessage: action.payload };
      case "SIGN_IN":
        return { errorMessage: "", token: action.payload };
      case "CLEAR_ERROR_MESSAGE":
        return { ...state, errorMessage: "" };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(ourReducer, initialState);

  return (
    <TrackContext.Provider value={{ state, dispatch }}>
      <App />
    </TrackContext.Provider>
  );
};

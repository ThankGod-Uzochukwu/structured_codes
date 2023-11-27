import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./src";
// import store from "./src/store/index";
// import { Provider } from "react-redux";

export default function App() {
  return (
    <SafeAreaProvider>
    {/* <Provider store={store}> */}
      <AppNavigator />
    {/* </Provider> */}
    </SafeAreaProvider>
  );
}


import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import store from "./store/index"
import { Provider } from "react-redux";
import AppNavigator from "./screens";

 function StructuredCode () {
  return (
    <SafeAreaProvider>
    <Provider store={store}>
      <AppNavigator />
    </Provider>
    </SafeAreaProvider>
  );
}

export default StructuredCode
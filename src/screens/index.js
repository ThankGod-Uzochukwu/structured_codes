import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import DropdownAlert from "react-native-dropdownalert";

// import {setDropDown, setNavigator} from "../utils/NavigationRef";
import {useDispatch, useSelector} from "react-redux";
import Pager from "./onboarding/index";
import Login from "./login/index"
import Register from "./signup/index"

import SideBar from "../partials/Sidebar";
// import {DWR, setDispatch} from "../utils/helper";
import {TabStack} from "./RouteConstants";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Dashboard = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                gestureEnabled: true,
                headerShown: false,
                drawerStyle: {width: DWR(315)},
            }}
            drawerContent={(props) => <SideBar {...props} />}
        >
            <Drawer.Screen name="Dashboard" component={TabStack}/>
            <Drawer.Screen name="TermsScreen" component={TermsScreen}/>
        </Drawer.Navigator>
    );
};

const ScreenStack = () => {
    // const {isLoggedIn, firstTimeUser} = useSelector((s) => s.App);
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     setDispatch(dispatch)
    // }, [])
    // if (firstTimeUser === "yes") {
        return (
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Pager">
                <Stack.Screen name="Pager" component={Pager}/>
            </Stack.Navigator>
        );
  //  }
    // if (!isLoggedIn) {
        return (
            <Stack.Navigator
                screenOptions={{headerShown: false}}
                initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
            </Stack.Navigator>
        );
 //   }

    return (<Dashboard/>
    );
};

const AppNavigator = () => (
    <>
        <NavigationContainer ref={(navigator) => setNavigator(navigator)}>
            <ScreenStack/>
        </NavigationContainer>
        <DropdownAlert ref={setDropDown}/>
    </>
);

export default AppNavigator;


// return (
//     <Stack.Navigator
//       screenOptions={{ headerShown: false }}
//       initialRouteName="ProfileDetailScreen"
//     >
//     <Stack.Screen
//         name="ProfileDetailScreen"
//         component={ProfileDetailScreen}
//       />
//     </Stack.Navigator>
//   );
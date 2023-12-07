// import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
// import {createDrawerNavigator} from "@react-navigation/drawer";
// import DropdownAlert from "react-native-dropdownalert";

import Pager from "./screens/onboarding";
import Register from "./screens/signup";
import FaceID from "./screens/faceid";
import Login from "./screens/login";
import Main from "./screens/main"

// import {setDropDown, setNavigator} from "../utils/NavigationRef";
// import {useDispatch, useSelector} from "react-redux";
// import Pager from "./pagers";
// import LoginScreen from "./login";
// import Registration from "./signup";
// import TermsScreen from "./terms";
// import ForgotPasswordScreen from "./forgot";
// import SideBar from "../partials/SideBar";
// import ProfileDetailScreen from "./profiledetails";
// import {DWR, setDispatch} from "../utils/helper";
// import {TabStack} from "./RouteConstants";

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const Dashboard = () => {
//     return (
//         <Drawer.Navigator
//             screenOptions={{
//                 gestureEnabled: true,
//                 headerShown: false,
//                 drawerStyle: {width: DWR(315)},
//             }}
//             drawerContent={(props) => <SideBar {...props} />}
//         >
//             <Drawer.Screen name="Dashboard" component={TabStack}/>
//             <Drawer.Screen name="TermsScreen" component={TermsScreen}/>
//         </Drawer.Navigator>
//     );
// };

// const ScreenStack = () => {
//     const {isLoggedIn, firstTimeUser} = useSelector((s) => s.App);
//     const dispatch = useDispatch()
//     useEffect(() => {
//         setDispatch(dispatch)
//     }, [])
//     if (firstTimeUser === "yes") {
//         return (
//             <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Pager">
//                 <Stack.Screen name="Pager" component={Pager}/>
//             </Stack.Navigator>
//         );
//     }
//     if (!isLoggedIn) {
//         return (
//             <Stack.Navigator
//                 screenOptions={{headerShown: false}}
//                 initialRouteName="Login"
//             >
//                 <Stack.Screen name="Login" component={LoginScreen}/>
//                 <Stack.Screen name="Forgot" component={ForgotPasswordScreen}/>
//                 <Stack.Screen name="Registration" component={Registration}/>
//             </Stack.Navigator>
//         );
//     }

//     return (<Dashboard/>
//     );
// };

const AppNavigator = () => (
    <>
        <NavigationContainer 
        screenOptions={{ headerShown: false }}
        // ref={(navigator) => 
        // setNavigator(navigator)}
        >
            {/* <Pager /> */}
            {/* <Register /> */}
            {/* <FaceID /> */}

      <Stack.Navigator initialRouteName="Pager" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Pager" component={Pager} />
        <Stack.Screen name="FaceID" component={FaceID} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
        </NavigationContainer>
        {/* <DropdownAlert ref={setDropDown}/> */}
    </>
);

export default AppNavigator;



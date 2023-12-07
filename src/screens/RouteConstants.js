import { HomeIcon, InvestIcon, ToolsIcon } from "../../assets/svgs";
import { Image, Text, Touch, View } from "../widgets";
import Home from "./home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SimpleLineIcons } from '@expo/vector-icons';






const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Index" component={Home} />
        </Stack.Navigator>
    );
};


const Pay = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Index" component={Home} />
        </Stack.Navigator>
    );
};
const Order = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Index" component={Home} />
        </Stack.Navigator>
    );
};
const Gift = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Index" component={Home} />
        </Stack.Navigator>
    );
};
const Rewards = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Index" component={Home} />
        </Stack.Navigator>
    );
};




const TAB_ROUTES = [
    { name: 'Home', component: HomeStack, icon: <SimpleLineIcons name="handbag" size={30} color="black" />, },
    { name: 'Pay', component: Pay, icon: <SimpleLineIcons name="handbag" size={30} color="black" />, },
    { name: 'Order', component: Order, icon: <SimpleLineIcons name="handbag" size={30} color="black" />, },
    { name: 'Gift', component: Gift, icon: <SimpleLineIcons name="handbag" size={30} color="black" />, },
    { name: 'Rewards', component: Rewards, icon: <SimpleLineIcons name="handbag" size={30} color="black" />, },
]

const TabBar = ({ state, navigation }) => {
    return (
        <View row justify={"space-around"} primary aligned px={10} pb={18}>
            {TAB_ROUTES.map((route, index) => {
                const label = route.name
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress', target: route.name, canPreventDefault: true,
                    });
                    if (!isFocused && !event.defaultPrevented) navigation.navigate({
                        name: route.name, merge: true
                    });
                };
                const onLongPress = () => navigation.emit({ type: 'tabLongPress', target: route.name, });
                return (
                    <Touch
                        key={label} accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={label} testID={label}
                        onPress={onPress} center
                        p={10} onLongPress={onLongPress}>
                        {<route.icon />}
                        <Text white={isFocused} gray={!isFocused} fs={12} mt={10}>{label}</Text>
                    </Touch>
                );
            })}
        </View>
    );
}

export const TabStack = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={p => <TabBar {...p} />}>
            {TAB_ROUTES?.map(route => <Tab.Screen
                key={route.name} name={route.name} component={route.component} />)}
        </Tab.Navigator>
    );
};
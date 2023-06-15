import React from "react";
import { StyleSheet } from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feed from "../screens/Feed";
import CreatePost from "../screens/createPost";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
          let iconName;
                if (route.name === "Feed") {
                    iconName = focused
                        ? 'book'
                        : 'book-outline';
                } else if (route.name === 'CreatePost') {
                    iconName = focused ? 'create' : 'create-outline';
                }
                return <Ionicons name={iconName} size={size} color={color}/>;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Feed" component={Feed} options={{headerShown:false}}/>
            <Tab.Screen name="CreatePost" component={CreatePost} options={{headerShown:false}}/>
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;
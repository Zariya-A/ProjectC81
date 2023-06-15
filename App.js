import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigation";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

global.__reanimatedWorkletInit=()=>{}

export default function App() {
  return (
    <NavigationContainer>       
      <DrawerNavigator />
    </NavigationContainer>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
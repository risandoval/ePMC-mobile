// import React from 'react';


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./components/Login";
import LoginStaff from './components/LoginStaff';
import LoginPatient from './components/LoginPatient';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginStaff" component={LoginStaff} />
        <Stack.Screen name="LoginPatient" component={LoginPatient} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

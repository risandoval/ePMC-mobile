import * as React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./components/Login";
import LoginStaff from './components/LoginStaff';
import LoginPatient from './components/LoginPatient';
import Navbar from './navigation/Navbar';
import AdminNavbar from "./components/admin/AdminNavbar";

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="LoginStaff" component={LoginStaff} options={{headerShown: false}}/>
        <Stack.Screen name="LoginPatient" component={LoginPatient} options={{headerShown: false}} />
        <Stack.Screen name="AdminNavbar" component={AdminNavbar} options={{headerShown: false}} />
        {/* <Stack.Screen name="Navbar" component={Navbar} options={{headerShown: false}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

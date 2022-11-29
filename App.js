import * as React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./components/Login";
import Register from './components/Register';
import LoginPatient from './components/LoginPatient';
import AdminNavbar from "./components/admin/AdminNavbar";
import DoctorNavbar from "./components/doctor/DoctorNavbar";
import PatientNavbar from "./components/patient/PatientNavbar";
import OTP from "./components/OTP";


const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="OTP" component={OTP} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
        <Stack.Screen name="LoginPatient" component={LoginPatient} options={{headerShown: false}} />
        <Stack.Screen name="AdminNavbar" component={AdminNavbar} options={{headerShown: false}} />
        <Stack.Screen name="DoctorNavbar" component={DoctorNavbar} options={{headerShown: false}} />
        <Stack.Screen name="PatientNavbar" component={PatientNavbar} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
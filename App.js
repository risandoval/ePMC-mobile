import * as React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./components/Login";
import LoginStaff from './components/LoginStaff';
import LoginPatient from './components/LoginPatient';
import AdminNavbar from "./components/admin/AdminNavbar";
import DoctorNavbar from "./components/doctor/DoctorNavbar";
import PatientNavbar from "./components/patient/PatientNavbar";
import AdminPatientRecView from "./components/admin/admin-screens/AdminPatientRecView";


const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="LoginStaff" component={LoginStaff} options={{headerShown: false}}/>
        <Stack.Screen name="LoginPatient" component={LoginPatient} options={{headerShown: false}} />
        <Stack.Screen name="AdminNavbar" component={AdminNavbar} options={{headerShown: false}} />
        <Stack.Screen name="DoctorNavbar" component={DoctorNavbar} options={{headerShown: false}} />
        <Stack.Screen name="PatientNavbar" component={PatientNavbar} options={{headerShown: false}} />
        <Stack.Screen name="AdminPatientRecView" component={AdminPatientRecView} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
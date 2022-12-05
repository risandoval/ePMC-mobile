import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//screens
import PatientDashboard from './patient-screens/PatientDashboard';
import PatientRecord from './patient-screens/PatientRecord';
import PatientSched from './patient-screens/PatientSched'
import Profile from "../Profile";

//screen names
const patientdashboard = 'Dashboard';
const patientrec = 'Patient Record';
const patientsched = 'Appointment';
const profile = 'Profile';

const Tab = createBottomTabNavigator();

export default function DoctorNavbar() {
    return(
        <Tab.Navigator initialRouteName={patientdashboard}
            screenOptions={({route}) => ({
                tabBarStyle: {
                    position:'absolute',
                    bottom: 0,
                    backgroundColor: '#fff',
                    height: 80,
                    paddingTop: 15,
                    paddingBottom: 15,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    // elevation: 50,
                    zIndex: 8 
                },
                tabBarIcon:({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if(rn === patientdashboard){
                        iconName = focused ? 'view-dashboard' : 'view-dashboard';
                        size = 40
                    } else if (rn === patientrec){
                        iconName = focused ? 'clipboard-plus' : 'clipboard-plus';
                        size = 40
                    } else if (rn === profile){
                        iconName = focused ? 'account' : 'account';
                        size = 40
                    } else if (rn === patientsched){
                        iconName = focused ? 'calendar-month' : 'calendar-month';
                        size = 40
                    }
                    return <MaterialCommunityIcons name={iconName} size={size} color={color}/>    
                }
            
            })}>
            
            <Tab.Screen name={patientdashboard} component={PatientDashboard} options={{headerShown: false}}/>
            <Tab.Screen name={patientrec} component={PatientRecord} options={{headerShown: false}}/>
            <Tab.Screen name={profile} component={Profile} options={{headerShown: false}}/>
            <Tab.Screen name={patientsched} component={PatientSched} options={{headerShown: false}}/>
        </Tab.Navigator>  
    )
}


import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//screens
import DoctorDashboard from './doctor-screens/DoctorDashboard';
import DoctorPatientRec from './doctor-screens/DoctorPatientRec';
import DoctorReports from './doctor-screens/DoctorReports';
import DoctorSched from './doctor-screens/DoctorSched';
import Profile from "../Profile";

//screen names
const docdashboard = 'Dashboard';
const docpatientrec = 'Patient Record';
const docreports = 'Reports';
const docsched = 'Appointment';
const profile = 'Profile';

const Tab = createBottomTabNavigator();

export default function DoctorNavbar() {
    return(
        <Tab.Navigator initialRouteName={docdashboard}
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

                    if(rn === docdashboard){
                        iconName = focused ? 'view-dashboard' : 'view-dashboard';
                        size = 40
                    } else if (rn === docpatientrec){
                        iconName = focused ? 'clipboard-plus' : 'clipboard-plus';
                        size = 40
                    } else if (rn === profile){
                        iconName = focused ? 'account' : 'account';
                        size = 40
                    } else if (rn === docsched){
                        iconName = focused ? 'calendar-month' : 'calendar-month';
                        size = 40
                    } else if (rn === docreports){
                        iconName = focused ? 'chart-bar' : 'chart-bar';
                        size = 40
                    }
                    return <MaterialCommunityIcons name={iconName} size={size} color={color}/>    
                }
            
            })}>
            
            <Tab.Screen name={docdashboard} component={DoctorDashboard} options={{headerShown: false}}/>
            <Tab.Screen name={docpatientrec} component={DoctorPatientRec} options={{headerShown: false}}/>
            <Tab.Screen name={profile} component={Profile} options={{headerShown: false}}/>
            <Tab.Screen name={docsched} component={DoctorSched} options={{headerShown: false}}/>
            <Tab.Screen name={docreports} component={DoctorReports} options={{headerShown: false}}/>
        </Tab.Navigator>  
    )
}


import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//screens
import AdminDashboard from './admin-screens/AdminDashboard';
import AdminPatientRec from './admin-screens/AdminPatientRec';
import AdminReports from './admin-screens/AdminReports';
import AdminSched from './admin-screens/AdminSched';

//screen names
const admdashboard = 'Dashboard';
const admpatientrec = 'Patient Record';
const admreports = 'Reports';
const admsched = 'Schedule';

const Tab = createBottomTabNavigator();

export default function Navbar() {
    return(
        <Tab.Navigator initialRouteName={admdashboard}
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

                    if(rn === admdashboard){
                        iconName = focused ? 'view-dashboard' : 'view-dashboard';
                        size = 40
                    } else if (rn === admpatientrec){
                        iconName = focused ? 'clipboard-plus' : 'clipboard-plus';
                        size = 40
                    } else if (rn === admsched){
                        iconName = focused ? 'calendar-month' : 'calendar-month';
                        size = 40
                    } else if (rn === admreports){
                        iconName = focused ? 'chart-bar' : 'chart-bar';
                        size = 40
                    }
                    return <MaterialCommunityIcons name={iconName} size={size} color={color}/>    
                }
            
            })}>
            
            <Tab.Screen name={admdashboard} component={AdminDashboard} options={{headerShown: false}}/>
            <Tab.Screen name={admpatientrec} component={AdminPatientRec} options={{headerShown: false}}/>
            <Tab.Screen name={admsched} component={AdminSched} options={{headerShown: false}}/>
            <Tab.Screen name={admreports} component={AdminReports} options={{headerShown: false}}/>
        </Tab.Navigator>  
    )
}


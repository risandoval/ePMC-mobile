import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//screens
import Dashboard from './screens/Dashboard';
import PatientRecord from './screens/PatientRecord';
import Reports from './screens/Reports';
import Schedule from './screens/Schedule';

//screen names
const dashboardName = 'Dashboard';
const patientrecordName = 'Patient Record';
const reportsName = 'Reports';
const scheduleName = 'Schedule';

const Tab = createBottomTabNavigator();

export default function Navbar() {
    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName={dashboardName} screenOptions={({route}) => ({
                tabBarIcon:({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if(rn === dashboardName){
                        iconName = focused ? 'view-dashboard' : 'view-dashboard';
                    } else if (rn === patientrecordName){
                        iconName = focused ? 'clipboard-plus' : 'clipboard-plus';
                    } else if (rn === scheduleName){
                        iconName = focused ? 'calendar-month' : 'calendar-month';
                    } else if (rn === reportsName){
                        iconName = focused ? 'chart-bar' : 'chart-bar';
                    }
                    return <MaterialCommunityIcons name={iconName} size={size} color={color}/>    
                }
            })}>
            
                <Tab.Screen name={dashboardName} component={Dashboard}/>
                <Tab.Screen name={patientrecordName} component={PatientRecord}/>
                <Tab.Screen name={scheduleName} component={Schedule}/>
                <Tab.Screen name={reportsName} component={Reports}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}


import { StyleSheet, ImageBackground, View, Text} from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

export default function LoginStaff() {
  return (
    <View style={styles.container}>
        <Text>Admin dashboard!</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
//   bgimage: {
//     width: '100%',
//     height: '100%',
//     flex: 1
//   },

  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
import { StyleSheet, ImageBackground, View, Text} from 'react-native';

export default function PatientDashboard() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/dashboardbg.png')} style={styles.bgimage}>
        <Text>Patient Dashboard!</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  bgimage: {
    width: '100%',
    height: '100%',
    flex: 1
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
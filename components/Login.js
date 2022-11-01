import { StyleSheet, ImageBackground, Button, View } from 'react-native';

// const loginbg = { uri: 'Loginbg.png' };

export default function Login( { navigation} ) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/loginbg.png')} style={styles.bgimage}>
        <Button title='Login as Employee'
            onPress={() => navigation.navigate("LoginStaff")}/>
        <Button title='Login as Patient'
            onPress={() => navigation.navigate("LoginPatient")}/>
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
  }
});
import { StyleSheet, ImageBackground, View, Text} from 'react-native';

export default function DoctorSched() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/schedbg.png')} style={styles.bgimage}>
        <Text>Login as Patient!</Text>
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
import { StyleSheet, ImageBackground, View, Text} from 'react-native';

export default function AdminPatientRecView() {
  return (
    <View style={styles.container}>
        <Text>I love you Mary Angel Rom Sandoval! - pj manuel</Text>
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
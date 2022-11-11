import { StyleSheet, ImageBackground, View, Pressable, Text} from 'react-native';

export default function LoginStaff() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/reportbg.png')} style={styles.bgimage}>
        <View style={styles.btnOuter}>
          <Pressable style={styles.btnInner}>
            <Text style={styles.btnText}>Patient Record</Text>
          </Pressable>
          <Pressable style={styles.btnInner}>
            <Text style={styles.btnText}>Inventory</Text>
          </Pressable>
        </View>
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

  btnOuter: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 100,
  },

  btnInner: {
    backgroundColor: '#D4EDFF',
    width: 150,
    height: 40,
    padding: 5,
    borderRadius: 10
  },

  btnText: {
    color: '#000',
    fontSize: 15,
  },
});
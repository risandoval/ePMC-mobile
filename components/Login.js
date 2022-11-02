import { StyleSheet, ImageBackground, Button, Pressable, View, Text, TextInput } from 'react-native';

export default function Login( { navigation} ) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/loginbg.png')} style={styles.bgimage}>
        <Text style={styles.txtLogin}> Login </Text>
        <View style={[styles.inputCard, styles.border1, styles.shadow]} >
          <TextInput
            style={styles.input}
            placeholder="Username"
          />
        </View>
        <View style={[styles.inputCard, styles.border2, styles.shadow]} >
          <TextInput
            style={styles.input}
            placeholder="Password"
          />
        </View>

        <Pressable  style={styles.btnLogin} onPress={() => navigation.navigate("LoginStaff")}>
          <Text style={styles.btnLogin1}> {'>'} </Text>
        </Pressable>

        <Pressable style={styles.forgot}>
          <Text> Forgot Password? </Text>
        </Pressable>
        
        
        {/* <Pressable style={styles.btnLogin} onPress={() => navigation.navigate("LoginStaff")}>
          <Text style={styles.btnText}>Login as Employee</Text>
        </Pressable> */}

        

        {/* <Pressable style={styles.btnLogin} onPress={() => navigation.navigate("LoginPatient")}>
          <Button title=" Login as Patient " />
        </Pressable> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
    // marginTop: 22
  },

  bgimage: {
    width: '100%',
    flex: 1,
    justifyContent: 'center'
  },

  txtLogin: {
    marginTop: -200,
    marginBottom: 45,
    color: "#4d4d4d",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center"
  },

  inputCard: {
    backgroundColor: 'white',
    width: '80%',
    // borderWidth: 1
  },

  border1: {
    borderTopRightRadius: 50,
    marginBottom: 1
  },

  border2: {
    borderBottomRightRadius: 50
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1.5,
  },

  input: {
    margin: 10,
    padding: 10,
    height: 60,
    fontSize: 20
  },

  btnLogin: {
    // flex: 1,
    position: 'absolute',
    // top: 100,
    right: 50,
    top: 395,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 12,
    // paddingHorizontal: 32,
    borderRadius: 50,
    // borderWidth: 5,
    backgroundColor: '#056EBA',
    height: 95,
    width: 95,
    padding: 5
  },

  btnLogin1: {
    color: 'white',
    fontSize: 30
  },

  forgot: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  txtForgot: {
    fontSize: 30,
  }
});
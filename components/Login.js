import React from "react";
import { StyleSheet, ImageBackground, Button, Pressable, View, Text, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';




export default function Login( { navigation} ) {
  const [username, setUsername] = React.useState(null)
  const [password, setPassword] = React.useState(null)

  const [isLogin, setIsLogin] = React.useState(false)

  const usernameHandler = (text) => {
    setUsername(text);
  }

  const checkLogin = () => {
    if (username == "" && password == "") {
      setIsLogin(false);
      alert("Required Field Is Missing");
    } else {
      setIsLogin(true);

      var loginpath = "http://e-pmc.com/Login";
      // var loginpath = {

      // };

      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      };

      var Data ={
        username: username,
        password: password
      };

      fetch(loginpath,{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
      .then((Response)=>Response.json())
      .then((Response)=>{
        alert(Response[0].Message)
        if (Response[0].Message == "Success") {
          console.log("true")
          this.props.navigation.navigate("LoginStaff");
        }
        console.log(Data);
      })
      .catch((error)=>{
        console.error("ERROR FOUND" + error);
      })

      // navigation.navigate(loginpath);
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/loginbg.png')} style={styles.bgimage}>
        <Text style={styles.txtLogin}> Login </Text>

        <View style={[styles.inputCard, styles.shadow]} >
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={usernameHandler}
            value={username}
          />
        </View>
        <View style={[styles.inputCard, styles.shadow]} >
          <TextInput
            style={styles.input}
            placeholder="Password"
            // secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            value={password}
          />
        </View>

        {/* <Pressable  style={styles.btnLogin} onPress={checkLogin}> */}
        <Pressable  style={styles.btnLogin} onPress={() => navigation.navigate("AdminNavbar")}>
          <AntDesign name="arrowright" style={styles.btnLogin1} />
        </Pressable>

        {/* <Pressable > */}
          <Text onPress={() => navigation.navigate("LoginStaff")} style={styles.forgot}> Forgot Password? </Text>
        {/* </Pressable> */}
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
    marginTop: -30,
    marginBottom: 80,
    color: "#4d4d4d",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center"
  },

  inputCard: {
    backgroundColor: '#FFF',
    width: '85%',
    borderRadius: 20,
    marginLeft: 20,
    marginBottom: 10,
    // borderWidth: 1
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 3,
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
    right: 15,
    top: 475,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#056EBA',
    height: 95,
    width: 95,
    padding: 5
  },

  btnLogin1: {
    color: '#fff',
    fontSize: 50
  },

  forgot: {
    marginTop: 10,
    marginRight: 30,
    fontSize: 20,
    textAlign: 'right',
    color: '#BFBFBF'
  }
});
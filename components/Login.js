import React, { useState } from "react";
import { StyleSheet, ImageBackground, Button, Pressable, View, Text, TextInput, StatusBar } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";




export default function Login( { navigation} ) {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const [isLogin, setIsLogin] = useState(false)

  const emailHandler = (text) => {
    setEmail(text);
  }

  const passHandler = (text) => {
    setPass(text);
  }

  const checkLogin = async () => {

    if (email == "" || pass == "") {
      setIsLogin(false);
      alert("Required Field Is Missing");
    } else {

      setIsLogin(true);

      var loginpath = "http://192.168.1.13:80/epmc-4/api/Login_mobile/validation";

      var data ={
        email: email,
        pass: pass
      };

      await fetch(loginpath,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type' : 'application/json;charset=UTF-8',
          'X-API-KEY':'myapi',
          'Authorization':'Basic YWRtaW46YWRtaW4xMjM='
        },
        body: JSON.stringify(data)
      })  
      .then((response)=>response.json())
      .then((response)=>{
        alert(response[0].Message)
        if (response[0].Message == "Login successful") {
          console.log("true")
          navigation.navigate("AdminNavbar");
        }
      })
      .catch((error)=>{
        console.error("ERROR FOUND " + error);
      })
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/loginbg.png')} style={styles.bgimage}>
        <Text style={styles.txtLogin}> Login </Text>

        {/* <Pressable > */}
        <Text onPress={() => navigation.navigate("LoginStaff")} style={styles.forgot}> Forgot Password? </Text>
        {/* </Pressable> */}

        <View style={[styles.inputCard, styles.shadow]} >
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={emailHandler}
            value={email}
          />
        </View>
        <View style={[styles.inputCard, styles.shadow]} >
          <TextInput
            style={styles.input}
            placeholder="Password"
            // secureTextEntry={true}
            onChangeText={passHandler}
            value={pass}
          />
        </View>

        <Pressable  style={styles.btnLogin} onPress={checkLogin}>
        {/* <Pressable  style={styles.btnLogin} onPress={() => navigation.navigate("AdminNavbar")}> */}
          {/* <AntDesign name="arrowright" style={styles.btnLogin1} /> */}
          <Text style={styles.btnLogin1}>Login</Text>
        </Pressable>

      </ImageBackground>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },

  bgimage: {
    width: '100%',
    flex: 1,
    justifyContent: 'center'
  },

  txtLogin: {
    marginTop: responsiveHeight(-1),
    marginBottom: responsiveHeight(8),
    color: "#4d4d4d",
    fontSize: responsiveFontSize(6),
    fontWeight: "bold",
    textAlign: "center"
  },

  forgot: {
    marginRight: responsiveWidth(11),
    marginBottom: responsiveHeight(0.5),
    fontSize: responsiveFontSize(1.5),
    textAlign: 'right',
    color: '#BFBFBF'
  },

  inputCard: {
    backgroundColor: '#FFF',
    width: responsiveWidth(80),
    borderRadius: 20,
    marginHorizontal: responsiveWidth(10),
    marginBottom: responsiveHeight(1),
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
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#056EBA',
    width: responsiveWidth(30),
    height: responsiveHeight(5),
    marginHorizontal: responsiveWidth(35),
    marginTop: responsiveHeight(1),
    padding: 5
  },

  btnLogin1: {
    color: '#fff',
    fontSize: 20
  },

  
});
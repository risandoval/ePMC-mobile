import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { StyleSheet, ImageBackground, Pressable, View, Text, TextInput, StatusBar, TouchableNativeFeedbackComponent } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";


export default function Login( {navigation} ) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [isLogin, setIsLogin] = useState(false);

  const emailHandler = (text) => {
    setEmail(text);
  }

  const passHandler = (text) => {
    setPass(text);
  }

  const checkLogin = async() => {
    if (email == "" || pass == "") {
      setIsLogin(false);
      alert("Required Field Is Missing");
    } else {
      
      setIsLogin(true);

      var loginpath = "http://192.168.1.5:80/epmc-4/api/Login_mobile/validation";
      var loginpath2 = "http://192.168.2.115:80/epmc-4/api/Login_mobile/validation";

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
        (async function() {
          if (response.role == "Admin") {
            await AsyncStorage.setItem('role', "Admin");
            await AsyncStorage.setItem('email', email);
            navigation.navigate("AdminNavbar");
          } 
          else if (response.role == "Doctor") {
            await AsyncStorage.setItem('role', "Doctor");
            await AsyncStorage.setItem('email', email);
            navigation.navigate("DoctorNavbar");
          }
          else if (response.role == "patient") {
            await AsyncStorage.setItem('role', "patient");
            await AsyncStorage.setItem('email', email);
            navigation.navigate("PatientNavbar");
          }
        })();
      })
      .catch((error)=>{
        console.error("ERROR FOUND " + error);
      })
    }
  }
  const keeploggedin = async() => {
    const role = await AsyncStorage.getItem('role');
    const email = await AsyncStorage.getItem('email');
    // console.log(email);
    if (email !== null && role !== null) {
      if (role == "Admin") {
        navigation.navigate("AdminNavbar");
      }
      else if (role == "Doctor") {
        navigation.navigate("DoctorNavbar");
      }
      else if (role == "patient") {
        navigation.navigate("PatientNavbar");
      }
    } else {}
  }
  keeploggedin();

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/loginbg.png')} style={styles.bgimage}>
        <Text style={styles.txtLogin}> Login </Text>

        {/* <Pressable > */}
        {/* <Text onPress={() => navigation.navigate("LoginStaff")} style={styles.forgot}> Forgot Password? </Text> */}
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
            secureTextEntry={true}
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
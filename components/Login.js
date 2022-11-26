import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { StyleSheet, ImageBackground, Pressable, View, Text, TextInput } from 'react-native';
import {responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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

      // var loginpath = "http://192.168.1.5:80/epmc-4/login_mobile";
      // var loginpath = "http://192.168.2.115:80/epmc-4/login_mobile";

      var loginpath = "http://e-pmc.com/login_mobile";

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
          if (response[0].role == "Admin") {
            await AsyncStorage.setItem('admin', JSON.stringify(response));
            // await AsyncStorage.setItem('email', email);
            navigation.reset({
              index: 0,
              routes: [{ name: "AdminNavbar" }],
            });
          } 
          else if (response[0].role == "Doctor") {
            await AsyncStorage.setItem('doctor', JSON.stringify(response));
            // await AsyncStorage.setItem('email', email);
            navigation.reset({
              index: 0,
              routes: [{ name: "DoctorNavbar" }],
            });
          }
          else if (response[0].role == "patient") {
            await AsyncStorage.setItem('patient', JSON.stringify(response));
            // await AsyncStorage.setItem('email', email);
            navigation.reset({
              index: 0,
              routes: [{ name: "PatientNavbar" }],
            });
          } else if (response[0].role == "Invalid") {
            alert("Invalid email or password");
          }
        })();
      })
      .catch((error)=>{
        console.error("ERROR FOUND " + error);
      })
    }
  }

  const keeploggedin = async() => {
    try {
      const data1 = await AsyncStorage.getItem('admin');
      const data2 = await AsyncStorage.getItem('doctor');
      const data3 = await AsyncStorage.getItem('patient');
      const adm = JSON.parse(data1);
      const doc = JSON.parse(data2);
      const pat = JSON.parse(data3);
      // const datata = JSON.parse(getdata);
      // const email = await AsyncStorage.getItem('email');
      if (adm !== null || doc !== null || pat !== null) {
        if (adm !== null) {
          navigation.reset({
            index: 0,
            routes: [{ name: "AdminNavbar" }],
          });
        }
        else if (doc !== null) {
          navigation.reset({
            index: 0,
            routes: [{ name: "DoctorNavbar" }],
          });
        }
        else if (pat !== null) {
          navigation.reset({
            index: 0,
            routes: [{ name: "PatientNavbar" }],
          });
        } 
      }
    } catch (e) {
      alert('Failed to fetch the input from storage');
    }
    
  }

  useEffect(() => {
    keeploggedin();
  }, []);

  

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/login.png')} style={styles.bgimage}>
        <Text style={styles.txtLogin}> LOGIN </Text>

        

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

        <Pressable >
        <Text onPress={() => navigation.navigate("Register")} style={styles.forgot}>Register Now</Text>
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
  },

  bgimage: {
    width: '100%',
    flex: 1,
    justifyContent: 'center'
  },

  txtLogin: {
    marginTop: hp('27%'),
    marginBottom: hp('5%'),
    color: "#033d68",
    fontSize: hp('4%'),
    fontWeight: "bold",
    textAlign: "center"
  },

  forgot: {
    // marginRight: responsiveWidth(11),
    marginTop: hp('2%'),
    fontSize: hp('2.2%'),
    alignSelf: 'center',
    // justifyContent: 'flex-end',
    textAlign: 'center',
    color: '#787878',
    textDecorationLine: 'underline',
    // borderWidth: 1,
  },

  inputCard: {
    backgroundColor: '#FFF',
    width: wp('80%'),
    borderRadius: 10,
    marginHorizontal: wp('10%'),
    marginBottom: hp('1%'),
    elevation: 2,
  },

  input: {
    margin: 10,
    padding: 5,
    height: hp('4%'),
    fontSize: hp('2.5%'),
  },

  btnLogin: {
    // flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#033d68',
    width: wp('35%'),
    height: hp('6%'),
    marginHorizontal: wp('30%'),
    marginTop: hp('2%'),
    padding: 7,
    
  },

  btnLogin1: {
    color: '#fff',
    fontSize: 20,
  },
});
import * as SecureStore from 'expo-secure-store';
import React, { useState, useEffect } from "react";
import { StyleSheet, ImageBackground, Pressable, View, Text, TextInput, Dimensions, Image } from 'react-native';
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

      // var loginpath = "http://192.168.1.16:80/epmc-4/login_mobile";
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
          if (response[0] !== null) {
            if (response[0].status == '0'){
              alert("Account is not activated yet. Please check your email for activation link.");
            } else {
              alert("Please check your email for verification");
              navigation.navigate("OTP",{sess:data,data:response[0].email,data1:response[0].verification_code,data2:response[0].nav});
              await SecureStore.setItemAsync('data',JSON.stringify(data));
              // navigation.navigate(response[0].nav)
            }
          } else {
            alert("Invalid email or password");
          }
        })();
      })
      .catch((error)=>{
        console.error("ERROR FOUND " + error);
      })
    }
  }

  // const keeploggedin = async() => {
  //   try {
  //       const data1 = await SecureStore.getItemAsync('admin');
  //       const data2 = await SecureStore.getItemAsync('doctor');
  //       const data3 = await SecureStore.getItemAsync('patient');
  //       const adm = JSON.parse(data1);
  //       const doc = JSON.parse(data2);
  //       const pat = JSON.parse(data3);
  //     // const datata = JSON.parse(getdata);
  //     if (adm !== null || doc !== null || pat !== null) {
  //       if (adm !== null) {
  //         navigation.reset({
  //           index: 0,
  //           routes: [{ name: "AdminNavbar" }],
  //         });
  //       }
  //       else if (doc !== null) {
  //         navigation.reset({
  //           index: 0,
  //           routes: [{ name: "DoctorNavbar" }],
  //         });
  //       }
  //       else if (pat !== null) {
  //         navigation.reset({
  //           index: 0,
  //           routes: [{ name: "PatientNavbar" }],
  //         });
  //       } 
  //     }
  //   } catch (e) {
  //     alert('Failed to fetch the input from storage');
  //   }
    
  // }

  // useEffect(() => {
  //   keeploggedin();
  // }, []);

  

  return (
    <View style={styles.container}>
      {/* <ImageBackground source={require('../assets/login.png')} style={styles.logo}> */}
      <Image source={require('../assets/epmc-logo.png')} style={styles.logo}/>
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
          <Text style={styles.btnLogin1}>LOGIN</Text>
        </Pressable>

        <Pressable >
        <Text onPress={() => navigation.navigate("Register")} style={styles.forgot}>Register Now</Text>
        </Pressable>

      {/* </ImageBackground> */}
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: wp('30%'),
    height: hp('11%'),
    // flex: 1,
    // justifyContent: 'center',
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
  },

  txtLogin: {
    marginTop: hp('1%'),
    marginBottom: hp('1%'),
    color: "#033d68",
    fontSize: hp('3.5%'),
    fontWeight: "bold",
    textAlign: "center"
  },

  forgot: {
    // marginRight: responsiveWidth(11),
    marginTop: hp('1%'),
    fontSize: hp('2%'),
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
    fontSize: hp('1.8%'),
  },

  btnLogin: {
    // flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#033d68',
    width: wp('35%'),
    height: hp('4.5%'),
    marginTop: hp('6%'),
    padding: 7,
    
  },

  btnLogin1: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
});
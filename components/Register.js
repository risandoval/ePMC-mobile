import { StyleSheet, ImageBackground, View, Text, TextInput, ScrollView, Pressable} from 'react-native';
import {responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function LoginStaff() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/register.png')} style={styles.bgimage}>
        <Text style={styles.txtRegister}> REGISTER </Text>
        <ScrollView style={styles.scroll}>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="First Name"
              // onChangeText={emailHandler}
              // value={email}
            />
          </View>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Middle Name"
              // onChangeText={emailHandler}
              // value={email}
            />
          </View>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Surname"
              // onChangeText={emailHandler}
              // value={email}
            />
          </View>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Age"
              // onChangeText={emailHandler}
              // value={email}
            />
          </View>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Birthday (yyyy-mm-dd)"
              // onChangeText={emailHandler}
              // value={email}
            />
          </View>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Email"
              // onChangeText={emailHandler}
              // value={email}
            />
          </View>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              // onChangeText={passHandler}
              // value={pass}
            />
          </View>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry={true}
              // onChangeText={passHandler}
              // value={pass}
            />
          </View>
          <Pressable >
            <Text onPress={() => navigation.navigate("Register")} style={styles.forgot}>Accept Terms & Conditions</Text>
          </Pressable>
          <Pressable  style={styles.btnLogin} >
          {/* <Pressable  style={styles.btnLogin} onPress={() => navigation.navigate("AdminNavbar")}> */}
          {/* <AntDesign name="arrowright" style={styles.btnLogin1} /> */}
          <Text style={styles.btnLogin1}>Login</Text>
        </Pressable>
        </ScrollView>
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

  txtRegister: {
    marginTop: hp('40%'),
    marginBottom: hp('5%'),
    color: "#033d68",
    fontSize: hp('4%'),
    fontWeight: "bold",
    textAlign: "center"
  },

  scroll:{
    marginTop: hp('-5%'),
    marginBottom: hp('5%'),
    paddingTop: hp('1%'),
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
    padding: 1,
    height: hp('3%'),
    fontSize: hp('2%'),
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
    marginBottom: hp('6%'),
    padding: 7,
  },

  btnLogin1: {
    color: '#fff',
    fontSize: 20,
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
});
import {StyleSheet, ImageBackground, View, Text, TextInput, ScrollView, Pressable, Image,
        Alert, Button} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useState } from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';


export default function Register({navigation}) {
  const [checked, setChecked] = useState(false);
  //for birthday
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  function register() {
    if (!checked) {
      // alert("Accept the Terms and Conditions by checking the box to register.");
      Alert.alert(
        "Note",
        "Read and accept the Terms and Conditions by checking the box before registering.",
      );
    }
    else {
      Alert.alert(
        "",
        "Register !!!",
      );
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/epmc-logo.png')} style={styles.logo}/>
        <Text style={styles.txtRegister}> REGISTER </Text>
        <ScrollView style={styles.scroll}>
          <Text style={styles.labelInfo}>Personal Information</Text>
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
              placeholder="Sex"
              // onChangeText={emailHandler}
              // value={email}
            />
          </View>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Occupation"
              // onChangeText={emailHandler}
              // value={email}
            />
          </View>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Address"
              // onChangeText={emailHandler}
              // value={email}
            />
          </View>

          <Text style={styles.labelInfo}>Contact Information</Text>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Cellphone # (09xxxxxxxxx)"
              // onChangeText={emailHandler}
              // value={email}
            />
          </View>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Telephone # (xxxxxxx)"
              // onChangeText={passHandler}
              // value={pass}
            />
          </View>

          <Text style={styles.labelInfo}>Emergency Contact</Text>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Name of Contact Person"
              // onChangeText={passHandler}
              // value={pass}
            />
          </View>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Relationship"
              // onChangeText={passHandler}
              // value={pass}
            />
          </View>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Email"
              // onChangeText={passHandler}
              // value={pass}
            />
          </View>

          <Text style={styles.labelInfo}>Password</Text>
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
          
          <Text style={styles.note}>Please do note that your registration is stil pending and will be 
          validated upon visting the Pagtakhan Medical Clinic. Once validated, your patient ID will be 
          provided by the secretaries and will serve as your username.</Text>
          
          <View style={styles.termsContainer}>
            <Pressable onPress={() => setChecked(true)}>
              {checked ? <Pressable onPress={() => setChecked(false)}><Fontisto name="checkbox-active" size={18} color="#787878" style={styles.checkbox} /></Pressable> : 
              <Fontisto name="checkbox-passive" size={18} color="#787878" style={styles.checkbox} />}
            </Pressable>

            <Pressable>
              <Text onPress={() => navigation.navigate("Terms")} style={styles.terms}>Accept Terms & Conditions</Text>
            </Pressable>
          </View>
          
          
          {/* <Pressable  style={styles.btnRegister} > */}
          <Pressable  style={styles.btnRegister} onPress={() => register()}>
            <Text style={styles.btnRegistertxt}>REGISTER</Text>
          </Pressable>
          
        </ScrollView>
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

  logo: {
    width: wp('30%'),
    height: hp('11%'),
    marginTop: hp('5%'),
  },


  txtRegister: {
    marginTop: hp('2%'),
    marginBottom: hp('5%'),
    color: "#033d68",
    fontSize: hp('3%'),
    fontWeight: "bold",
    textAlign: "center"
  },

  labelInfo:{
    marginHorizontal: wp('10%'),
    color: "#033d68",
    fontSize: hp('1.8%'),
    marginBottom: hp('0.5%'),
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
    fontSize: hp('1.5%'),
  },

  note: {
    marginHorizontal: wp('10%'),
    color: "#033d68",
    fontSize: hp('1%'),
    textAlign: 'center'
  },

  termsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },

  terms: {
    marginTop: hp('2%'),
    fontSize: hp('2%'),
    alignSelf: 'center',
    textAlign: 'center',
    color: '#787878',
    textDecorationLine: 'underline',
    // borderWidth: 1,
  },
  
  checkbox: {
    marginTop: hp('2.6%'),
    marginRight: wp('2%'),
  },

  btnRegister: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#033d68',
    width: wp('35%'),
    height: hp('4.5%'),
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
    padding: 7,
    
  },

  btnRegistertxt: {
    color: '#fff',
    fontSize: hp('2.2%'),
  },

  
});
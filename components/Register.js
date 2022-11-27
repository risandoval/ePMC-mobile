import {StyleSheet, View, Text, TextInput, ScrollView, Pressable, Image,
        Alert, Button} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useState } from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import DateTimePicker from '@react-native-community/datetimepicker';



export default function Register({navigation}) {
  const [checked, setChecked] = useState(false);
  //null value of inputs
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [bday, setBday] = useState("");
  const [sex, setSex]  = useState("");
  const [occupation, setOccupation] = useState("");
  const [address, setAddress] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [telephoneNum, setTelephoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [emerContact, setEmerContact] = useState("");
  const [relationship, setRelationship] = useState("");
  const [emerEmail, setEmerEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  //START for birthday
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [dateText, setDateText] = useState(false);
  const birthdayText = 'Birthday';

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    setDateText(true);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(true);
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  //END for birthday

  //START form validations
  const register = async() => {
    //personal info required
    if (firstName == "" || middleName == "" || surname == "" || age == "" || 
        bday == "" || sex == "" || occupation == "" || address == "" ) 
    {
      Alert.alert(
        "Warning",
        "Input fields of Personal Information are Required"
      )
    }
    //at least one input in contact info
    if (contactNum == "" && telephoneNum == "" && email == "") {
      Alert.alert(
        "Warning",
        "Enter at least one input field on Contact Information"
      )
    }
    //emergency contact required
    if (emerContact == "" || relationship == "" || emerEmail == "") {
      Alert.alert(
        "Warning",
        "Input fields of Emergency Contact are Required"
      )
    }
    //password required
    if (password == "" || confirmPassword == "") {
      Alert.alert(
        "Warning",
        "Input fields of Password are Required"
      )
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
              onChangeText={(text) => setFirstName(text)}
              value={firstName}
            />
          </View>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Middle Name"
              onChangeText={(text) => setMiddleName(text)}
              value={middleName}
            />
          </View>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Surname"
              onChangeText={(text) => setSurname(text)}
              value={surname}
            />
          </View>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Age"
              onChangeText={(text) => setAge(text)}
              value={age}
            />
          </View>
          <View style={[styles.inputCard, styles.shadow]} >
            {/* <Pressable onPress={showDatepicker} style={styles.input}>
              <Text style={styles.bday}>
                {dateText ? date.toDateString() : birthdayText}
              </Text>
            </Pressable>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
              />
            )} */}
            <TextInput
              style={styles.input}
              placeholder="Birthday"
              onChangeText={(text) => setBday(text)}
              value={bday}
            />
          </View>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Sex"
              onChangeText={(text) => setSex(text)}
              value={sex}
            />
          </View>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Occupation"
              onChangeText={(text) => setOccupation(text)}
              value={occupation}
            />
          </View>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Address"
              onChangeText={(text) => setAddress(text)}
              value={address}
            />
          </View>

          <Text style={styles.labelInfo}>Contact Information</Text>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Cellphone # (09xxxxxxxxx)"
              onChangeText={(text) => setContactNum(text)}
              value={contactNum}
            />
          </View>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Telephone # (xxxxxxx)"
              onChangeText={(text) => setTelephoneNum(text)}
              value={telephoneNum}
            />
          </View>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </View>

          <Text style={styles.labelInfo}>Emergency Contact</Text>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Name of Contact Person"
              onChangeText={(text) => setEmerContact(text)}
              value={emerContact}
            />
          </View>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Relationship"
              onChangeText={(text) => setRelationship(text)}
              value={relationship}
            />
          </View>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Email of Contact Person"
              onChangeText={(text) => setEmerEmail(text)}
              value={emerEmail}
            />
          </View>

          <Text style={styles.labelInfo}>Password</Text>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>
          <View style={[styles.inputCard, styles.shadow]} >
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry={true}
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
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

  bday: {
    fontSize: hp('1.5%'),
    paddingTop: hp('0.5%'),
    color: '#9e9e9e',
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
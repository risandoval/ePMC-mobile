import {StyleSheet, View, Text, TextInput, ScrollView, Pressable, Image,
        Alert, Button} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useState } from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import DateTimePicker from '@react-native-community/datetimepicker';
import { validatePathConfig } from '@react-navigation/native';



export default function Register({navigation}) {
  const [checked, setChecked] = useState(false);
  //null value of inputs and errorMsg
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [middleNameError, setMiddleNameError] = useState("");
  const [surname, setSurname] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [age, setAge] = useState("");
  const [ageError, setAgeError] = useState("");
  const [bday, setBday] = useState("");
  const [bdayError, setBdayError] = useState("");
  const [sex, setSex]  = useState("");
  const [sexError, setSexError]  = useState("");
  const [occupation, setOccupation] = useState("");
  const [occupationError, setOccupationError] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [contactNumError, setContactNumError] = useState("");
  const [telephoneNum, setTelephoneNum] = useState("");
  const [telephoneNumError, setTelephoneNumError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emerContact, setEmerContact] = useState("");
  const [emerContactError, setEmerContactError] = useState("");
  const [relationship, setRelationship] = useState("");
  const [relationshipError, setRelationshipError] = useState("");
  const [emerEmail, setEmerEmail] = useState("");
  const [emerEmailError, setEmerEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");


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

    const formattedDate = currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate()
    setBday(formattedDate);
    console.log(bday);
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
    //regex validation - alphabet only
    const validateName = (name) => {
      let re = /^[a-zA-Z]+$/;
      return re.test(name);
    }

    //regex validation - numbers only
    const validateNum = (num) => {
      let re = /^[0-9]+$/;
      return re.test(num);
    }

    //regex validation - data (yyyy-mm-dd)
    const validateDate = (date) => {
      let re = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
      return re.test(date);
    }


    //first name validation
    var firstNameValid = false;
    // const [firstNameValid1, setFirstNameValid1] = useState(false);
    if(firstName == "") {
      setFirstNameError("First name is required");
    }
    else if(!validateName(firstName)) {
      setFirstNameError("First name must be alphabetic");
    }
    else { 
      setFirstNameError("");
      firstNameValid = true;
    }

    //middle name validation
    var middleNameValid = false;
    if(middleName == "") {
      setMiddleNameError("Middle name is required");
    }
    else if(!validateName(middleName)) {
      setMiddleNameError("Middle name must be alphabetic");
    }
    else {
      setMiddleNameError("");
      middleNameValid = true; 
    }

    //surname validation
    var surnameValid = false;
    if(surname == "") {
      setSurnameError("Surname is required");
    }
    else if(!validateName(surname)) {
      setSurnameError("Surname must be alphabetic");
    }
    else {
      setSurnameError("");
      surnameValid = true;
    }

    //age validation
    var ageValid = false;
    if(age == "") {
      setAgeError("Age is required");
    }
    else if(!validateNum(age)) {
      setAgeError("Age must be numeric");
    }
    else {
      setAgeError("");
      ageValid = true; 
    }

    //birthday validation
    var bdayValid = false;
    if(bday == "") {
      setBdayError("Birthday is required")
    }
    else {
      setBdayError("");
      bdayValid = true;
    }

    //sex validation
    var sexValid = false;
    if(sex == "") {
      setSexError("Sex is required")
    }
    else {
      setSexError("");
      sexValid = true;
    }

    //occupation validation
    var occupationValid = false;
    if(occupation == "") {
      setOccupationError("Occupation is required")
    }
    else if (!validateName(occupation)) {
      setOccupationError("Occupation must be alphabetic")
    }
    else {
      setOccupationError("");
      occupationValid = true; 
    }

    //address validation
    var addressValid = false;
    if(address == "") {
      setAddressError("Address is required")
    }
    else {
      setAddressError("");
      addressValid = true;
    }

    //all fields are now valid
    if(firstNameValid && middleNameValid && surnameValid && ageValid && bdayValid && sexValid && occupationValid && addressValid) {
      Alert.alert("Success", "Registration successful");
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/epmc-logo.png')} style={styles.logo}/>
        <Text style={styles.txtRegister}> REGISTER </Text>
        <ScrollView style={styles.scroll}>
          <Text style={styles.labelInfo}>Personal Information</Text>
          <View style={[styles.inputCard, styles.shadow]} >
            <Text style={styles.label}>First Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. Juan"
              onChangeText={(text) => setFirstName(text)}
              value={firstName}
            />
          </View>
          <Text style={styles.errorMsg}>{firstNameError}</Text>

          <View style={[styles.inputCard, styles.shadow]} >
            <Text style={styles.label}>Middle Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. Reyes"
              onChangeText={(text) => setMiddleName(text)}
              value={middleName}
            />
          </View>
          <Text style={styles.errorMsg}>{middleNameError}</Text>

          <View style={[styles.inputCard, styles.shadow]} >
            <Text style={styles.label}>Surname:</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. De la Cruz"
              onChangeText={(text) => setSurname(text)}
              value={surname}
            />
          </View>
          <Text style={styles.errorMsg}>{surnameError}</Text>

          <View style={[styles.inputCard, styles.shadow]} >
            <Text style={styles.label}>Age:</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. 25"
              onChangeText={(text) => setAge(text)}
              value={age}
            />
          </View>
          <Text style={styles.errorMsg}>{ageError}</Text>

          <View style={[styles.inputCard, styles.shadow]} >
            <Text style={styles.label}>Birthday:</Text>
            <Pressable onPress={showDatepicker} style={styles.input}>
              <Text style={styles.bday}>
                {dateText ? date.toDateString() : birthdayText}
              </Text>
            </Pressable>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                // is24Hour={true}
                onChange={onChange}
              />
            )}
            
            {/* <TextInput
              style={styles.input}
              placeholder="yyyy-mm-dd"
              onChangeText={(text) => setBday(text)}
              value={bday}
            /> */}
          </View>
          <Text style={styles.errorMsg}>{bdayError}</Text>

          <View style={[styles.inputCard, styles.shadow]} >
            <Text style={styles.label}>Sex:</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. male"
              onChangeText={(text) => setSex(text)}
              value={sex}
            />
          </View>
          <Text style={styles.errorMsg}>{sexError}</Text>

          <View style={[styles.inputCard, styles.shadow]} >
            <Text style={styles.label}>Occupation:</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. Accountant"
              onChangeText={(text) => setOccupation(text)}
              value={occupation}
            />
          </View>
          <Text style={styles.errorMsg}>{occupationError}</Text>

          <View style={[styles.inputCard, styles.shadow]} >
            <Text style={styles.label}>Address:</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. 123 Narra Street, Bacoor, Cavite"
              onChangeText={(text) => setAddress(text)}
              value={address}
            />
          </View>
          <Text style={styles.errorMsg}>{addressError}</Text>

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

  label: {
    marginTop: hp('1.3%'),
    marginLeft: wp('2%'),
    marginBottom: hp('-1%'),
    fontSize: hp('1.5%'),
  },

  inputCard: {
    flexDirection: 'row',
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

  errorMsg: {
    color: '#FF0000',
    marginHorizontal: wp('10%'),
    marginTop: hp('-0.8%'),
    // marginBottom: hp('1%'),
  },

  
});
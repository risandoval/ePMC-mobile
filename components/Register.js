import {StyleSheet, View, Text, TextInput, ScrollView, Pressable, Image,
        Alert, Button} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useState } from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';



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
  const [civilStatus, setCivilStatus] = useState("");
  const [civilStatusError, setCivilStatusError] = useState("");
  const [occupation, setOccupation] = useState("");
  const [occupationError, setOccupationError] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [contactInfoError, setContactInfoError] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [contactNumError, setContactNumError] = useState("");
  const [telephoneNum, setTelephoneNum] = useState("");
  const [telephoneNumError, setTelephoneNumError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emerContactName, setEmerContactName] = useState("");
  const [emerContactNameError, setEmerContactNameError] = useState("");
  const [relationship, setRelationship] = useState("");
  const [relationshipError, setRelationshipError] = useState("");
  const [emerContactNum, setEmerContactNum] = useState("");
  const [emerContactNumError, setEmerContactNumError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [termsError, setTermsError] = useState("");
  const [checkEmail, setCheckEmail] = useState("");


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

  //START for sex dropdown
  const sexData = [
    {label: 'Female', value: 1},
    {label: 'Male', value: 2},
  ];
  //END for sex dropdown

  //START Civil Status dropdown
  const civilStatusData = [
    {label: 'Single', value: 1},
    {label: 'Married', value: 2},
    {label: 'Widowed', value: 3},
    {label: 'Separated', value: 4},
    {label: 'Divorced', value: 5},
  ];
  //END Civil Status dropdown

  //START for relationship dropdown
  const relationshipData = [
    {label: 'Father', value: 1},
    {label: 'Mother', value: 2},
    {label: 'Sibling', value: 3},
    {label: 'Child', value: 4},
    {label: 'Spouse', value: 5},
    {label: 'Grandparent', value: 6},
    {label: 'Guardian', value: 7},
    {label: 'Other', value: 8},
  ]
  //END for relationship dropdown

  //START form validations
  const register = async() => {
    //regex validation - alphabet only
    const validateName = (name) => {
      let re = /[a-zA-Z][a-zA-Z ]+/;
      return re.test(name);
    }

    //regex validation - numbers only
    const validateNum = (num) => {
      let re = /^[0-9]+$/;
      return re.test(num);
    }

    //regex validation - exact 11 numbers starting with 09
    const validateContactNum = (num) => {
      let re = /^09[0-9]{9}$/;
      return re.test(num);
    }

    //regex validation - exact 7 numbers
    const validateTelephoneNum = (num) => {
      let re = /^[0-9]{7}$/;
      return re.test(num);
    }

    //regex validation - email
    const validateEmail = (email) => {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
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
      setMiddleNameError("");
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
      setBdayError("Birthday is required");
    }
    else {
      setBdayError("");
      bdayValid = true;
    }

    //sex validation
    var sexValid = false;
    if(sex == "") {
      setSexError("Sex is required");
    }
    else {
      setSexError("");
      sexValid = true;
    }

    //civil status validation
    var civilStatusValid = false;
    if(civilStatus == "") {
      setCivilStatusError("Civil status is required");
    }
    else {
      setCivilStatusError("");
      civilStatusValid = true;
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

    //at least one input in contact info
    if (contactNum == "" && telephoneNum == "" && email == "") {
      setContactInfoError("Enter at least your email");
    } else { setContactNumError(""); };

    //contact number validation
    var contactNumValid = false;
    if (contactNum == "") {
      setContactNumError("");
    }
    else if(!validateContactNum(contactNum)) {
      setContactNumError("Contact number must be exactly 11 digits starting with 09");
    }
    else {
      setContactNumError("");
      contactNumValid = true;
    }

    //telephone number validation
    var telephoneNumValid = false;
    if (telephoneNum == "") {
      setTelephoneNumError("");
    }
    else if(!validateTelephoneNum(telephoneNum)) {
      setTelephoneNumError("Telephone number must be exactly 7 digits");
    }
    else {
      setTelephoneNumError("");
      telephoneNumValid = true;
    }

    //email validation
    var emailValid = false;
    if (email == "") {
      setEmailError("Working email address is required");
    }
    else if(!validateEmail(email)) {
      setEmailError("Email is invalid");
    }
    else {
      setEmailError("");
      emailValid = true;
    }

    //name of contact person validation
    var emerContactNameValid = false;
    if(emerContactName == "") {
      setEmerContactNameError("Name of contact person is required");
    }
    else if(!validateName(emerContactName)) {
      setEmerContactNameError("Name of contact person must be alphabetic");
    }
    else {
      setEmerContactNameError("");
      emerContactNameValid = true;
    }

    //relationship of contact person validation
    var relationshipValid = false;
    if(relationship == "") {
      setRelationshipError("Relationship is required");
    }
    else {
      setRelationshipError("");
      relationshipValid = true;
    }

    //number of contact person validation
    var emerContactNumValid = false;
    if(emerContactNum == "") {
      setEmerContactNumError("Contact # is required");
    }
    else if(!validateContactNum(emerContactNum)) {
      setEmerContactNumError("Contact # must be exactly 11 digits starting with 09");
    }
    else {
      setEmerContactNumError("");
      emerContactNumValid = true;
    }

    //password validation
    var passwordValid = false;
    if(password == "") {
      setPasswordError("Password is required");
    }
    else if(password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    }
    else {
      setPasswordError("");
    }

    //confirm password validation
    var confirmPasswordValid = false;
    if(confirmPassword == "") {
      setConfirmPasswordError("Confirm password is required");
    }
    else if(confirmPassword != password) {
      setConfirmPasswordError("Passwords do not match");
    }
    else {
      setConfirmPasswordError("");
      confirmPasswordValid = true;
      passwordValid = true;
    }

    //check terms if checked
    var termsChecked = false;
    if(checked == false) {
      // setTermsError("Please check the box to agree to the terms and conditions");
      Alert.alert("", "Please check the box to agree to the terms and conditions")
    }
    else {
      setTermsError("");
      termsChecked = true;
    }


    //all fields are now valid
    if( (firstNameValid && surnameValid && ageValid && bdayValid && sexValid && civilStatusValid && occupationValid && addressValid) &&
        (contactNumValid && emailValid) &&
        (emerContactNameValid && relationshipValid && emerContactNumValid) &&
        (passwordValid) && (termsChecked)) {
      
      //path of register_mobile in codeigniter
        // var registerpath = "http://192.168.1.5:80/epmc-4/register_mobile";
        //var registerpath = "http://192.168.2.115:80/epmc-4/register_mobile";
        var registerpath = "http://e-pmc.com/register_mobile";

        //assign values
        var data = {
          firstName: firstName,
          middleName: middleName,
          surname: surname,
          age: age,
          bday: bday,
          sex: sex,
          civilStatus: civilStatus,
          occupation: occupation,
          address: address,
          contactNum: contactNum,
          telephoneNum: telephoneNum,
          email: email,
          emerContactName: emerContactName,
          relationship: relationship,
          emerContactNum: emerContactNum,
          password: password,
          checkEmail: checkEmail,
        };

        try {
          //post request
          await fetch(registerpath, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type' : 'application/json;charset=UTF-8',
              'X-API-KEY':'myapi',
              'Authorization':'Basic YWRtaW46YWRtaW4xMjM='
            },
            body: JSON.stringify(data),
          })
          .then((response)=>response.json())
          // .then((response)=>console.log(response))
          .then((response)=>{
            if(response.message == "Email already exist") {
              Alert.alert("Error", "Email already exists, please try another email address.");
            }
            else {
              Alert.alert("Success", "You have successfully signed up! Please check your email for verification.");
              navigation.navigate('Register');
            }
          })
        }
        catch(error) {
          console.log(error);
        }

        
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
          </View>
          <Text style={styles.errorMsg}>{bdayError}</Text>

          <View style={[styles.inputCard]} >
            <Text style={styles.label}>Sex:</Text>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={sexData}
              maxHeight={300}
              labelField="label"
              valueField="label"
              placeholder="select.."
              value={sex}
              onChange={item => {
                setSex(item.label);
              }}
            />
          </View>
          <Text style={styles.errorMsg}>{sexError}</Text>

          <View style={[styles.inputCard]} >
            <Text style={styles.label}>Civil Status:</Text>
            <Dropdown
              style={[styles.dropdown, {width:wp('59%')}]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={civilStatusData}
              maxHeight={300}
              labelField="label"
              valueField="label"
              placeholder="select.."
              value={civilStatus}
              onChange={item => {
                setCivilStatus(item.label);
              }}
            />
          </View>
          <Text style={styles.errorMsg}>{civilStatusError}</Text>

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
          <Text style={styles.errorMsg}>{contactInfoError}</Text>
          <View style={[styles.inputCard, styles.shadow]} >
            <Text style={styles.label}>Contact #:</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. 09123456789"
              onChangeText={(text) => setContactNum(text)}
              value={contactNum}
            />
          </View>
          <Text style={styles.errorMsg}>{contactNumError}</Text>

          <View style={[styles.inputCard, styles.shadow]} >
            <Text style={styles.label}>Telephone #:</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. 1234567"
              onChangeText={(text) => setTelephoneNum(text)}
              value={telephoneNum}
            />
          </View>
          <Text style={styles.errorMsg}>{telephoneNumError}</Text>

          <View style={[styles.inputCard, styles.shadow]} >
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. epmc@email.com"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </View>
          <Text style={styles.errorMsg}>{emailError}</Text>

          <Text style={styles.labelInfo}>Emergency Contact</Text>
          <View style={[styles.inputCard, styles.shadow]} >
            <Text style={styles.label}>Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. Maria Dela Cruz"
              onChangeText={(text) => setEmerContactName(text)}
              value={emerContactName}
            />
          </View>
          <Text style={styles.errorMsg}>{emerContactNameError}</Text>

          <View style={[styles.inputCard, styles.shadow]} >
            <Text style={styles.label}>Relationship:</Text>
            <Dropdown
                style={[styles.dropdown, {width: wp('60%')}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={[styles.iconStyle, {marginRight: wp('6%')}]}
                data={relationshipData}
                maxHeight={300}
                labelField="label"
                valueField="label"
                placeholder="select.."
                value={relationship}
                onChange={item => {
                  setRelationship(item.label);
                }}
              />
          </View>
          <Text style={styles.errorMsg}>{relationshipError}</Text>

          <View style={[styles.inputCard, styles.shadow]} >
            <Text style={styles.label}>Contact #:</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. 09123456789"
              onChangeText={(text) => setEmerContactNum(text)}
              value={emerContactNum}
            />
          </View>
          <Text style={styles.errorMsg}>{emerContactNumError}</Text>

          <Text style={styles.labelInfo}>Password</Text>
          <View style={[styles.inputCard, styles.shadow]} >
            <Text style={styles.label}>Password:</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>
          <Text style={styles.errorMsg}>{passwordError}</Text>

          <View style={[styles.inputCard, styles.shadow]} >
            <Text style={styles.label}>Confirm Password:</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry={true}
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
            />
          </View>
          <Text style={styles.errorMsg}>{confirmPasswordError}</Text>
          
          {/* <Text style={styles.note}>{'\n'}Please do note that your registration is stil pending and will be 
          validated upon visting the Pagtakhan Medical Clinic. Once validated, your patient ID will be 
          provided by the secretaries and will serve as your username.</Text> */}
          
          <View style={styles.termsContainer}>
            <Pressable onPress={() => setChecked(true)}>
              {checked ? <Pressable onPress={() => setChecked(false)}><Fontisto name="checkbox-active" size={18} color="#787878" style={styles.checkbox} /></Pressable> : 
              <Fontisto name="checkbox-passive" size={18} color="#787878" style={styles.checkbox} />}
            </Pressable>

            <Pressable>
              <Text onPress={() => navigation.navigate("Terms")} style={styles.terms}>Accept Terms & Conditions</Text>
            </Pressable>
          </View>
          {/* <Text style={styles.errorMsg}>{termsError}</Text> */}
          
          
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
    color: '#EB144C',
    marginHorizontal: wp('10%'),
    marginTop: hp('-0.8%'),
    fontSize: hp('1.2%'),
    // marginBottom: hp('1%'),
  },

  dropdown: {
    width: wp('70%'),
    margin: 10,
    padding: 1,
    height: hp('3%'),
    fontSize: hp('1.5%'),
  },

  placeholderStyle: {
    fontSize: hp('1.5%'),
    color: '#787878',
  },

  selectedTextStyle: {
    fontSize: hp('1.5%'),
    color: '#787878',
  },
  iconStyle: {
    marginRight: wp('3%'),
    width: wp('7%'),
    color: '#787878',
  },
});
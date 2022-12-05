import React, { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import {StyleSheet, ImageBackground, View, Text, Modal, Pressable, TextInput, Alert } from 'react-native';
import {Agenda} from 'react-native-calendars';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function AdminSched({}) {
  const [isLoading, setLoading] = useState(true);
  const [schedData, setSchedData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [patientID, setPatientID] = useState('');
  const [patientIDError, setPatientIDError] = useState([]);
  const [username, setUsername] = useState([]);
  const [usernameError, setUsernameError] = useState('');
  const [fullName, setFullName] = useState([]);
  const [fullNameError, setFullNameError] = useState([]);
  const [doctorName, setDoctorName] = useState([]);
  const [doctorNameError, setDoctorNameError] = useState([]);
  const [specialization, setSpecialization] = useState([]);
  const [specializationError, setSpecializationError] = useState([]);
  const [selectDate, setSelectDate] = useState([]);
  const [selectDay, setSelectDay] = useState([]);
  const [selectDateError, setSelectDateError] = useState([]);
  const [selectTime, setSelectTime] = useState([]);
  const [selectTimeError, setSelectTimeError] = useState([]);
  const [appointmentID, setAppointmentID]  = useState("");
  const [status, setStatus] = useState("");

  //header
  const headers = {
    'Accept': 'application/json',
    'Content-Type' : 'application/json;charset=UTF-8',
    'X-API-KEY':'myapi',
    'Authorization':'Basic YWRtaW46YWRtaW4xMjM='   
  }
  

  //START Doctor Names dropdown
  const doctorData = [
    {label: 'Dr. Miguel Luis Pagtakhan', value: 1},
    {label: 'Dr. Luis Pagtakhan', value: 2},
    {label: 'Dra. Jaymie Pagtakhan', value: 3},
    {label: 'Dr. Jass Hussein', value: 4},
  ];
  //END Doctor Names dropdown

  //START for Date
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [dateText, setDateText] = useState(false);
  const selectDateText = 'select..';

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);

    const formattedDate = currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate()
    const dayofWeek = currentDate.getDay();
    setSelectDay(dayofWeek);
    setSelectDate(formattedDate);
    console.log(selectDate);
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
  //END for Date

  //START for Time
  const [time, setTime] = useState(new Date());
  const [timeMode, setTimeMode] = useState('time');
  const [timeShow, setTimeShow] = useState(false);
  const [timeText, setTimeText] = useState(false);
  const selectTimeText = 'select..';

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime;
    setTimeShow(false);
    setTime(currentTime);

    const formattedTime = (('0'+currentTime.getHours()).substr(-2) + ":" + ('0'+currentTime.getMinutes()).substr(-2)); // + ":" + currentTime.getSeconds()
    setSelectTime(formattedTime);
    console.log(selectTime);
    setTimeText(true);
  };

  const showTimeMode = (currentTimeMode) => {
    if (Platform.OS === 'android') {
      setTimeShow(true);
    }
    setTimeMode(currentTimeMode);
  };

  const showTimepicker = () => {
    showTimeMode('time');
  };
  //END for Time

  //fetch id and full name
  const getFullName = async() => {
    const fetc = await SecureStore.getItemAsync('editprof');
    const editprofdata = JSON.parse(fetc);
    setFullName(editprofdata[0].full_name)
    setPatientID(editprofdata[0].patient_id)
    setUsername(editprofdata[0].username)

    //display patient's appointment
    var p_appointmentpath = "http://192.168.1.5:80/epmc-4/patient_appointment";
      // var p_appointmentpath = "http://192.168.2.115:80/epmc-4/patient_appointment";
      // var p_appointmentpath = "http://e-pmc.com/patient_appointment";
  
    var data = {
      patientID: editprofdata[0].patient_id,
    }
      
    await fetch(p_appointmentpath, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    })
    .then((response)=>response.json())
    // .then((response)=>console.log(data))
    .then((json)=>setSchedData(json))
    .catch((error)=> console.error("ERROR FOUND " + error))
    .finally(() => setLoading(false));     
  }
      
  useEffect(() => {
    getFullName();
  }, [status]);

  //START form validations
  const saveAppointment = async () => {
    //full name validation
    var fullNameValid = false;
    if (fullName == '') {
      setFullNameError("Name is empty, please enter your name on your profile");
    }
    else {
      setFullNameError("");
      fullNameValid = true;
    }

    //doctor name validation
    var doctorNameValid = false;
    if (doctorName == '') {
      setDoctorNameError("Select a doctor");
    }
    else if (doctorName == 'Dr. Miguel Luis Pagtakhan') {
      setDoctorNameError("Note: Dr. Miguel is only available on 2PM - 4:30PM every Monday to Saturday except Thursday on 7AM - 12PM");
      doctorNameValid = true;
    }
    else if (doctorName == 'Dr. Luis Pagtakhan') {
      setDoctorNameError("Note: Dr. Luis is only available on 7AM - 12PM every Monday to Saturday except Thursday on 2PM - 4:30PM");
      doctorNameValid = true;
    }
    else if (doctorName == 'Dra. Jaymie Pagtakhan') {
      setDoctorNameError("Note: Dra. Jaymie is only available on 10AM - 12PM every Saturday");
      doctorNameValid = true;
    }
    else if (doctorName == 'Dr. Jass Hussein') {
      setDoctorNameError("Note: Dr. Jass is only available on 2PM - 4:30PM every Tuesday and Thursday");
      doctorNameValid = true;
    }

    //consuldation date validation
    var selectDateValid = false;
    if (selectDate == '') {
      setSelectDateError("Select your Consultation Date");
    }
    else if (selectDay == 0) {
      setSelectDateError("We are closed on Sunday");
    }
    else {
      setSelectDateError("");
      selectDateValid = true;
    }

    //start time 
    var selectTimeValid = false;
    if (selectTime == '') {
      setSelectTimeError("Select your Consultation Time");
    }
      //Dr. Miguel 2PM - 4:30PM Mon-Sat except Thurs
      //time should not be before 2PM and after 4PM
    else if (doctorName == 'Dr. Miguel Luis Pagtakhan' && 
            (selectDay == 1 || selectDay == 2 || selectDay == 3 || selectDay == 5 || selectDay == 6 ) && 
            (selectTime < '14:00' || selectTime > '16:00')) { 
      setSelectTimeError("It is not within Dr. Miguel's Clinic Hours. Please choose around 2PM - 4:00PM");
    }
      //Dr. Miguel 7AM - 12PM Thurs
      //time should not be before 7AM and after 12PM
    else if (doctorName == 'Dr. Miguel Luis Pagtakhan' &&
            selectDay == 4 &&
            (selectTime < '07:00' || selectTime > '12:00')) {
      setSelectTimeError("It is not within Dr. Miguel's Clinic Hours. Please choose around 7AM - 12PM");
    }
      //Dr. Luis 7AM - 12PM Mon-Sat except Thurs
      //time should not be before 7AM and after 12PM
    else if (doctorName == 'Dr. Luis Pagtakhan' &&
            (selectDay == 1 || selectDay == 2 || selectDay == 3 || selectDay == 5 || selectDay == 6 ) &&
            (selectTime < '07:00' || selectTime > '12:00')) {
      setSelectTimeError("It is not within Dr. Luis's Clinic Hours. Please choose around 7AM - 12PM");
    }
      //Dr. Luis 2PM - 4:30PM Thurs
      //time should not be before 2PM and after 4PM
    else if (doctorName == 'Dr. Luis Pagtakhan' &&
            selectDay == 4 &&
            (selectTime < '14:00' || selectTime > '16:00')) {
      setSelectTimeError("It is not within Dr. Luis's Clinic Hours. Please choose around 2PM - 4PM");
    }
      //Dra. Jaymie 10AM - 12PM Sat only
    else if (doctorName == 'Dra. Jaymie Pagtakhan' &&
            (selectDay == 1 || selectDay == 2 || selectDay == 3 || selectDay == 4 || selectDay == 5 ) &&
            (selectTime !== null)) {
        setSelectTimeError("It is not within Dra. Jaymie's Clinic Hours. Please choose around 10AM - 12PM on Saturday");
    }
      //time should not be before 10AM and after 12PM on Sat
    else if (doctorName == 'Dra. Jaymie Pagtakhan' &&
            selectDay == 6 &&
            (selectTime < '10:00' || selectTime > '12:00')) {
      setSelectTimeError("It is not within Dra. Jaymie's Clinic Hours. Please choose around 10AM - 12PM");
    }
      //Dr. Jass 2PM - 4:30PM Tues and Thurs
    else if (doctorName == 'Dr. Jass Hussein' &&
          (selectDay == 1 || selectDay == 3 || selectDay == 5 || selectDay == 6 ) &&
          (selectTime !== null)) {
      setSelectTimeError("It is not within Dr. Jass's Clinic Hours. Please choose around 2PM - 4PM on Tuesday or Thursday");
    }
      //time should not be before 2PM and after 4PM
    else if (doctorName == 'Dr. Jass Hussein' &&
            (selectDay == 2 || selectDay == 4) &&
            (selectTime < '14:00' || selectTime > '16:00')) {
      setSelectTimeError("It is not within Dr. Jass's Clinic Hours. Please choose around 2PM - 4PM");
    }
    else {
      setSelectTimeError("");
      selectTimeValid = true;
    }

    //if all validations are true - add appointment
    if (fullNameValid && doctorNameValid && selectDateValid && selectTimeValid) {

        //path of patient appointment in codeigniter
        var add_appointmentpath = "http://192.168.1.5:80/epmc-4/add_appointment";
        // var add_appointmentpath = "http://192.168.2.115:80/epmc-4/add_appointment";
        // var add_appointmentpath = "http://e-pmc.com/add_appointment";

        //assign values
        var data = {
          patientID: patientID,
          username: username,
          fullName: fullName,
          doctorName: doctorName,
          selectDate: selectDate,
          selectTime: selectTime,
        }

        try {
          //post request
          await fetch(add_appointmentpath, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
          })
          .then((response)=>response.json())
          // .then((response)=>console.log(response))
          .then((response)=>{
            if(response.message == "Date already exist") {
              Alert.alert("Error", "Appointment already exists, please try another time or day.");
            }
            else {
              Alert.alert("Success", "Appointment successfully booked! Wait for the clinic to confirm it.");
              setStatus(response.status);
              // navigation.navigate('Register'); 
            }
          })
        }
        catch(error) {
          console.log(error);
        }
    }
  }

  //delete appointment
  const deleteAppointment = async () => {
    var del_appointmentpath = "http://192.168.1.5:80/epmc-4/patient_del_appointment";
    // var del_appointmentpath = "http://http://192.168.2.115:80/epmc-4/patient_del_appointment";
    // var del_appointmentpath = "http://e-pmc.com/patient_del_appointment";

    var data = {
      appointmentID: appointmentID
    }

    // console.log(data);

    try {
      //post request
      await fetch(del_appointmentpath, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      })
      .then((response)=>response.json())
      // .then((response)=>console.log(response))
      .then((response)=>{
        // console.log(response)
        setStatus(response.status);
        if(response.message == "Appointment deleted") {
          Alert.alert("Success", "Appointment has been deleted");
          
        }
        else {
          Alert.alert("Error", "Failed to delete appointment. Please try again later.");
          // navigation.navigate('AdminSched');
        }
        
      })
    }
    catch(error) {
      console.log(error);
    }
  }

  const renderItem = (item) => {
    return (
      <View style={styles.itemContainer}>
        <View>
          <Text style={[styles.itemText, {fontWeight: 'bold'}]}>{item.doctor_name}</Text>
          <Text style={styles.itemText}>{item.time}</Text>
          <View style={styles.statusCont}>
            {item.status == 0 ? <Text style={[styles.statusText, {backgroundColor: '#FAD692'}]}>Pending</Text> : null}
            {item.status == 1 ? <Text style={[styles.statusText, {backgroundColor: '#FA9292'}]}>Declined</Text> : null}
            {item.status == 2 ? <Text style={[styles.statusText, {backgroundColor: '#92FAA3'}]}>Confirmed</Text> : null}
          </View>
        </View>
        
        <View>
          {item.status == 0 ? 
            <Pressable style={styles.delCont} onPress={() => setDeleteModal(true, setAppointmentID(item.appointment_id))}>
              <Text style={styles.delText}>Delete</Text>
            </Pressable>
          : null}
          {item.status == 1 ? 
            <Pressable style={styles.delCont} onPress={() => setDeleteModal(true, setAppointmentID(item.appointment_id))}>
              <Text style={styles.delText}>Delete</Text>
            </Pressable>
          : null}
          
          
        </View>

        {/* Delete Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={deleteModal}
          onRequestClose={() => {
            setDeleteModal(!deleteModal);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={[styles.modalText, {fontSize: hp('1.5%')}]}>Are you sure you want to delete appointment?</Text>
              
              <View style={[styles.buttonCont]}>
                  <Pressable style={[styles.button, {backgroundColor: '#969696'}]} onPress={() => setDeleteModal(!deleteModal)}>
                    <Text style={styles.buttonText}>CANCEL</Text>
                  </Pressable>
                  <Pressable style={[styles.button, {backgroundColor: '#F44336'}]} onPress={() => {deleteAppointment(), setDeleteModal(!deleteModal)}}>
                    <Text style={styles.buttonText}>DELETE</Text>
                  </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        
      </View>
    )
  }
  //END fetch patient schedule

  return (
    <View style={styles.container}>
      {isLoading ? <Text style={styles.loadingtext}>Loading Data...</Text>:
        // <ImageBackground source={require('../../../assets/patientrec.png')} style={styles.bgimage}>
        <View style={styles.container}>
          <Pressable style={styles.addSchedCont} onPress={() => setModalVisible(!modalVisible)}>
            <AntDesign name="pluscircle" style={styles.addSchedBtn}/> 
          </Pressable>

          {/* Add Schedule Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.setText}>Set a Consultation!</Text>

                <View>
                  <Text style={[styles.label, {marginTop: wp('2%')}]}>Username</Text> 
                  <TextInput
                    style={[styles.inputBox, {color: '#000'}]}
                    // placeholder="Full Name"
                    value={username}
                    editable={false}
                  />
                  <Text style={styles.errorMsg}>{usernameError}</Text>
                </View>
                
                

                <View>
                  <Text style={styles.label}>Full Name</Text>
                  <TextInput
                    style={[styles.inputBox, {color: '#000'}]}
                    // placeholder="Full Name"
                    value={fullName}
                    editable={false}
                  />
                  <Text style={styles.errorMsg}>{fullNameError}</Text>
                </View>

                <View>
                  <Text style={styles.label}>Doctor Name</Text>
                  <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    iconStyle={styles.iconStyle}
                    data={doctorData}
                    maxHeight={300}
                    labelField="label"
                    valueField="label"
                    placeholder="select.."
                    value={doctorName}
                    onChange={item => {
                      setDoctorName(item.label);
                    }}
                  />
                  <Text style={styles.errorMsg}>{doctorNameError}</Text>
                </View>
                
                <View>
                  <Text style={styles.label}>Consultation Date</Text>
                  <Pressable onPress={showDatepicker}  >
                    <Text style={[styles.inputBox, styles.placeholderStyle, {paddingTop: hp('0.5%')}]}>
                      {dateText ? date.toDateString() : selectDateText}
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
                  <Text style={styles.errorMsg}>{selectDateError}</Text>
                </View>
                

                <View>
                  <Text style={styles.label}>Start Time</Text>
                  <Pressable onPress={showTimepicker}  >
                    <Text style={[styles.inputBox, styles.placeholderStyle, {paddingTop: hp('0.5%')}]}>
                      {timeText ? time.toLocaleTimeString() : selectTimeText}
                    </Text>
                  </Pressable>
                  {timeShow && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={time}
                      mode={timeMode}
                      is24Hour={true}
                      onChange={onChangeTime}
                    />
                  )}
                  <Text style={styles.errorMsg}>{selectTimeError}</Text>
                </View>
                

                {/* Hides modal */}
                <View style={[styles.buttonCont]}>
                  <Pressable style={[styles.button, {backgroundColor: '#969696'}]} onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.buttonText}>CANCEL</Text>
                  </Pressable>
                  <Pressable style={[styles.button, {backgroundColor: '#8acf4e'}]} onPress={() => saveAppointment()}>
                    <Text style={styles.buttonText}>SAVE</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
          
          <Agenda
            style={styles.calendar} //calendar style
            items={schedData} //data
            renderItem={renderItem}
            // onRefresh={() => console.log('refreshing...')}
          />
        </View>
        // </ImageBackground>
      }
    </View>
    
  );
}

const styles = StyleSheet.create({
  bgimage: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },

  calendar: {
    width: wp('100%'),
    // height: '100%',
    
    // marginTop: hp('5%'),
    // borderRadius: 5,
    // elevation: 5,
  },

  header: {
    // marginTop: hp('5%'),
  },

  itemContainer: {
    backgroundColor: 'white',
    margin: 5,
    padding: 20,
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },

  itemText: {
    alignSelf: 'flex-start',
    marginBottom: 3,
    fontSize: 16,
  },

  delCont: {
    backgroundColor: '#033d68',
    padding: 8,
    borderRadius: 10,
  },

  delText: {
    color: 'white',
  },

  addSchedCont: {
    flex:1,
    position: 'absolute',
    alignSelf: 'flex-end',
    zIndex: 1,
    bottom: hp('10%'),
    right: wp('7%')
  },

  addSchedBtn: {
    fontSize: hp('5%'),
    color: '#033d68',
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    elevation: 5
  },

  setText: {
    fontSize: hp('2%'),
  },

  label: {
    fontSize: hp('1.5%'),
    alignSelf: 'flex-start',
    // marginTop: hp('1%'),
  },

  inputBox: {
    width: wp('75%'),
    height: hp('3%'),
    marginTop: hp('0.5%'),
    paddingLeft: wp('2%'),
    fontSize: hp('1.5%'),
    // color: '#000',
    borderWidth: 1,
    borderRadius: 5,
  },

  dropdown: {
    width: wp('75%'),
    height: hp('3%'),
    marginTop: hp('0.5%'),
    paddingLeft: wp('2%'),
    borderWidth: 1,
    borderRadius: 5,
  },

  placeholderStyle: {
    fontSize: hp('1.5%'),
    // color: '#000',
    color: '#787878',
  },

  selectedTextStyle: {
    fontSize: hp('1.5%'),
    // color: '#000',
    color: '#787878',
  },

  iconStyle: {
    marginRight: wp('1%'),
    width: wp('7%'),
    color: '#787878',
  },

  buttonCont: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: wp('75%'),
    marginTop: hp('2%'),
  },

  button: {
    backgroundColor: "#033d68",
    width: wp('20%'),
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },

  buttonText: {
    color: "white",
    textAlign: "center"
  },

  errorMsg: {
    color: '#EB144C',
    fontSize: hp('1.2%'),
    width: wp('75%'),
  },

  statusCont: {
    width: wp('20%'),
    alignSelf: 'flex-start',
    
  },

  statusText: {
    textAlign: 'center',
    padding: 3,
    borderRadius: 10,
  },
});
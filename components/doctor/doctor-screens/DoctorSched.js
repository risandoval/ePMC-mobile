import React, { useState, useEffect } from 'react';
import {StyleSheet, ImageBackground, View, Text, Alert, Modal, Pressable, FlatList, Dimensions  } from 'react-native';
import {responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Agenda} from 'react-native-calendars';
import { Dropdown } from 'react-native-element-dropdown';


export default function DoctorSched({}) {
  const [isLoading, setLoading] = useState(true);
  const [schedData, setSchedData] = useState([]);
  const [status, setStatus] = useState("");
  const [patientID, setPatientID] = useState("");
  const [appointmentID, setAppointmentID]  = useState("");
  const [patientUN, setPatientUN] = useState("");
  const [patientName, setPatientName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  //START status dropdown
  const statusData = [
    {label: 'Pending', value: 0},
    {label: 'Confirmed', value: 1},
    {label: 'Declined', value: 2}
  ];
  //END status dropdown

  const headers = {
    'Accept': 'application/json',
    'Content-Type' : 'application/json;charset=UTF-8',
    'X-API-KEY':'myapi',
    'Authorization':'Basic YWRtaW46YWRtaW4xMjM='   
  }
  //get all appointments
  const fetchSchedule = async () => {

    var all_appointmentpath = "http://192.168.1.5:80/epmc-4/adm_view_appointment";
    // var all_appointmentpath = "http://192.168.2.115:80/epmc-4/adm_view_appointment";

    // var all_appointmentpath = "http://e-pmc.com/adm_view_appointment";
  
    await fetch(all_appointmentpath,{
      headers: headers
    })  
    .then((response)=>response.json())
    .then((json)=>setSchedData(json))
    .catch((error)=> console.error("ERROR FOUND " + error))
    .finally(() => setLoading(false));
  }

  useEffect(()=>{
    fetchSchedule();
    const dataInterval = setInterval(() => fetchSchedule(), 5 * 1000);
    return () => clearInterval(dataInterval);
  },[]);

  //update status
  const updateStatus = async () => {
    var update_statuspath = "http://192.168.1.5:80/epmc-4/adm_update_appointment";
    //var update_statuspath = "http://192.168.2.115:80/epmc-4/adm_update_appointment";
    //var update_statuspath = "http://e-pmc.com/adm_update_appointment";

    var data = {
      appointmentID: appointmentID,
      status: status
    }

    try {
      //post request
      await fetch(update_statuspath, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      })
      .then((response)=>response.json())
      // .then((response)=>console.log(response))
      .then((response)=>{
        // console.log(response)
        if(response.message == "Appointment ID not found") {
          Alert.alert("Error", "Appointment ID not found. This might be deleted by the patient.");
        }
        else {
          Alert.alert("Success", "Appointment status successfully updated");
          // navigation.navigate('Register');
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
          <Text style={[styles.itemText, {fontWeight: '500'}]}>{item.username} - {item.full_name}</Text>
          <Text style={[styles.itemText, {fontWeight: '800'}]}>{item.doctor_name}</Text>
          <Text style={styles.itemText}>{item.time}</Text>
            {item.status == 0 ? <Text style={[styles.itemText]}>Status: Pending</Text> : null}
            {item.status == 1 ? <Text style={[styles.itemText]}>Status: Declined</Text> : null}
            {item.status == 2 ? <Text style={[styles.itemText]}>Status: Confirmed</Text> : null}
            
        </View>
        
        <View>
          <Pressable style={styles.saveCont} onPress={() => setModalVisible(true, setPatientID(item.patient_id), setAppointmentID(item.appointment_id) , setPatientUN(item.username), setPatientName(item.full_name))}>
            <Text style={styles.saveText}>Edit Status</Text>
          </Pressable>
          {/* <Pressable style={styles.saveCont}>
            <Text style={styles.saveText}>Save Status</Text>
          </Pressable> */}
        </View>
        
        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={styles.itemText}>Patient ID: {patientID}</Text>
              <Text style={styles.itemText}>Patient username: {patientUN}</Text>
              <Text style={styles.itemText}>Patient Name: {patientName}</Text>
              <Text style={styles.itemText}>Appointment ID: {appointmentID}</Text>
              
              <Text style={styles.itemText}>{"\n"}Edit Status</Text>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={statusData}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="select status"
                value={status}
                onChange={item => {
                  setStatus(item.value);
                }}
              />
              <Text>{status}</Text>
              
              <View style={[styles.buttonCont]}>
                  <Pressable style={styles.button} onPress={() => updateStatus()}>
                    <Text style={styles.buttonText}>SAVE</Text>
                  </Pressable>
                  <Pressable style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.buttonText}>CANCEL</Text>
                  </Pressable>
              </View>

            </View>
          </View>
        </Modal>
        
      </View>
    )
  }



  return (
    <View style={styles.container}>
      {isLoading ? <Text style={styles.loadingtext}>Loading Data...</Text>:
        <ImageBackground source={require('../../../assets/patientrec.png')} style={styles.bgimage}>
          <Agenda
            style={styles.calendar} //calendar style
            items={schedData} //data
            // items={{
            //   '2022-11-29': [{name: "Next Consultation", doctor_name: 'Dr. Miguel Pagtakhan', specialization: 'Internal Medicine', start_time: "08:00:00"}]
            // }}
            renderItem={renderItem}
          />
        </ImageBackground>
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
    backgroundColor: '#fff',
  },

  calendar: {
    // height: '100%',
    width: wp('100%'),
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

  statusCont: {
    width: wp('20%'),
    alignSelf: 'flex-start',
    
  },

  statusText: {
    textAlign: 'center',
    padding: 3,
    borderRadius: 10,
  },

  saveCont: {
    backgroundColor: '#033d68',
    padding: 8,
    borderRadius: 10,
  },

  saveText: {
    color: 'white',
  },

  dropdown: {
    width: wp('45%'),
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
    color: '#000',
    // color: '#787878',
  },

  iconStyle: {
    marginRight: wp('1%'),
    width: wp('7%'),
    color: '#787878',
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

  buttonCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('45%'),
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
});
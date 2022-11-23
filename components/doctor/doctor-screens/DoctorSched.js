import React, { useState, useEffect } from 'react';
import {StyleSheet, ImageBackground, View, Text, TouchableOpacity, Modal, Pressable, FlatList } from 'react-native';
import {responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function DoctorSched({}) {
  const [isLoading, setLoading] = useState(true);
  const [date, setDate] = useState(null);
  const [day, setDay] = useState(null);
  const [monModal, setMonModal] = useState(false);
  const [tueModal, setTueModal] = useState(false);
  const [wedModal, setWedModal] = useState(false);
  const [thuModal, setThuModal] = useState(false);
  const [friModal, setFriModal] = useState(false);
  const [satModal, setSatModal] = useState(false);

  const [monData, setMonData] = useState([]);
  const [tueData, setTueData] = useState([]);
  const [wedData, setWedData] = useState([]);
  const [thuData, setThuData] = useState([]);
  const [friData, setFriData] = useState([]);
  const [satData, setSatData] = useState([]);

  //get the current month and year
  useEffect(() => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = new Date();
    let getDay = today.getDay(); //value of the day of the week
    var day = getDay.toString();

    //Month Name
    if ((today.getMonth()+1) == 1) {
      var month = months[0]
    }
    else if ((today.getMonth()+1) == 2) {
      var month = months[1]
    }
    else if ((today.getMonth()+1) == 3) {
      var month = months[2]
    }
    else if ((today.getMonth()+1) == 4) {
      var month = months[3]
    }
    else if ((today.getMonth()+1) == 5) {
      var month = months[4]
    }
    else if ((today.getMonth()+1) == 6) {
      var month = months[5]
    }
    else if ((today.getMonth()+1) == 7) {
      var month = months[6]
    }
    else if ((today.getMonth()+1) == 8) {
      var month = months[7]
    }
    else if ((today.getMonth()+1) == 9) {
      var month = months[8]
    }
    else if ((today.getMonth()+1) == 10) {
      var month = months[9]
    }
    else if ((today.getMonth()+1) == 11) {
      var month = months[10]
    }
    else if ((today.getMonth()+1) == 12) {
      var month = months[11]
    }

    //Day Name
    if (day == 0) {
      var day = "Sunday" 
    }
    else if (day == 1) {
      var day = "Monday"
    }
    else if (day == 2) {
      var day = "Tuesday"
    }
    else if (day == 3) {
      var day = "Wednesday"
    }
    else if (day == 4) {
      var day = "Thursday"
    }
    else if (day == 5) {
      var day = "Friday"
    }
    else if (day == 6) {
      var day = "Saturday"
    }

    var date = month + ' ' + today.getDate() + ', ' + today.getFullYear(); //today.getDate()
    setDate(date);
    setDay(day);
  }, []);


  const headers = {
    'Accept': 'application/json',
    'Content-Type' : 'application/json;charset=UTF-8',
    'X-API-KEY':'myapi',
    'Authorization':'Basic YWRtaW46YWRtaW4xMjM='   
  }


  //START fetch Monday Sched
    const fetchMonSchedule = async () => {

      var monschedpath = "http://192.168.1.5:80/epmc-4/adm_Monsched";
      // var monschedpath = "http://192.168.2.115:80/epmc-4/adm_Monsched";
      // var monschedpath = "http://e-pmc.com/adm_Monsched";
    
      await fetch(monschedpath,{
        headers: headers
      })  
      .then((response)=>response.json())
      .then((json)=>setMonData(json))
      .catch((error)=> console.error("ERROR FOUND " + error))
      .finally(() => setLoading(false));
    }

    useEffect(()=>{
      fetchMonSchedule();
      const dataInterval = setInterval(() => fetchMonSchedule(), 5 * 1000);
      return () => clearInterval(dataInterval);
    },[]);
  //END fetch Monday Sched

  //START fetch Tuesday Sched
    const fetchTueSchedule = async () => {

      var tueschedpath = "http://192.168.1.5:80/epmc-4/adm_Tuesched";
      // var tueschedpath = "http://192.168.2.115:80/epmc-4/adm_Tuesched";
      // var tueschedpath = "http://e-pmc.com/adm_Tuesched";
    
      await fetch(tueschedpath,{
        headers: headers
      })  
      .then((response)=>response.json())
      .then((json)=>setTueData(json))
      .catch((error)=> console.error("ERROR FOUND " + error))
      .finally(() => setLoading(false));
    }

    useEffect(()=>{
      fetchTueSchedule();
      const dataInterval = setInterval(() => fetchTueSchedule(), 5 * 1000);
      return () => clearInterval(dataInterval);
    },[]);
  //END fetch Tuesday Sched

  //START fetch Wednesday Sched
  const fetchWedSchedule = async () => {

    var wedschedpath = "http://192.168.1.5:80/epmc-4/adm_Wedsched";
    // var wedschedpath = "http://192.168.2.115:80/epmc-4/adm_Wedsched";
    // var wedschedpath = "http://e-pmc.com/adm_Wedsched";
  
    await fetch(wedschedpath,{
      headers: headers
    })  
    .then((response)=>response.json())
    .then((json)=>setWedData(json))
    .catch((error)=> console.error("ERROR FOUND " + error))
    .finally(() => setLoading(false));
  }

  useEffect(()=>{
    fetchWedSchedule();
    const dataInterval = setInterval(() => fetchWedSchedule(), 5 * 1000);
    return () => clearInterval(dataInterval);
  },[]);
  //END fetch Wednesday Sched

  //START fetch Thursday Sched
  const fetchThuSchedule = async () => {

    var thuschedpath = "http://192.168.1.5:80/epmc-4/adm_Thursched";
    // var thuschedpath = "http://192.168.2.115:80/epmc-4/adm_Thursched";
    // var thuschedpath = "http://e-pmc.com/adm_Thursched";
  
    await fetch(thuschedpath,{
      headers: headers
    })  
    .then((response)=>response.json())
    .then((json)=>setThuData(json))
    .catch((error)=> console.error("ERROR FOUND " + error))
    .finally(() => setLoading(false));
  }

  useEffect(()=>{
    fetchThuSchedule();
    const dataInterval = setInterval(() => fetchThuSchedule(), 5 * 1000);
    return () => clearInterval(dataInterval);
  },[]);
  //END fetch Thursday Sched

  //START fetch Friday Sched
  const fetchFriSchedule = async () => {

    var frischedpath = "http://192.168.1.5:80/epmc-4/adm_Frisched";
    // var frischedpath = "http://192.168.2.115:80/epmc-4/adm_Frisched";
    // var frischedpath = "http://e-pmc.com/adm_Frisched";
  
    await fetch(frischedpath,{
      headers: headers
    })  
    .then((response)=>response.json())
    .then((json)=>setFriData(json))
    .catch((error)=> console.error("ERROR FOUND " + error))
    .finally(() => setLoading(false));
  }

  useEffect(()=>{
    fetchFriSchedule();
    const dataInterval = setInterval(() => fetchFriSchedule(), 5 * 1000);
    return () => clearInterval(dataInterval);
  },[]);
  //END fetch Friday Sched

  //START fetch Saturday Sched
  const fetchSatSchedule = async () => {

    var satschedpath = "http://192.168.1.5:80/epmc-4/adm_Satsched";
    // var satschedpath = "http://192.168.2.115:80/epmc-4/adm_Satsched";
    // var satschedpath = "http://e-pmc.com/adm_Satsched";
  
    await fetch(satschedpath,{
      headers: headers
    })  
    .then((response)=>response.json())
    .then((json)=>setSatData(json))
    .catch((error)=> console.error("ERROR FOUND " + error))
    .finally(() => setLoading(false));
  }

  useEffect(()=>{
    fetchSatSchedule();
    const dataInterval = setInterval(() => fetchSatSchedule(), 5 * 1000);
    return () => clearInterval(dataInterval);
  },[]);
  //END fetch Saturday Sched

  return (
    <View style={styles.container}>
      {isLoading ? <Text style={styles.loadingtext}>Loading Data...</Text>:
        <ImageBackground source={require('../../../assets/schedbg.png')} style={styles.bgimage}>

          <Text style={styles.date}>{date}</Text>
          <Text style={styles.day}>{day}</Text>
          <Text style={styles.availdoc}>Available Doctors</Text>
          

          <View style={styles.btngrp}>
            {/* MONDAY */}
              <TouchableOpacity onPress={() => setMonModal(true)} style={[styles.btndays, styles.radiusLft]}>
                <Text style={[styles.btndaystxt]}>Mon</Text>
                  {/* MONDAY MODAL VIEW */}
                    <Modal
                      animationType='fade'
                      transparent={true}
                      visible={monModal}
                      onRequestClose={() => {
                        setMonModal(!monModal);
                      }} >
                      <TouchableOpacity onPress={() => setMonModal(false)} style={styles.centeredView}>
                        <TouchableOpacity style={styles.modalView} activeOpacity={1} >
                          <Pressable
                            style={[styles.buttonClose]}
                            onPress={() => setMonModal(!monModal)} >
                              <AntDesign name='closecircle' size={20} color={'#F6F7F7'} style={styles.closeBtn} />
                          </Pressable>
                          <Text style={styles.dayTxt}>M O N D A Y</Text>
                          {/* MONDAY FLATLIST */}
                          <FlatList
                            data={monData}
                            keyExtractor={(item) => item.schedule_id.toString()}
                            renderItem={({ item }) => (
                              <View style={styles.schedContainer}>
                                <View style={styles.infoContainer}>
                                  <Text style={[styles.infotxt, styles.docName]}>{item.doctor_name}</Text>
                                  <Text style={[styles.infotxt, styles.special]}>{item.specialization}</Text>
                                  <Text style={[styles.infotxt, styles.time]}>{item.start_time} - {item.end_time}</Text>
                                </View>
                              </View>
                            )}
                          />
                        </TouchableOpacity>
                      </TouchableOpacity>
                    </Modal>
                  {/* END OF MONDAY MODAL VIEW */}
              </TouchableOpacity>
            {/* END OF MONDAY */}

            {/* TUESDAY */}
              <TouchableOpacity onPress={() => setTueModal(true)} style={styles.btndays}>
                <Text style={[styles.btndaystxt]}>Tue</Text>
                  {/* TUESDAY MODAL VIEW */}
                    <Modal
                      animationType='fade'
                      transparent={true}
                      visible={tueModal}
                      onRequestClose={() => {
                        setTueModal(!tueModal);
                      }} >
                      <TouchableOpacity onPress={() => setTueModal(false)} style={styles.centeredView}>
                        <TouchableOpacity style={styles.modalView} activeOpacity={1} >
                          <Pressable
                            style={[styles.buttonClose]}
                            onPress={() => setTueModal(!tueModal)} >
                              <AntDesign name='closecircle' size={20} color={'#F6F7F7'} style={styles.closeBtn} />
                          </Pressable>
                          <Text style={styles.dayTxt}>T U E S D A Y</Text>
                          {/* TUESDAY FLATLIST */}
                          <FlatList
                            data={tueData}
                            keyExtractor={(item) => item.schedule_id.toString()}
                            renderItem={({ item }) => (
                              <View style={styles.schedContainer}>
                                <View style={styles.infoContainer}>
                                  <Text style={[styles.infotxt, styles.docName]}>{item.doctor_name}</Text>
                                  <Text style={[styles.infotxt, styles.special]}>{item.specialization}</Text>
                                  <Text style={[styles.infotxt, styles.time]}>{item.start_time} - {item.end_time}</Text>
                                </View>
                              </View>
                            )}
                          />
                        </TouchableOpacity>
                      </TouchableOpacity>
                    </Modal>
                  {/* END OF TUESDAY MODAL VIEW */}
              </TouchableOpacity>

            {/* WEDNESDAY */}
              <TouchableOpacity onPress={() => setWedModal(true)} style={styles.btndays}>
                <Text style={[styles.btndaystxt]}>Wed</Text>
                  {/* WEDNESDAY MODAL VIEW */}
                    <Modal
                      animationType='fade'
                      transparent={true}
                      visible={wedModal}
                      onRequestClose={() => {
                        setWedModal(!wedModal);
                      }} >
                      <TouchableOpacity onPress={() => setWedModal(false)} style={styles.centeredView}>
                        <TouchableOpacity style={styles.modalView} activeOpacity={1} >
                          <Pressable
                            style={[styles.buttonClose]}
                            onPress={() => setWedModal(!wedModal)} >
                              <AntDesign name='closecircle' size={20} color={'#F6F7F7'} style={styles.closeBtn} />
                          </Pressable>
                          <Text style={styles.dayTxt}>W E D N E S D A Y</Text>
                          {/* WEDNESDAY FLATLIST */}
                          <FlatList
                            data={wedData}
                            keyExtractor={(item) => item.schedule_id.toString()}
                            renderItem={({ item }) => (
                              <View style={styles.schedContainer}>
                                <View style={styles.infoContainer}>
                                  <Text style={[styles.infotxt, styles.docName]}>{item.doctor_name}</Text>
                                  <Text style={[styles.infotxt, styles.special]}>{item.specialization}</Text>
                                  <Text style={[styles.infotxt, styles.time]}>{item.start_time} - {item.end_time}</Text>
                                </View>
                              </View>
                            )}
                          />
                        </TouchableOpacity>
                      </TouchableOpacity>
                    </Modal>
                  {/* END OF WEDNESDAY MODAL VIEW */}
              </TouchableOpacity>

            {/* THURSDAY */}
              <TouchableOpacity onPress={() => setThuModal(true)} style={styles.btndays}>
                <Text style={[styles.btndaystxt]}>Thu</Text>
                  {/* THURSDAY MODAL VIEW */}
                    <Modal
                      animationType='fade'
                      transparent={true}
                      visible={thuModal}
                      onRequestClose={() => {
                        setTueModal(!thuModal);
                      }} >
                      <TouchableOpacity onPress={() => setThuModal(false)} style={styles.centeredView}>
                        <TouchableOpacity style={styles.modalView} activeOpacity={1} >
                          <Pressable
                            style={[styles.buttonClose]}
                            onPress={() => setThuModal(!thuModal)} >
                              <AntDesign name='closecircle' size={20} color={'#F6F7F7'} style={styles.closeBtn} />
                          </Pressable>
                          <Text style={styles.dayTxt}>T H U R S D A Y</Text>
                          {/* THURSDAY FLATLIST */}
                          <FlatList
                            data={thuData}
                            keyExtractor={(item) => item.schedule_id.toString()}
                            renderItem={({ item }) => (
                              <View style={styles.schedContainer}>
                                <View style={styles.infoContainer}>
                                  <Text style={[styles.infotxt, styles.docName]}>{item.doctor_name}</Text>
                                  <Text style={[styles.infotxt, styles.special]}>{item.specialization}</Text>
                                  <Text style={[styles.infotxt, styles.time]}>{item.start_time} - {item.end_time}</Text>
                                </View>
                              </View>
                            )}
                          />
                        </TouchableOpacity>
                      </TouchableOpacity>
                    </Modal>
                  {/* END OF THURSDAY MODAL VIEW */}
              </TouchableOpacity>

            {/* FRIDAY */}
              <TouchableOpacity onPress={() => setFriModal(true)} style={styles.btndays}>
                <Text style={[styles.btndaystxt]}>Fri</Text>
                  {/* FRIDAY MODAL VIEW */}
                  <Modal
                      animationType='fade'
                      transparent={true}
                      visible={friModal}
                      onRequestClose={() => {
                        setFriModal(!friModal);
                      }} >
                      <TouchableOpacity onPress={() => setFriModal(false)} style={styles.centeredView}>
                        <TouchableOpacity style={styles.modalView} activeOpacity={1} >
                          <Pressable
                            style={[styles.buttonClose]}
                            onPress={() => setFriModal(!friModal)} >
                              <AntDesign name='closecircle' size={20} color={'#F6F7F7'} style={styles.closeBtn} />
                          </Pressable>
                          <Text style={styles.dayTxt}>F R I D A Y</Text>
                          {/* FRIDAY FLATLIST */}
                          <FlatList
                            data={friData}
                            keyExtractor={(item) => item.schedule_id.toString()}
                            renderItem={({ item }) => (
                              <View style={styles.schedContainer}>
                                <View style={styles.infoContainer}>
                                  <Text style={[styles.infotxt, styles.docName]}>{item.doctor_name}</Text>
                                  <Text style={[styles.infotxt, styles.special]}>{item.specialization}</Text>
                                  <Text style={[styles.infotxt, styles.time]}>{item.start_time} - {item.end_time}</Text>
                                </View>
                              </View>
                            )}
                          />
                        </TouchableOpacity>
                      </TouchableOpacity>
                    </Modal>
              </TouchableOpacity>

            {/* SATURDAY */}
              <TouchableOpacity onPress={() => setSatModal(true)} style={[styles.btndays, styles.radiusRgt]}>
                <Text style={[styles.btndaystxt]}>Sat</Text>
                  {/* SATURDAY MODAL VIEW */}
                  <Modal
                      animationType='fade'
                      transparent={true}
                      visible={satModal}
                      onRequestClose={() => {
                        setSatModal(!satModal);
                      }} >
                      <TouchableOpacity onPress={() => setSatModal(false)} style={styles.centeredView}>
                        <TouchableOpacity style={styles.modalView} activeOpacity={1} >
                          <Pressable
                            style={[styles.buttonClose]}
                            onPress={() => setSatModal(!satModal)} >
                              <AntDesign name='closecircle' size={20} color={'#F6F7F7'} style={styles.closeBtn} />
                          </Pressable>
                          <Text style={styles.dayTxt}>SA T U R D A Y</Text>
                          {/* THURSDAY FLATLIST */}
                          <FlatList
                            data={satData}
                            keyExtractor={(item) => item.schedule_id.toString()}
                            renderItem={({ item }) => (
                              <View style={styles.schedContainer}>
                                <View style={styles.infoContainer}>
                                  <Text style={[styles.infotxt, styles.docName]}>{item.doctor_name}</Text>
                                  <Text style={[styles.infotxt, styles.special]}>{item.specialization}</Text>
                                  <Text style={[styles.infotxt, styles.time]}>{item.start_time} - {item.end_time}</Text>
                                </View>
                              </View>
                            )}
                          />
                        </TouchableOpacity>
                      </TouchableOpacity>
                    </Modal>
              </TouchableOpacity>
          </View>
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

  date: {
    marginTop: responsiveHeight(10),
    fontSize: responsiveFontSize(3.5),
    fontWeight: '900',
  },

  day: {
    fontSize: responsiveFontSize(2),
  },

  availdoc: {
    marginTop: responsiveHeight(2.5),
    fontSize: responsiveFontSize(2.3),
    fontWeight: '700',
  },

  btngrp: {
    flexDirection: 'row',
    marginTop: responsiveHeight(1),
    marginHorizontal: responsiveWidth(5),
    marginVertical: responsiveHeight(5),
  },

  btndays:{
    backgroundColor: '#263F6B',
    padding: 20,
  },

  radiusLft: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  radiusRgt: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  btndaystxt: {
    color: '#fff',
    fontSize: responsiveFontSize(1.5),
  },

  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: responsiveHeight(15),
  },

  modalView: {
    width: responsiveWidth(75),
    height: responsiveHeight(50),
    marginHorizontal: responsiveWidth(12),
    backgroundColor: '#263F6B',
    borderRadius: 20,
    padding: 20,
    paddingLeft: 20,
    paddingRight: 10,
    alignSelf: "center",
    elevation: 5
  },

  buttonClose: {
    marginLeft: responsiveWidth(65),
    marginTop: responsiveHeight(-0.6),
  },
  
  schedContainer: {
    backgroundColor: '#F6F7F7',
    width: responsiveWidth(60),
    marginHorizontal: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
    padding: 30,
    borderRadius: 15,
    elevation: 3
  },

  infoContainer: {
    
  },

  infoTxt: {
    
  },

  dayTxt: {
    fontSize: responsiveFontSize(2.5),
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: responsiveHeight(1.5),
  },

  docName: {
    fontSize: responsiveFontSize(2.5),
    color: '#282828',
  },

  special: {
    fontSize: responsiveFontSize(1.5),
    color: '#3E3E3F',
  },

  time: {
    fontSize: responsiveFontSize(1.3),
    color: '#3E3E3F',
  },
});
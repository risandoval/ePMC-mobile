import React, { useState, useEffect } from 'react';
import {StyleSheet, ImageBackground, View, Text, TouchableOpacity, 
        Modal, Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

function sunSched() {
  return (
    <View style={styles.schedDataContainer}>
      <Text>SUNDAY SCHEDULE</Text>
    </View>
  );
}

function monSched() {
  return (
    <View style={styles.schedDataContainer}>
      <Text>MONDAY SCHEDULE</Text>
    </View>
  );
}

function tueSched() {
  return (
    <View style={styles.schedDataContainer}>
      <Text>TUESDAY SCHEDULE</Text>
    </View>
  );
}

function wedSched() {
  return (
    <View style={styles.schedDataContainer}>
      <Text>WEDNESDAY SCHEDULE</Text>
    </View>
  );
}

function thuSched() {
  return (
    <View style={styles.schedDataContainer}>
      <Text>THURSDAY SCHEDULE</Text>
    </View>
  );
}

function friSched() {
  return (
    <View style={styles.schedDataContainer}>
      <Text>FRIDAY SCHEDULE</Text>
    </View>
  );
}

function satSched() {
  return (
    <View style={styles.schedDataContainer}>
      <Text>SATURDAY SCHEDULE</Text>
    </View>
  );
}



export default function AdminSched({}) {
  const [date, setDate] = useState(null);
  const [modal1Visible, setmodal1Visible] = useState(false);
  const [modal2Visible, setmodal2Visible] = useState(false);
  const [modal3Visible, setmodal3Visible] = useState(false);
  const [modal4Visible, setmodal4Visible] = useState(false);
  const [modal5Visible, setmodal5Visible] = useState(false);
  const [modal6Visible, setmodal6Visible] = useState(false);
  const [modal7Visible, setmodal7Visible] = useState(false);

  useEffect(() => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = new Date();
    let dayName = today.getDay(); //value of the day of the week

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

    var date = month + ' ' + today.getDate() + ', ' + today.getFullYear(); //today.getDate()
    setDate(date);
  }, []);

  
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/schedbg.png')} style={styles.bgimage}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.availdoc}>Available Doctors</Text>

        <View style={styles.btngrp}>
          {/* SUNDAY */}
          <TouchableOpacity onPress={() => setmodal1Visible(true)} style={[styles.btndays, styles.radiusLft]} >
            <Text style={[styles.btndaystxt]}>Sun</Text>
            {/* SUNDAY MODAL VIEW */}
              <Modal
                animationType='fade'
                transparent={true}
                visible={modal1Visible}
                onRequestClose={() => {
                  setmodal1Visible(!modal1Visible);
                }} >
                <TouchableOpacity onPress={() => setmodal1Visible(false)} style={styles.centeredView}>
                  <TouchableOpacity style={styles.modalView} onPress={() => console.log('do nothing')} activeOpacity={1} >
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setmodal1Visible(!modal1Visible)} >
                        <AntDesign name='closecircle' size={20} style={styles.closeBtn} />
                    </Pressable>
                    {sunSched()}
                  </TouchableOpacity>
                </TouchableOpacity>
              </Modal>
            {/* END OF SUNDAY MODAL VIEW */}
          </TouchableOpacity>

          {/* MONDAY */}
            <TouchableOpacity onPress={() => setmodal2Visible(true)} style={styles.btndays}>
              <Text style={[styles.btndaystxt]}>Mon</Text>
                {/* MONDAY MODAL VIEW */}
                  <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modal2Visible}
                    onRequestClose={() => {
                      setmodal2Visible(!modal2Visible);
                    }} >
                    <TouchableOpacity onPress={() => setmodal2Visible(false)} style={styles.centeredView}>
                      <TouchableOpacity style={styles.modalView} onPress={() => console.log('do nothing')} activeOpacity={1} >
                        <Pressable
                          style={[styles.button, styles.buttonClose]}
                          onPress={() => setmodal2Visible(!modal2Visible)} >
                            <AntDesign name='closecircle' size={20} style={styles.closeBtn} />
                        </Pressable>
                        {monSched()}
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </Modal>
                {/* END OF MONDAY MODAL VIEW */}
            </TouchableOpacity>

          {/* TUESDAY */}
            <TouchableOpacity onPress={() => setmodal3Visible(true)} style={styles.btndays}>
              <Text style={[styles.btndaystxt]}>Tue</Text>
                {/* TUESDAY MODAL VIEW */}
                  <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modal3Visible}
                    onRequestClose={() => {
                      setmodal3Visible(!modal3Visible);
                    }} >
                      <TouchableOpacity onPress={() => setmodal3Visible(false)} style={styles.centeredView}>
                        <TouchableOpacity style={styles.modalView} onPress={() => console.log('do nothing')} activeOpacity={1} >
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setmodal3Visible(!modal3Visible)} >
                              <AntDesign name='closecircle' size={20} style={styles.closeBtn} />
                          </Pressable>
                          {tueSched()}
                        </TouchableOpacity>
                      </TouchableOpacity>
                  </Modal>
                {/* END OF TUESDAY MODAL VIEW */}
            </TouchableOpacity>

          {/* WEDNESDAY */}
            <TouchableOpacity onPress={() => setmodal4Visible(true)} style={styles.btndays}>
              <Text style={[styles.btndaystxt]}>Wed</Text>
                {/* WEDNESDAY MODAL VIEW */}
                  <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modal4Visible}
                    onRequestClose={() => {
                      setmodal4Visible(!modal4Visible);
                    }} >
                      <TouchableOpacity onPress={() => setmodal4Visible(false)} style={styles.centeredView}>
                        <TouchableOpacity style={styles.modalView} onPress={() => console.log('do nothing')} activeOpacity={1} >
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setmodal4Visible(!modal4Visible)} >
                              <AntDesign name='closecircle' size={20} style={styles.closeBtn} />
                          </Pressable>
                          {wedSched()}
                        </TouchableOpacity>
                      </TouchableOpacity>
                  </Modal>
            </TouchableOpacity>

          {/* THURSDAY */}
            <TouchableOpacity onPress={() => setmodal5Visible(true)} style={styles.btndays}>
              <Text style={[styles.btndaystxt]}>Thu</Text>
                {/* THURSDAY MODAL VIEW */}
                  <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modal5Visible}
                    onRequestClose={() => {
                      setmodal5Visible(!modal5Visible);
                    }} >
                    <TouchableOpacity onPress={() => setmodal5Visible(false)} style={styles.centeredView}>
                      <TouchableOpacity style={styles.modalView} onPress={() => console.log('do nothing')} activeOpacity={1} >
                        <Pressable
                          style={[styles.button, styles.buttonClose]}
                          onPress={() => setmodal5Visible(!modal5Visible)} >
                            <AntDesign name='closecircle' size={20} style={styles.closeBtn} />
                        </Pressable>
                        {thuSched()}
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </Modal>
            </TouchableOpacity>

          {/* FRIDAY */}
            <TouchableOpacity onPress={() => setmodal6Visible(true)} style={styles.btndays}>
              <Text style={[styles.btndaystxt]}>Fri</Text>
                {/* FRIDAY MODAL VIEW */}
                  <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modal6Visible}
                    onRequestClose={() => {
                      setmodal6Visible(!modal6Visible);
                    }} >
                    <TouchableOpacity onPress={() => setmodal6Visible(false)} style={styles.centeredView}>
                      <TouchableOpacity style={styles.modalView} onPress={() => console.log('do nothing')} activeOpacity={1} >
                        <Pressable
                          style={[styles.button, styles.buttonClose]}
                          onPress={() => setmodal6Visible(!modal6Visible)} >
                            <AntDesign name='closecircle' size={20} style={styles.closeBtn} />
                        </Pressable>
                        {friSched()}
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </Modal>
            </TouchableOpacity>

          {/* SATURDAY */}
            <TouchableOpacity onPress={() => setmodal7Visible(true)} style={[styles.btndays, styles.radiusRgt]}>
              <Text style={[styles.btndaystxt]}>Sat</Text>
                {/* SATURDAY MODAL VIEW */}
                  <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modal7Visible}
                    onRequestClose={() => {
                      setmodal7Visible(!modal7Visible);
                    }} >
                    <TouchableOpacity onPress={() => setmodal7Visible(false)} style={styles.centeredView}>
                      <TouchableOpacity style={styles.modalView} onPress={() => console.log('do nothing')} activeOpacity={1} >
                        <Pressable
                          style={[styles.button, styles.buttonClose]}
                          onPress={() => setmodal7Visible(!modal1Visible)} >
                            <AntDesign name='closecircle' size={20} style={styles.closeBtn} />
                        </Pressable>
                        {satSched()}
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </Modal>
            </TouchableOpacity>
        </View>
      </ImageBackground>
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
    paddingTop: StatusBar.currentHeight,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  date: {
    marginTop: responsiveHeight(3),
    fontSize: responsiveFontSize(3.5),
    fontWeight: '900',
  },

  availdoc: {
    marginTop: responsiveHeight(2.5),
    fontSize: responsiveFontSize(2.3),
    fontWeight: '500',
  },

  btngrp: {
    flexDirection: 'row',
    marginTop: responsiveHeight(0.5),
    marginHorizontal: responsiveWidth(5),
    // marginVertical: responsiveHeight(5),
  },

  btndays:{
    backgroundColor: '#49bccf',
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

  schedContainer: {
    backgroundColor: '#4e99dc',
    width: responsiveWidth(80),
    height: responsiveHeight(50),
    marginTop: responsiveHeight(8),
    padding: 20,
    borderRadius: 15,
    elevation: 5,
  },

  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: responsiveHeight(15),
  },

  modalView: {
    width: responsiveWidth(80),
    height: responsiveHeight(50),
    marginHorizontal: responsiveWidth(10),
    backgroundColor: '#4e99dc',
    borderRadius: 20,
    padding: 30,
    paddingLeft: 30,
    paddingRight: 10,
    // alignItems: "center",
    elevation: 5
  },

  buttonClose: {
    marginLeft: responsiveWidth(67),
    marginTop: responsiveHeight(-1.5),
  },

  modalText: {
    fontSize: responsiveFontSize(1.5),
  },
});
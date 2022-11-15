import React, { useState } from "react";
import { StyleSheet, ImageBackground, View, Pressable, Text, Alert, Modal, TouchableOpacity, StatusBar} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight, 
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

export default function AdminReports() {
  const [modal1Visible, setmodal1Visible] = useState(true);
  const [modal2Visible, setmodal2Visible] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/reportbg.png')} style={styles.bgimage}>
        {/* Patient Rec Modal */}
        <Modal
          animationType='fade'
          transparent={true}
          visible={modal1Visible}
          onRequestClose={() => {
            setmodal1Visible(!modal1Visible);
          }}
          
        >
          <TouchableOpacity onPress={() => setmodal1Visible(false)} style={styles.centeredView}>
            <TouchableOpacity style={styles.modalView} onPress={() => console.log('do nothing')} activeOpacity={1} >
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setmodal1Visible(!modal1Visible)} >
                  <AntDesign name='closecircle' size={20} style={styles.closeBtn} />
              </Pressable>
              <Text style={styles.modalText}>Patient Record</Text>
              <Text style={styles.modalText}>Patient Record</Text>
              <Text style={styles.modalText}>Patient Record</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>
        
        {/* Inventory Modal */}
        <Modal
          animationType='fade'
          transparent={true}
          visible={modal2Visible}
          onRequestClose={() => {
            setmodal2Visible(!modal2Visible);
          }}
        >
          <TouchableOpacity onPress={() => setmodal2Visible(false)} style={styles.centeredView}>
            <TouchableOpacity style={styles.modalView} onPress={() => console.log('do nothing')} activeOpacity={1} >
              {/* <View style={[styles.buttonClose]}> */}
                <Pressable
                  style={[styles.buttonClose]}
                  onPress={() => setmodal2Visible(!modal2Visible)} >
                    <AntDesign name='closecircle' size={20} />
                </Pressable>
              {/* </View> */}
              <Text style={styles.modalText}>Inventory</Text>
              <Text style={styles.modalText}>Inventory</Text>
              <Text style={styles.modalText}>Inventory</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>

        <View style={styles.btnOuter}>
          <Pressable onPress={() => setmodal1Visible(true)} style={styles.btnInner}>
            <Text style={styles.btnText}>Patient Record</Text>
          </Pressable>
          <Pressable onPress={() => setmodal2Visible(true)} style={styles.btnInner}>
            <Text style={styles.btnText}>Inventory</Text>
          </Pressable>
        </View>
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
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },

  btnOuter: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: responsiveHeight(5),
  },

  btnInner: {
    backgroundColor: '#D4EDFF',
    width: responsiveWidth(40),
    padding: 15,
    borderRadius: 30
  },

  btnText: {
    color: '#000',
    // fontSize: 20,
    fontSize: responsiveFontSize(1.8),
    textAlign: 'center'
  },

  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: responsiveHeight(10),
  },

  modalView: {
    width: responsiveWidth(90),
    height: responsiveHeight(73),
    marginHorizontal: responsiveWidth(5),
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 30,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  buttonClose: {
    marginLeft: responsiveWidth(78),
    marginTop: responsiveHeight(-1.5),
  },

  modalText: {
    fontSize: responsiveFontSize(1.5),
  },
});
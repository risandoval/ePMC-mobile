import React, { useState } from "react";
import { StyleSheet, ImageBackground, View, Pressable, Text, Alert, Modal, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

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
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setmodal2Visible(!modal2Visible)} >
                  <AntDesign name='closecircle' size={20} style={styles.closeBtn} />
              </Pressable>
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
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnOuter: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 80,
  },

  btnInner: {
    backgroundColor: '#D4EDFF',
    width: 200,
    height: 70,
    padding: 20,
    borderRadius: 30
  },

  btnText: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center'
  },

  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 70,
  },

  modalView: {
    height: 700,
    // margin: 50,
    marginHorizontal: 40,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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

  closeBtn: {
    position: 'absolute',
    top: -15,
    left: 190,
  },
});
import React, { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { StyleSheet, ImageBackground, View, Text, ScrollView} from 'react-native';
import { responsiveHeight,  responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function PatientDashboard() {
  const [val, setValue] = useState([]);
  const headers = {
    'Accept': 'application/json',
    'Content-Type' : 'application/json;charset=UTF-8',
    'X-API-KEY':'myapi',
    'Authorization':'Basic YWRtaW46YWRtaW4xMjM='   
  }

  //fetch first and last name
  const prof = async() => {
    const fet = await SecureStore.getItemAsync('data');
    const profiledata = JSON.parse(fet);
    
    // var profilepath = "http://192.168.1.5:80/epmc-4/profile_mobile";
    // var profilepath = "http://192.168.2.115:80/epmc-4/profile_mobile";
    var profilepath = "http://e-pmc.com/adm_dashboard_total";

    var data ={
        email: profiledata.email,
        pass: profiledata.pass
    };

    await fetch(profilepath,{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
      })  
      .then((response)=>response.json())
      .then((response)=>{
        (async function() {
          if (response[0] !== null) {
            await SecureStore.setItemAsync('editprof',JSON.stringify(response));
            setValue(response)
          } else {
            alert("Failed to fetch");
          }
        })();
      })
      .catch((error)=>{
        console.error("ERROR FOUND " + error);
      })
    }
    useEffect(()=>{
        prof();
        const dataInterval = setInterval(() => prof(), 5 * 1000);
        return () => clearInterval(dataInterval);
    },[]);


  //fetch next consultation
  // const [isLoading, setLoading] = useState(true);
  // const [nextConsul, setNextConsul] = useState([]);
  // const nextConsultation = async() => {

  //   var nextconsultpath = "http://192.168.1.5:80/epmc-4/patient_dashboard";
  //   // var nextconsultpath = "http://192.168.2.115:80/epmc-4/patient_dashboard";
  //   // var nextconsultpath = "http://e-pmc.com/patient_dashboard";

  //   await fetch(nextconsultpath,{
  //     headers: headers
  //   })  
  //   .then((response)=>response.json())
  //   .then((json)=>setNextConsul(json))
  //   .catch((error)=> console.error("ERROR FOUND " + error))
  //   .finally(() => setLoading(false));
  // }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/patientdashboard.png')} style={styles.bgimage}>
        {/* Welcome Text */}
        <View style={styles.welcomeCont}>
          <Text style={styles.welcomeText}>WELCOME, </Text>
          {val.map(_prof=><Text style={styles.welcomeName} key={""}>{_prof.full_name}</Text>)}
        </View>

        {/* Next Consultation */}
        
        <View style={styles.nextConsultCont}>
        {/* {isLoading ? <Text style={styles.loadingtext}>Loading Data...</Text> : */}
          <Text style={styles.nextConsultText}><Text style={{fontWeight:"bold"}}>Next Consultation:</Text> {'November 23, 2022'}</Text>
        {/* } */}
        </View>
        

        {/* Consultation History */}
        <View style={styles.consultHistoryCont}>
          <ScrollView>
            <View style={styles.header}>
              <View style={styles.box}></View>
              <Text style={styles.consultHistoryText}> Consultation History</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.nextConsultText}><Text style={{fontWeight:"bold"}}>11-20-2022</Text> {'Dr. Miguel Pagtakhan'}</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.nextConsultText}><Text style={{fontWeight:"bold"}}>10-03-2022</Text> {'Dr. Miguel Pagtakhan'}</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.nextConsultText}><Text style={{fontWeight:"bold"}}>05-28-2022</Text> {'Dr. Miguel Pagtakhan'}</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.nextConsultText}><Text style={{fontWeight:"bold"}}>11-03-2021</Text> {'Dr. Miguel Pagtakhan'}</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.nextConsultText}><Text style={{fontWeight:"bold"}}>01-25-2021</Text> {'Dr. Miguel Pagtakhan'}</Text>
            </View>
          </ScrollView>
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
  },

  welcomeCont: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: wp('80%'),
    height: hp('12%'),
    marginTop: hp('25%'),
    padding: responsiveWidth(4),
    borderRadius: 20,
  },

  welcomeText: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },

  welcomeName: {
    fontSize: responsiveFontSize(2.8),
    fontWeight: 'bold',
    color: "#0079D0"
  },

  nextConsultCont: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
    width: responsiveWidth(80),
    height: responsiveHeight(5),
    marginTop: responsiveHeight(3),
    paddingLeft: responsiveWidth(4),
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#01BB8E',
  },

  nextConsultText: {
    fontSize: responsiveFontSize(1.7),
  },

  nextConsultDate: {
    fontSize: responsiveFontSize(1.7),
  },

  consultHistoryCont: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: wp('80%'),
    height: hp('43%'),
    marginTop: responsiveHeight(2),
    padding: responsiveWidth(4),
    borderRadius: 20,
  },

  header: {
    flexDirection: 'row',
  },

  box: {
    backgroundColor: '#0F6BAE',
    width: responsiveWidth(1.5),
    height: responsiveHeight(2.8),
  },

  consultHistoryText: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },

  historyCont: {

  },

  body: {
    backgroundColor: '#F6F6F6',
    marginTop: responsiveHeight(2),
    padding: 10,
    borderRadius: 10,
  }
});
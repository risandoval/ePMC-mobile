import React, { useState, useEffect } from 'react';
import {StyleSheet, ImageBackground, View, Text, TouchableOpacity, Modal, Pressable, FlatList, Dimensions  } from 'react-native';
import {responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Agenda} from 'react-native-calendars';


export default function AdminSched({}) {
  const [isLoading, setLoading] = useState(true);
  const [schedData, setSchedData] = useState([]);

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

  const renderItem = (item) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={[styles.itemText, {fontWeight: '800'}]}>{item.doctor_name}</Text>
        <Text style={[styles.itemText, {fontWeight: '500'}]}>{item.username}</Text>
        <Text style={styles.itemText}>{item.time}</Text>
        <View style={styles.statusCont}>
          {item.status == 0 ? <Text style={[styles.statusText, {backgroundColor: '#FAD692'}]}>Pending</Text> : null}
          {item.status == 1 ? <Text style={[styles.statusText, {backgroundColor: '#FA9292'}]}>Declined</Text> : null}
          {item.status == 2 ? <Text style={[styles.statusText, {backgroundColor: '#92FAA3'}]}>Confirmed</Text> : null}
        </View>
        
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
    justifyContent: 'center',
    alignItems: 'center',
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

  
});
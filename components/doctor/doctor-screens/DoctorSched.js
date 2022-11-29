import React, { useState, useEffect } from 'react';
import {StyleSheet, ImageBackground, View, Text, TouchableOpacity, Modal, Pressable, FlatList, Dimensions  } from 'react-native';
import {responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Calendar, Agenda} from 'react-native-calendars';




export default function AdminSched({}) {
  const [isLoading, setLoading] = useState(true);
  const [schedData, setSchedData] = useState([]);

  const headers = {
    'Accept': 'application/json',
    'Content-Type' : 'application/json;charset=UTF-8',
    'X-API-KEY':'myapi',
    'Authorization':'Basic YWRtaW46YWRtaW4xMjM='   
  }

  const fetchSchedule = async () => {

    var schedulepath = "http://192.168.1.5:80/epmc-4/adm_sched_mobile";
    // var schedulepath = "http://192.168.2.115:80/epmc-4/adm_sched_mobile";

    // var schedulepath = "http://e-pmc.com/adm_sched_mobile";
  
    await fetch(schedulepath,{
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
        <Text style={[styles.itemText, {fontWeight: 'bold'}]}>{item.doctor_name}</Text>
        <Text style={styles.itemText}>{item.specialization}</Text>
        <Text style={styles.itemText}>{item.start_time} - {item.end_time}</Text>
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
            //   '2022-11-22': [{doctor_name: 'Dr. Miguel Pagtakhan', specialization: 'Internal Medicine'}],
            //   '2022-11-23': [{doctor_name: 'Dr. Miguel Pagtakhan', specialization: 'Internal Medicine'}],
            //   '2022-11-29': [{doctor_name: 'Dr. Miguel Pagtakhan', specialization: 'Internal Medicine'}]
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
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  itemText: {
    alignSelf: 'flex-start',
    marginLeft: wp('5%'),
  }
});
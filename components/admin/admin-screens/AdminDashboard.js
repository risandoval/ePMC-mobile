import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView, ImageBackground } from 'react-native';
import { responsiveHeight,  responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather'


export default function AdminDashboard() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  
  const headers = {
    'Accept': 'application/json',
    'Content-Type' : 'application/json;charset=UTF-8',
    'X-API-KEY':'myapi',
    'Authorization':'Basic YWRtaW46YWRtaW4xMjM='   
  }

  
  // fetching for Total
  const fetchTotal = async () => {

    // var dashboardpath = "http://192.168.1.5:80/epmc-4/adm_dashboard_total";
    var dashboardpath = "http://192.168.2.115:80/epmc-4/adm_dashboard_total";

      //  var dashboardpath = "http://e-pmc.com/adm_dashboard_total";
  
    await fetch(dashboardpath,{
      headers: headers
    })  
    .then((response)=>response.json())
    .then((json)=>setData(json))
    .catch((error)=> console.error("ERROR FOUND " + error))
    .finally(() => setLoading(false));
  }

  useEffect(()=>{
    fetchTotal();
    const dataInterval = setInterval(() => fetchTotal(), 5 * 1000);
    return () => clearInterval(dataInterval);
  },[]);

  // fetching for Recent Activity
  const fetchRecent = async () => {

    // var dashboardpath = "http://192.168.1.5:80/epmc-4/adm_dashboard_recent";
    var dashboardpath = "http://192.168.2.115:80/epmc-4/adm_dashboard_recent";

    // var dashboardpath = "http://e-pmc.com/adm_dashboard_recent";
  
    await fetch(dashboardpath,{
      headers: headers
    })  
    .then((response)=>response.json())
    .then((json)=>setData2(json))
    .catch((error)=> console.error("ERROR FOUND " + error))
    .finally(() => setLoading(false));
  }

  useEffect(()=>{
    fetchRecent();
    const dataInterval = setInterval(() => fetchRecent(), 5 * 1000);
    return () => clearInterval(dataInterval);
  },[]);

  return (
    <View style={styles.container}>
      {isLoading ? <Text style={styles.loadingtext}>Loading Data...</Text>:
      <ImageBackground source={require('../../../assets/dashboardfinal.png')} style={styles.bgimage}>
        <View style={[styles.box, styles.box1]}>
          <FontAwesome name="clipboard-list" style={[styles.icon, styles.iconMargin]} />
          <View>
            <Text style={[styles.txtTotal, styles.txtTotal1]}>Total No. of Patient Records</Text>
      
            {data.map(_total=><Text style={styles.txtNum} key={_total.id}>{_total.patient}</Text>)}
          </View>
        </View>
        <View style={[styles.box, styles.box2]}>
          <MaterialIcons name="inventory" style={styles.icon} />
          <View>
            <Text style={styles.txtTotal}>Total No. of Inventory Items</Text>
            {data.map(_total=><Text style={[styles.txtNum, styles.txtNum1]} key={""}>{_total.inventory}</Text>)}
          </View>
        </View>

        <View style={[styles.box, styles.box3]}>
          <Feather name="user" style={styles.icon} />
          <View>
            <Text style={styles.txtTotal}>Total No. of User Accounts</Text>
            {data.map(_total=><Text style={[styles.txtNum, styles.txtNum1]} key={""}>{_total.users}</Text>)}
          </View>
        </View>

        <View style={[styles.box, styles.box4]}>
          <FontAwesome name="clipboard-list" style={[styles.icon, styles.iconMargin]} />
          <View>
            <Text style={[styles.txtTotal, styles.txtTotal1]}>Total No. of Patients Today</Text>
            {data.map(_total=><Text style={styles.txtNum} key={""}>{_total.new_patient}</Text>)}
          </View>
        </View>
      
        <Text style={styles.txtRecent}>Recent Activity</Text>
        
        <View style={styles.recentOuterBox}>
          <FlatList
          data={data2.recentact}
          keyExtractor={({ recent_id }, index) => recent_id}
          renderItem={({ item }) => (
            <View style={styles.recentInnerBox}>
              <Text style={styles.recentData}>{item.activity}</Text>
            </View>
          )}
          />
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },

  container: {
    flex: 1,
  },
  
  icon: {
    marginTop: hp('2.2%'),
    marginLeft: wp('2%'),
    color: "black",
    fontSize: hp('6%'),
  },

  iconMargin: {
    // marginTop: responsiveHeight(1.4),
    marginTop: hp('1.8%'),
    marginLeft: responsiveWidth(2.5),
  },

  box: {
    width: wp('35%'),
    height: hp('12%'),
    borderRadius: 20,
    padding: wp('2%'),
    paddingLeft: wp('1%'),
    paddingRight: wp('15%'),
    marginTop: hp('3%'),
    flexDirection: 'row'
  },

  box1: {
    backgroundColor: '#92CEFA',
    marginTop: hp('15%'),
  },

  box2: {
    backgroundColor: '#FAD692',
    marginTop: hp('15%'),
  },

  box3: {
    backgroundColor: '#FA9292',
  },

  box4: {
    backgroundColor: '#92FAA3',
  },

  txtTotal: {
    fontSize: responsiveFontSize(1),
    marginTop: responsiveHeight(3),
    marginLeft: responsiveWidth(0.4),
  },

  txtTotal1: {
    marginLeft: responsiveWidth(2),
  },

  txtNum: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    marginLeft: responsiveWidth(2),
    marginTop: responsiveHeight(-0.1),
  },

  txtNum1: {
    marginLeft: responsiveWidth(0),
  },

  txtRecent: {
    marginTop: hp('4%'),
    fontSize: hp('4.3%'),
    color: "#000",
    fontWeight: "bold",
  },

  recentOuterBox: {
    marginTop: hp('-1%'),
    marginBottom: hp('1%'),
    paddingTop: hp('2%'),
    paddingBottom: hp('2%'),
    width: wp('85%'),
    height: hp('52%'),
    // borderWidth: 1
  },

  recentInnerBox: {
    backgroundColor: '#fff',
    width: responsiveWidth(80),
    height: responsiveHeight(6),
    padding: responsiveWidth(3.3),
    paddingLeft: responsiveWidth(3.3),
    marginVertical: responsiveHeight(0.3),
    marginHorizontal: responsiveWidth(2.5),
    borderRadius: 10,
    elevation: 1
  },

  recentData: {
    fontSize: responsiveFontSize(1.4),
  }
})
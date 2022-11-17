import { useEffect, useState } from 'react';
import { StyleSheet, ImageBackground, FlatList, View, TextInput, Pressable, Alert, Text, StatusBar, Image } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const showAlert = () =>
  Alert.alert(
    "Search",
    "Search Button Working",
  );

export default function AdminPatientRec() {
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

    var patientrec = "http://192.168.1.5:80/epmc-4/api/Admin_dashboard/total";
    var patientrec2 = "http://192.168.2.115:80/epmc-4/adm_patientrec_total";
  
    await fetch(patientrec2,{
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

  const fetchPatient = async () => {

    var patientrec = "http://192.168.1.5:80/epmc-4/api/Admin_patientrec_mobile/patients";
    var patientrec2 = "http://192.168.2.115:80/epmc-4/adm_patientrec_patients";
  
    await fetch(patientrec2,{
      headers: headers
    })  
    .then((response)=>response.json())
    .then((json)=>setData2(json))
    .catch((error)=> console.error("ERROR FOUND " + error))
    .finally(() => setLoading(false));
  }

  useEffect(()=>{
    fetchPatient();
    const dataInterval = setInterval(() => fetchPatient(), 5 * 1000);
    return () => clearInterval(dataInterval);
  },[]);
  
  const headerComponent = () => {
    return <Text style={styles.listHeadline}>Patient Record</Text>
  }

  const itemSeparator = () => {
    return <View style={styles.separator}/>
  }
  
  return (
    <View style={styles.container}>
      {isLoading ? <Text style={styles.loadingtext}>Loading Data...</Text>:
      <ImageBackground source={require('../../../assets/patientrecbg.png')} style={styles.bgimage}>
        <View style={styles.searchBar}>
          <TextInput 
            style={styles.search}
            placeholder="Search"
          />
          <Pressable onPress={showAlert} ><EvilIcons name='search' style={styles.searchicon} /></Pressable>
        </View>

        <View style={styles.total}>
        {data.map(_total=><Text style={styles.txtTotal} key={_total.id}>{_total.patient} Patients</Text>)}
        </View>

        <View style={styles.patientlist}>
          <FlatList
          ListHeaderComponentStyle={styles.listHeader}
          ListHeaderComponent={headerComponent}
          data={data2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.avatarContainer}>
              <Image source={{uri:item.image}} style={styles.avatar}/>
              </View>
              <Text>{item.pt_fullname}</Text>
              <View style={styles.logoutContainer}>
              <Pressable style={styles.logoutbox}>
                <Text style={styles.viewtxt}>View</Text>
              </Pressable>
              </View>
            </View>
          )}
          ItemSeparatorComponent = {itemSeparator}
          />
        </View>
        
      </ImageBackground>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },

  bgimage: {
    width: '100%',
    height: '100%',
    flex: 1
  },

  searchBar: {
    backgroundColor: '#fff',
    width: responsiveWidth(80),
    height: responsiveHeight(5),
    marginVertical: responsiveHeight(5),
    marginHorizontal: responsiveWidth(10),
    paddingLeft: responsiveWidth(5),
    borderRadius: 50,
    elevation: 5,
    flexDirection: 'row',
  },

  search: {
    flex: 1
  },

  searchicon: {
    paddingTop: responsiveHeight(1),
    paddingRight: responsiveWidth(2.8),
    fontSize: responsiveFontSize(3),
  },

  total: {
    marginTop: responsiveHeight(-2),
    marginHorizontal: responsiveWidth(10),
  },

  txtTotal: {
    color: '#fff',
    fontSize: responsiveFontSize(1.7),
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationColor: '#32FFE6',
  },

  patientlist: {
    backgroundColor: '#fff',
    marginVertical: responsiveHeight(1.5),
    marginHorizontal: responsiveWidth(10),
    width: responsiveWidth(80),
    height: responsiveHeight(70),
    borderRadius: 20,
  },

  separator: {
    height: 1,
    width: '100%',
    backgroundColor:'#CCC',
  },

  listHeader: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },

  listHeadline: {
    color: '#333',
    fontSize: 21,
    fontWeight: 'bold'
  },

  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
  },

  avatarContainer: {
    // backgroundColor: '#D9D9D9',
    // borderRadius: 100,
    height: 90,
    width: 90,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    borderRadius: 100,
    height: 75,
    width: 75,
  },

  logoutContainer: {
    height: 90,
    width: 90,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutbox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#49bccf',
    width: responsiveWidth(21),
    padding: responsiveWidth(1.5),
    marginLeft: 5,
    borderRadius: 15,
    // elevation: 15,
    // borderWidth: 1,
},

logouttxt: {
    fontSize: 16,
    color: '#fff',
},
});
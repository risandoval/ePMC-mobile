import { useEffect, useState } from 'react';
import { StyleSheet, ImageBackground, FlatList, View, TextInput, Pressable, Alert, Text, StatusBar, Image, Modal, SectionList } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

// const showAlert = () =>
//   Alert.alert(
//     "Search",
//     "Search Button Working",
//   );

export default function AdminPatientRec({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]); //total patients
  const [data2, setData2] = useState([]); //patient list
  const [search, setSearch] = useState('');
  
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
  
    await fetch(patientrec,{
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

    var patientrec = "http://192.168.1.5:80/epmc-4/adm_patientrec_patients";
    var patientrec2 = "http://192.168.2.115:80/epmc-4/adm_patientrec_patients";
  
    await fetch(patientrec,{
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

  //search
  const searchFilter = (text) => {
    if (text) {
      const newData = data2.filter((item) => {
        const itemData = item.pt_fullname ? item.pt_fullname.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setData2(newData);
      setSearch(text);
    } else {
      setData2(data2);
        setSearch(text);
    }
  }
  //end search

  //Section List - Patient Record View
  const DATA = [
    {
      title: "Personal Information",
      data: [{id: "1", value : "image"}, {id: "2", value : "PMC"}, {id: "3", value : "Risotto"}]
    },
    {
      title: "Contact Information",
      data: [{id: "1", value : "image"}, {id: "2", value : "PMC"}, {id: "3", value : "Risotto"}]
    },
    {
      title: "Emergency Information",
      data: [{id: "1", value : "image"}, {id: "2", value : "PMC"}, {id: "3", value : "Risotto"}]
    },
    {
      title: "Vital Signs",
      data: [{id: "1", value : "image"}, {id: "2", value : "PMC"}, {id: "3", value : "Risotto"}]
    },
  ];


  //for border bottom radius
  function ListItem({
    section,
    item,
    index,
  }) {
    const amountOfItemsInSection = section.data.length - 1
    return (
    <View style={{
          ...styles.recordContainer,...{
          borderBottomLeftRadius: index === amountOfItemsInSection ? 15 : 0,
          borderBottomRightRadius: index === amountOfItemsInSection ? 15 : 0}}}>
      <View style={styles.recordDataContainer}>
        <Text style={styles.recordData}>{item.id}: {item.value} </Text>
      </View>
    </View>
  )}

  // Modal for Patient Record
  const [modal1Visible, setmodal1Visible] = useState(false);
  const [modalEntry, setModalEntry] = useState();
  return (
    <View style={styles.container}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal1Visible}
        onRequestClose={() => {
          setmodal1Visible(!modal1Visible);
        }} >
          <View style={styles.centeredView}>
            <View style={styles.modalView} >
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setmodal1Visible(!modal1Visible)} >
                  <AntDesign name='closecircle' size={20} style={styles.closeBtn} />
              </Pressable>
              {/* SECTION LIST */}
              <SectionList
                sections={DATA}
                // keyExtractor={(item, index) => item + index}
                renderItem={({ item, section, index }) =>
                  <ListItem
                    section={section}
                    item={item}
                    index={index}
                  />
                }
                renderSectionHeader={({ section: { title } }) => (
                  <Text style={styles.recordheader}>{title}</Text>
                )}
              />
            </View>
          </View>
      </Modal>

      {isLoading ? <Text style={styles.loadingtext}>Loading Data...</Text>:
      <ImageBackground source={require('../../../assets/patientrecbg.png')} style={styles.bgimage}>
        <View style={styles.searchBar}>
          <TextInput 
            style={styles.search}
            value={search}
            placeholder="Search"
            onChangeText={(text) => searchFilter(text)}
          />
          {/* <Pressable ><EvilIcons name='search' style={styles.searchicon} /></Pressable> */}
          <EvilIcons name='search' style={styles.searchicon} />
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
                <Text style={styles.nametxt}>{item.pt_fullname}</Text>

                <View style={styles.viewContainer}>
                  <Pressable onPress={() => {setmodal1Visible(true);setModalEntry(item)}} style={styles.viewbox}>
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
    fontSize: responsiveFontSize(2.5),
    color: '#909090'
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
    padding: 20,
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
    justifyContent: 'space-between',
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

  nametxt: {
    flex: 1,
    textAlign: 'left',
  },

  viewContainer: {
    height: 90,
    width: 90,
    marginRight: 10,
    // marginLeft: 10,
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    // alignSelf: 'flex-end',
    
  },

  viewbox: {
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#00DA9D',
    width: responsiveWidth(15),
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

  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: responsiveHeight(10),
  },

  modalView: {
    width: responsiveWidth(90),
    height: responsiveHeight(85),
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

  //SECTION LIST STYLE
  recordheader: {
    backgroundColor: '#49bccf',
    color: '#fff',
    flex: 1,
    textAlign: 'left',
    width: responsiveWidth(80),
    marginTop: responsiveHeight(1),
    padding: 10,
    paddingLeft: 10,
    fontSize: responsiveFontSize(2),
    borderBottomWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  recordContainer: {
    flex: 1,
    backgroundColor: '#49bccf',
    padding: 10,
    // elevation: 5,
    // borderBottomLeftRadius: 15,
    // borderBottomRightRadius: 15,
  },

  recordDataContainer: {
    // backgroundColor: 'blue'
    marginLeft: responsiveWidth(5),
  },

  recordData: {
    // backgroundColor: 'blue'
    fontSize: responsiveFontSize(1.5),
    color: '#fff',
  },
});

  
import { useEffect, useState } from 'react';
import {StyleSheet, ImageBackground, FlatList, View, TextInput, Pressable, Text, Image, Modal, 
        SectionList } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

// const showAlert = () =>
//   Alert.alert(
//     "Search",
//     "Search Button Working",
//   );

export default function DoctorPatientRec({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]); //total patients
  const [data2, setData2] = useState([]); //patient list
  const [data3, setData3] = useState([]); //patient rec view
  const [search, setSearch] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEntry, setModalEntry] = useState([]);
  
  const headers = {
    'Accept': 'application/json',
    'Content-Type' : 'application/json;charset=UTF-8',
    'X-API-KEY':'myapi',
    'Authorization':'Basic YWRtaW46YWRtaW4xMjM='   
  }

  // fetching for Total
  const fetchTotal = async () => {

    // var patientrec = "http://192.168.1.5:80/epmc-4/api/Admin_dashboard/total";
    var patientrec = "http://192.168.2.115:80/epmc-4/adm_patientrec_total";

    // var patientrec = "http://e-pmc.com/adm_patientrec_total";
  
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

    // var patientrec = "http://192.168.1.5:80/epmc-4/adm_patientrec_patients";
    // var patientrec = "http://192.168.2.115:80/epmc-4/adm_patientrec_patients";

    var patientrec = "http://e-pmc.com/adm_patientrec_patients";
  
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

  // const fetchModal = async () => {
  //   var patientrecpath = 'http://192.168.2.115:80/epmc-4/adm_patientrec_view';

  //   await fetch(patientrecpath,{
  //     method: 'POST',
  //     headers: headers,
  //     body: JSON.stringify(modalEntry)
  //   })
  //   .then((response)=>response.json())
  //   //.then((response)=>console.log(response))
  //   .then((json)=>setData3(json))
  //   .catch((error)=>{
  //     console.error("ERROR FOUND " + error);
  //   })
  // }

  // useEffect(()=>{
  //   fetchModal();
  //   const dataInterval = setInterval(() => fetchModal(), 5 * 1000);
  //   return () => clearInterval(dataInterval);
  // },[]);

  useEffect(()=>{
    
      // var patientrecpath = 'http://192.168.1.5:80/epmc-4/adm_patientrec_view';
      // var patientrecpath = 'http://192.168.2.115:80/epmc-4/adm_patientrec_view';
      var patientrecpath = 'http://e-pmc.com/adm_patientrec_view';
      // let isSubscribed = true;

      const fetchModal = async () => {
        await fetch(patientrecpath,{
          method: 'POST',
          headers: headers,
          body: JSON.stringify(modalEntry)
        })
        .then((response)=>response.json())
        // .then((response)=>console.log(response))
        .then((json)=>setData3(json))
      }
      fetchModal()
        .catch(console.error);;
      // return () => isSubscribed = false;
    
  },[modalEntry]);
  
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

  const url = "http://e-pmc.com/assets/img/profile-avatars/patient-avatar-1.jpg"
  
  //Section List - Patient Record View
  const asd = [
    {
      title: "Personal Information",
      data: [{id:"                                  ", value: <View style={styles.avatarContainer}>
      <Image source={{uri:url}} style={styles.avatar2}/>
    </View>},{id: "                    PATIENT NO: ", value : "PMCKAS"}, {id: "2", value : "PMC"}, {id: "3", value : "Risotto"}]
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
  function ListItem({section,item,index,}) {
    const amountOfItemsInSection = section.data.length - 1
    return (
    <View style={{
          ...styles.recordContainer,...{
          borderBottomLeftRadius: index === amountOfItemsInSection ? 15 : 0,
          borderBottomRightRadius: index === amountOfItemsInSection ? 15 : 0}}}>
      <View style={styles.recordDataContainer}>
      
        <Text style={styles.recordData}>{item.value}</Text>
        
      </View>
    </View>
  )}

  // function Cards() {
  //   return (
  //     <View style={styles.patientlist}>
  //       <FlatList
  //       ListHeaderComponentStyle={styles.listHeader}
  //       ListHeaderComponent={headerComponent}
  //       data={data2}
  //       keyExtractor={(item) => item.id.toString()}
  //       renderItem={({ item }) => (
  //         <View style={styles.item}>
  //           <View style={styles.avatarContainer}>
  //             <Image source={{uri:item.image}} style={styles.avatar}/>
  //           </View>
  //           <Text style={styles.nametxt}>{item.pt_fullname}</Text>

  //           <View style={styles.viewContainer}>
  //             <Pressable onPress={() => {setModalVisible(true); setModalEntry(item); }} style={styles.viewbox}>
  //               <Text style={styles.viewtxt}>View</Text>
  //             </Pressable>
  //           </View>
          
  //         </View>
  //       )}
  //       ItemSeparatorComponent = {itemSeparator}
  //       />
  //       <Modal
  //         entry={modalEntry}
  //         modalVisible={modalVisible}
  //         onClose={() => setModalVisible(false)}
  //       />
  //     </View>
      
  //   );
  // }

  // function Modal({ entry, modalVisible, onClose }) {
  //   return (
  //     <View>
  //       <Modal
  //       animationType='fade'
  //       // transparent={true}
  //       visible={modalVisible}
  //       onRequestClose={() => {
  //         onClose();
  //       }} >
  //         <View style={styles.centeredView}>
  //           <View style={styles.modalView} >
  //             <Pressable
  //               style={[styles.button, styles.buttonClose]}
  //               onPress={() => onClose()} >
  //                 <AntDesign name='closecircle' size={20} style={styles.closeBtn} />
  //             </Pressable>
  //             {/* SECTION LIST */}
  //             <SectionList
  //               sections={asd}
  //               // keyExtractor={(item, index) => item + index}
  //               renderItem={({ item, section, index }) =>
  //                 {
  //                   const amountOfItemsInSection = section.data.length - 1
  //                   return (
  //                   <View style={{
  //                         ...styles.recordContainer,...{
  //                         borderBottomLeftRadius: index === amountOfItemsInSection ? 15 : 0,
  //                         borderBottomRightRadius: index === amountOfItemsInSection ? 15 : 0}}}>
  //                     <View style={styles.recordDataContainer}>
  //                       <Text style={styles.recordData}>{item.id} {item.value} </Text>
  //                     </View>
  //                   </View>
  //                 )}
  //               }
  //               renderSectionHeader={({ section: { title } }) => (
  //                 <Text style={styles.recordheader}>{title}</Text>
  //               )}
  //             />
  //           </View>
  //         </View>
  //       </Modal>
  //     </View>
  //   );
  // }

  // Modal for Patient Record
  return (
    <View style={styles.container}>
      {isLoading ? <Text style={styles.loadingtext}>Loading Data...</Text>:
      <ImageBackground source={require('../../../assets/patientrec.png')} style={styles.bgimage}>
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


        {/* <View style={styles.patientlist}>
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
          
        </View> */}

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
                <Pressable onPress={() => {setModalVisible(!modalVisible); setModalEntry(item); }} style={styles.viewbox}>
                  <Text style={styles.viewtxt}>View</Text>
                </Pressable>
              </View> 
            </View> 
          )}
          ItemSeparatorComponent = {itemSeparator}
          />
        </View>
        <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }} >
          <View style={styles.centeredView}>
            <View style={styles.modalView} >
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)} >
                  <AntDesign name='closecircle' size={20} style={styles.closeBtn} />
              </Pressable>
              {/* SECTION LIST */}
              <SectionList
                sections={data3}
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
  },

  bgimage: {
    width: '100%',
    height: '100%',
    flex: 1
  },

  searchBar: {
    backgroundColor: '#fff',
    width: wp('80%'),
    height: hp('5%'),
    marginTop:hp('10%'),
    marginHorizontal: wp('10%'),
    paddingLeft: wp('5%'),
    borderRadius: 40,
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
    marginTop: hp('3%'),
    marginHorizontal: wp('12%'),
  },

  txtTotal: {
    color: '#fff',
    fontSize: hp('2.3%'),
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationColor: '#32FFE6',
  },

  patientlist: {
    backgroundColor: '#fff',
    marginTop: hp('2%'),
    marginHorizontal: responsiveWidth(10),
    padding: 10,
    width: wp('80%'),
    height: hp('72%'),
    borderRadius: 20,
  },

  separator: {
    height: 1,
    width: '100%',
    backgroundColor:'#CCC',
  },

  listHeader: {
    // height: 50,
    // borderWidth: 1,
    marginTop: hp('1%'),
    // marginBottom: hp('-1%'),
    alignItems: 'center',
    // justifyContent: 'center',
  },

  listHeadline: {
    color: '#333',
    fontSize: hp('3.3%'),
    fontWeight: 'bold'
  },

  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    
  },

  avatarContainer: {
    // backgroundColor: '#D9D9D9',
    // borderRadius: 100,
    // borderWidth: 1,
    height: hp('10%'),
    width: wp('20%'),
    // paddingTop: 10,
    marginLeft: wp('1%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarContainer2: {
    // backgroundColor: '#D9D9D9',
    // borderRadius: 100,
    // borderWidth: 1,
    height: 50,
    width: 50,
    paddingTop: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    borderRadius: 100,
    height: hp('9%'),
    width: wp('16%'),
  },

  avatar2: {
    borderRadius: 100,
    height: 100,
    width: 100,
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

  
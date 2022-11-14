import { StyleSheet, ImageBackground, View, TextInput, Pressable, Alert, Text, StatusBar } from 'react-native';
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
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/patientrecbg.png')} style={styles.bgimage}>
        <View style={styles.searchBar}>
          <TextInput 
            style={styles.search}
            placeholder="Search"
          />
          <Pressable onPress={showAlert} ><EvilIcons name='search' style={styles.searchicon} /></Pressable>
        </View>

        <View style={styles.total}>
          <Text style={styles.txtTotal}>1702 Patients</Text>
        </View>

        <View style={styles.patientlist}>
        </View>
        
      </ImageBackground>
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
});
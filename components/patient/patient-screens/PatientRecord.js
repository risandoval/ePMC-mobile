import { StyleSheet, ImageBackground, View, Text, Image, ScrollView} from 'react-native';
import { responsiveHeight,  responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";

// const profile = require('../../../assets/')

export default function PatientRecord() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/patientrec.png')} style={styles.bgimage}>
          <View style={{marginBottom: responsiveHeight(8)}}>
            <ScrollView>
              <View style={styles.infoContainer}>
                <Text style={styles.header}>Personal Information</Text>
                {/* <Image source={require('../../../assets/david.jpg')} style={styles.profilepic}/> */}
                <Text style={{textAlign:'center', marginBottom:20}}>PATIENT NO: PMCPYC0001</Text>
                <Text style={styles.infotxt}>Name: Paul Yeshua Caabay</Text>
                <Text style={styles.infotxt}>Age: 21 years old</Text>
                <Text style={styles.infotxt}>Birthday: 2000-06-05</Text>
                <Text style={styles.infotxt}>Sex: Male</Text>
                <Text style={styles.infotxt}>Occupation: Programmer</Text>
                <Text style={styles.infotxt}>Address: Cavite, Philippines</Text>
              </View>

              <View style={[styles.infoContainer,styles.margintop]}>
                <Text style={styles.header}>Contact Information</Text>
                <Text style={styles.infotxt}>Cellphone #: 09176810006</Text>
                <Text style={styles.infotxt}>Telephone #: 5647384</Text>
                <Text style={styles.infotxt}>Email: paulyeshua@gmail.com</Text>
              </View>

              <View style={[styles.infoContainer,styles.margintop]}>
                <Text style={styles.header}>Contact Information</Text>
                <Text style={styles.infotxt}>Cellphone #: 09176810006</Text>
                <Text style={styles.infotxt}>Telephone #: 5647384</Text>
                <Text style={styles.infotxt}>Email: paulyeshua@gmail.com</Text>
              </View>
              <View style={[styles.infoContainer,styles.margintop]}>
                <Text style={styles.header}>Vital Signs</Text>
                <Text style={styles.infotxt}>Blood Type: AB+</Text>
                <Text style={styles.infotxt}>Height: 160</Text>
                <Text style={styles.infotxt}>Weight: 65</Text>
                <Text style={styles.infotxt}>Systolic: 100</Text>
                <Text style={styles.infotxt}>Diastolic: 80</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: responsiveWidth(90),
    marginTop: responsiveHeight(8),
    padding: responsiveHeight(2),
    borderRadius: 20,
  },

  margintop: {
    marginTop: responsiveHeight(2),
  },

  header: {
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveHeight(2),
  },

  profilepic: {
    width: responsiveWidth(30),
    height: responsiveHeight(20),
  },

  infotxt: {
    fontSize: responsiveFontSize(1.5),
    marginBottom: responsiveHeight(1),
  },
});
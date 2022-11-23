import { StyleSheet, ImageBackground, View, Text, ScrollView} from 'react-native';
import { responsiveHeight,  responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";


export default function PatientDashboard() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/dashboardbg.png')} style={styles.bgimage}>
        {/* Welcome Text */}
        <View style={styles.welcomeCont}>
          <Text style={styles.welcomeText}>WELCOME, </Text>
          <Text style={styles.welcomeName}>Paul Yeshua Caabay</Text>
        </View>

        {/* Next Consultation */}
        <View style={styles.nextConsultCont}>
          <Text style={styles.nextConsultText}><Text style={{fontWeight:"bold"}}>Next Consultation:</Text> {'November 23, 2022'}</Text>
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
    width: responsiveWidth(80),
    height: responsiveHeight(15),
    marginTop: responsiveHeight(30),
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
    width: responsiveWidth(80),
    height: responsiveHeight(35),
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
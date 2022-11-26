import { StyleSheet, View, Text, ScrollView, Linking, Pressable, TouchableOpacity} from 'react-native';
import {responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default function LoginPatient() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.terms}>Terms and Conditions</Text>
        <Text style={styles.content}>
          In order to protect your privacy, Pagtakhan Medical Center will keep all sensitive and 
          confidential information you may give the clinic securely and privately. {'\n'}{'\n'}

          Please read carefully the Data Privacy Policy to understand how your personal and health information are handled. 
          Click <Text onPress={() => Linking.openURL('http://google.com')} style={styles.textlink}>ePMC Data Privacy Policy</Text> 
          to read the Privacy Statement in full.
        </Text>

        <Text style={styles.contentLabel}>
          {'\n'}
          Acceptance of Agreement
        </Text>
        <Text style={styles.content}>
          You acknowledge that your use of the ePMC is subject to the terms and conditions indicated in this Terms of Use Agreement. 
          Without giving you a specific notice, we reserve the right to change this Agreement from time to time. Your continuous use of 
          ePMC will signify that you agree to any modifications, hence please examine the Agreement displayed on the website from 
          time to time.
        </Text>

        <Text style={styles.contentLabel}>
          {'\n'}
          Member Registration Activation Obligations
        </Text>
        <Text style={styles.content}>
          You hereby agree to give truthful, accurate, current, and complete information about yourself as prompted by the Registration 
          Process in consideration of your usage of ePMC. The assumption behind using the system is that the user is the legitimate 
          recipient and viewer of all information made available and accessible by the system.
        </Text>

        <Text style={styles.contentLabel}>
          {'\n'}
          Personal Information and Privacy
        </Text>
        <Text style={styles.content}>
          The ePMC Data Privacy Policy applies to any personal and medical information you give to ePMC. 
          By choosing to use the system, you are agreeing to the Policy's terms. You acknowledge that you 
          are accountable for all actions that take place in your ePMC account and that you will notify us right
          away if your account is used without your permission. You can do this by sending us a message 
          through this page. As a result of any unauthorized access to and/or use of your account, or for 
          any other reason, we disclaim all liability for any loss or damage you or any third party may sustain. 
        </Text>

        <Text style={styles.contentLabel}>
          {'\n'}
          Limitation of Liability
        </Text>
        <Text style={styles.content}>
          You agree that ePMC shall in no event be liable for any consequential, incidental, indirect, special, 
          punitive, or other loss or damages whatsoever arising out of or caused by your use of inability to use 
          the system, even if ePMC has been advised of the possibility of such damages. {'\n'}{'\n'}
        </Text>
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scroll:{
    marginHorizontal: responsiveWidth('5')
  },

  terms: {
    textAlign: 'center',
    marginTop: hp('5%'),
    marginBottom: hp('1%'),
    fontSize: hp('3%'),
    fontWeight: 'bold',
  },

  content: {
    // flex: 1,
    textAlign: 'justify',
    fontSize: hp('2%'),
  },

  textlink: {
    textDecorationLine: 'underline',
    textDecorationColor: 'blue'
  },

  contentLabel: {
    fontWeight: 'bold',
    fontSize: hp('2.5%'),
  },

  btnAgree: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#033d68',
    width: wp('35%'),
    height: hp('4.5%'),
    marginHorizontal: responsiveWidth('5'),
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
    padding: 7,
    
  },

  btnAgreetxt: {
    color: '#fff',
    fontSize: hp('2.2%'),
  },

  button:{
    flex: 1,
    backgroundColor: '#136AC7',
    borderRadius: 5,
    padding: 10
},

  buttonDisabled:{
    flex: 1,
    backgroundColor: '#999',
    borderRadius: 5,
    padding: 10
  },
});
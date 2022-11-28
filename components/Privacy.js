import { StyleSheet, View, Text, ScrollView, Linking, Pressable, TouchableOpacity} from 'react-native';
import {responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default function Privacy() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.terms}>Data Privacy Policy</Text>
        <Text style={styles.content}>
            The Data Protection Policy applies to the medical records of the patients held by Pagtakhan Medical Clinic 
            {' (PMC)'}, which is protected by the Data Privacy Act of 2012. This Privacy Notice has been written to 
            explain what and how we collect, use, and store, who we may share your information with, and how we 
            protect your data.
        </Text>

        <Text style={styles.contentLabel}>
          {'\n'}I. What personal data are collected from you?
        </Text>
        <Text style={styles.content}>
            The personal and health information that is collected from you or from an authorized 
            representative are the following:
            {'\n'}
        </Text>
            <Text style={[styles.content, {marginLeft: wp('5%')}]}>
                    a. General Information is divided into three sections namely:
            </Text>
                <Text style={[styles.content, {marginLeft: wp('10%')}]}>
                    {'\u2022'} Personal Information such as name, age, birthday, sex, occupation, and address;
                </Text>
                <Text style={[styles.content, {marginLeft: wp('10%')}]}>
                    {'\u2022'} Contact Information such as cellphone and telephone number, and email address;
                </Text>
                <Text style={[styles.content, {marginLeft: wp('10%')}]}>
                    {'\u2022'} Emergency Contact such as the name of the contact person, relationship, and email address; and
                </Text>
                <Text style={[styles.content, {marginLeft: wp('10%')}]}>
                    {'\u2022'} Vital Signs such as your blood type, pulse rate, height, weight, systolic, and diastolic.
                </Text>
            <Text style={[styles.content, {marginLeft: wp('5%')}]}>
                    b. Health or medical information such as diagnostic results, treatment plan, objectives, symptoms, laboratory results, prescription.
            </Text>
        
        <Text style={styles.contentLabel}>
            {'\n'}II. Who are the authorized persons that can access and manages your data?
        </Text>
        <Text style={styles.content}>
            The employees of the PMC may access and manage your personal and health information based on the 
            Data Privacy Act of 2012 wherein everything including the general information, diagnosis, treatment 
            plan, and other information should be between the physician and patient only. The system 
            administrators of this system are considered to be the general manager and secretaries can only 
            retrieve the medical record of the patient but should not be allowed to view or make any alterations 
            to the patients' records except for their general information only.
        </Text>

        <Text style={styles.contentLabel}>
            {'\n'}III. How and when do we collect your data?
        </Text>
        <Text style={styles.content}>
            If you are a new patient of PMC, you may register your general information through the website 
            or mobile application. Upon consultation at the clinic, the system administrators may confirm 
            your registration, and you will then have a patient record. {'\n'} {'\n'}
            
            If you are an old patient of PMC and already have a handwritten medical record, authorized 
            personnel may manually add your medical record into the system or import it through the 
            Optical Character Recognition tool. {'\n'} {'\n'}

            The electronic medical records are then stored in the system's database and cannot be viewed 
            and accessed by an unauthorized user.
        </Text>

        <Text style={styles.contentLabel}>
            {'\n'}IV. How we may use your data
        </Text>
        <Text style={styles.content}>
            As your healthcare provider, we are allowed by law to use and disclose certain aspects of your 
            personal health information without requesting your agreement or written consent. Your private 
            health and medical data may be used and disclosed for, but not restricted to, the following 
            purposes:
            {'\n'}
        </Text>
            <Text style={[styles.content, {marginLeft: wp('5%')}]}>
                a. Medical physicians, nurses, and other healthcare professionals involved in your care 
                    may be given access to personal health information. {'\n'}
            </Text>
            <Text style={[styles.content, {marginLeft: wp('5%')}]}>
                b. We can share your personal health information with your legitimate authorized personal 
                representative. A parent or legal guardian of a minor, for instance, is regarded as the 
                personal representative. {'\n'}
            </Text>
            <Text style={[styles.content, {marginLeft: wp('5%')}]}>
                c. To carry out public health advisories, activities, and investigations, we may disclose your 
                personal health information to public health officials. We may also disclose your personal 
                health information to our government agencies for health oversight activities and investigations, 
                such as preventing or controlling infections and diseases. {'\n'}
            </Text>
            <Text style={[styles.content, {marginLeft: wp('5%')}]}>
                d. When obliged to do so by law and/or government authorities, such as during legal proceedings 
                or in response to a subpoena from a court of law, we may release your personal health information. 
                {'\n'}
            </Text>
        <Text style={styles.content}>
            Your personal information, including health and medical records, are not sold by us to marketing 
            firms outside of our organization.
            {'\n'}
        </Text>
        <Text style={styles.content}>
            We only use your personal information for purposes for which we have told you about or communicated 
            with you. Additional data protection procedures will be applied, if needed by law, if we use it for 
            other {'(closely linked)'} purposes.
            {'\n'}
        </Text>

        <Text style={styles.contentLabel}>
            V. How is your personal data stored?
        </Text>
        <Text style={styles.content}>
            The policy applies to all the employees of PMC namely the physicians, general manager, secretaries, 
            and nurses insofar as the measures under the policy relate to them. Data will be stored securely so 
            that confidential information is protected in compliance with relevant legislation. This policy 
            sets out the manner in which personal data and special categories of personal data will be protected 
            by the clinic.
            {'\n'}
        </Text>

        <Text style={styles.contentLabel}>
            VI. What are your rights?
        </Text>
        <Text style={styles.content}>
            We understand and value highly our duty to guard the personal information you provide to us against 
            theft, unauthorized access, and misuse. The rights you have in relation to personal health information 
            are listed below:
            {'\n'}
        </Text>
            <Text style={[styles.content, {marginLeft: wp('5%')}]}>
                a. Access to your Personal Health Information {'\n'}
                b. Limit and prevent disclosure {'\n'}
                c. Amend personal health information {'\n'}
                d. Authorize other uses {'\n'} 
                e. Receive notice of privacy breach {'\n'}
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
    color: '#033d68',
  },

  contentLabel: {
    fontStyle: 'italic',
    fontSize: hp('2.2%'),
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
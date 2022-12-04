import React, { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { StyleSheet, ImageBackground, View, Text, Image, Pressable, Alert, TextInput } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function Profile({navigation}) {
    const [shouldShow, setShouldShow] = useState(true);
    const [val, setValue] = useState([]);
    const [pass, setPass] = useState('');
    const [bday, setBday] = useState("");
    const [contactNum, setContactNum] = useState("");
    const [contactNumError, setContactNumError] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [currentPasswordError, setCurrentPasswordError] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordError, setNewPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    var showPass = pass;
    let passGetLength = showPass.length;
    let passLength = passGetLength;
    let hidePass = "";
    
    if (passLength == passGetLength) {
        let passBullet = "*".repeat(passLength);
        hidePass = passBullet;
    }

    const prof = async() => {
        const fet = await SecureStore.getItemAsync('data');
        const fetc = await SecureStore.getItemAsync('editprof');
        const editprofdata = JSON.parse(fetc);
        const editprofdat = JSON.parse(fet);
        setValue(editprofdata)
        setPass(editprofdat.pass)
      }

      useEffect(() => {
        prof();
      }, []);
    
    const update = async() => {

        //password validation
        var passwordValid = false;
        if(newPassword == "") {
        setNewPasswordError("Password is required");
        }
        else if(newPassword.length < 8) {
        setNewPasswordError("Password must be at least 8 characters");
        }
        else {
        setNewPasswordError("");
        }

        //confirm password validation
        var confirmPasswordValid = false;
        if(confirmPassword == "") {
        setConfirmPasswordError("Confirm password is required");
        }
        else if(confirmPassword != password) {
        setConfirmPasswordError("Passwords do not match");
        }
        else {
        setConfirmPasswordError("");
        confirmPasswordValid = true;
        passwordValid = true;
        }

        var editprofilepath = "http://192.168.1.5:80/epmc-4/editprofile_mobile";
        // var editprofilepath = "http://192.168.2.115:80/epmc-4/editprofile_mobile";
        // var editprofilepath = "http://e-pmc.com/editprofile_mobile";

        var data = {
            bday: bday,
            contactNum: contactNum,
            email: email,
            pass: pass,
            newpass: newPassword,
          };

          try {
            //post request
            await fetch(editprofilepath, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json;charset=UTF-8',
                'X-API-KEY':'myapi',
                'Authorization':'Basic YWRtaW46YWRtaW4xMjM='
              },
              body: JSON.stringify(data),
            })
            .then((response)=>response.json())
            .then((response)=>{
              if(response) {
                Alert.alert("Success", "You have successfully updated your profile.");
                navigation.navigate('Profile');
              }
            })
          }
          catch(error) {
            console.log(error);
          }
    }
    

    return (
        <View style={[styles.container, styles.responsiveBox]}>
                <ImageBackground source={require('../assets/profile1.png')} style={styles.bgimage}>
                    <View>
                        <View style={styles.row}>
                            <View style={styles.profilecont}>
                                {val.map(_prof=><Image style={styles.profileimg} key={""}source={{uri:_prof.avatar}}/>)}
                            </View>

                            <View style={styles.namebox}>
                                {val.map(_prof=><Text style={styles.profilename} key={""}>{_prof.full_name}</Text>)}
                            </View>
                        </View>
                    </View>

                    <Pressable  style={styles.changePicBox}>
                        <Text style={styles.changetxt}>Change Photo</Text>
                    </Pressable>
                
                    <View style={styles.profileinfo}>
                        <View style={styles.rowProfile}>
                            <Text style={[styles.profilelabel]}>{'Username: '} </Text>
                            {val.map(_prof=><Text style={styles.profiletext} key={""}>{_prof.username}</Text>)}
                        </View>
                        {/* <View style={styles.rowProfile}>
                            <Text style={[styles.profilelabel]}>{'Password: '} </Text>
                            <Text style={[styles.profiletext, styles.row]}> 
                            
                                {shouldShow ? (showPass) : (hidePass)}
                                <Pressable onPress={() => setShouldShow(!shouldShow)}><Text style={styles.passBtn}>  Show/Hide</Text></Pressable>
                                {' '}
                            </Text>
                        </View> */}
                        <View style={styles.rowProfile}>
                            <Text style={[styles.profilelabel]}>{'Birthday:    '} </Text>
                            {val.map(_prof=>
                                <TextInput 
                                    style={styles.profiletext2}
                                    placeholder={'e.g. ' + _prof.bday}
                                    onChangeText={(text) => setBday(text)}
                                    value={bday} 
                                    key={""}>
                                </TextInput>)}
                        </View>
                        <View style={styles.rowProfile}>
                            <Text style={[styles.profilelabel]}>{'Contact:     '} </Text>
                            {val.map(_prof=>
                                <TextInput 
                                    style={styles.profiletext2}
                                    placeholder={'e.g. ' + _prof.contact_no}
                                    onChangeText={(text) => setContactNum(text)}
                                    value={contactNum} 
                                    key={""}>
                                </TextInput>)}
                        </View>
                        <View style={styles.rowProfile}>
                            <Text style={[styles.profilelabel]}>{'Email:         '} </Text>
                            {val.map(_prof=><Text style={styles.profiletext} key={""}>{_prof.email}</Text>)}
                        </View>
                        <View style={styles.rowProfile}>
                            <Text style={[styles.profilelabel]}>{'Current\nPassword: '} </Text>
                            <TextInput 
                                style={styles.profiletext2} 
                                secureTextEntry={true}
                                onChangeText={(text) => setCurrentPassword(text)}
                                value={currentPassword}>
                            </TextInput>
                        </View>
                        <View style={styles.rowProfile}>
                            <Text style={[styles.profilelabel]}>{'New\nPassword: '} </Text>
                            <TextInput 
                                style={styles.profiletext2} 
                                secureTextEntry={true}
                                onChangeText={(text) => setNewPassword(text)}
                                value={newPassword}>
                            </TextInput>
                        </View>
                        <Text style={styles.errorMsg}>{newPasswordError}</Text>
                        <View style={styles.rowProfile}>
                            <Text style={[styles.profilelabel]}>{'Confirm\nPassword: '} </Text>
                            <TextInput 
                                style={styles.profiletext2} 
                                secureTextEntry={true}
                                onChangeText={(text) => setConfirmPassword(text)}
                                value={confirmPassword}>
                            </TextInput>
                        </View>
                        <Text style={styles.errorMsg}>{confirmPasswordError}</Text>
                        
                    </View>

                    <View style={[styles.row, styles.btnRow]}>
                        <Pressable  style={styles.logoutbox}>
                            <Text style={styles.logouttxt}>SAVE</Text>
                        </Pressable>

                        <Pressable onPress={() => navigation.navigate('Profile')} style={styles.logoutbox}>
                            <Text style={styles.logouttxt}>CANCEL</Text>
                        </Pressable>
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

    logo: {
        width: wp('10%'),
    },

    row: {
        flexDirection: 'row',
    },

    profilecont: {
        marginTop: hp('16%'),
        marginLeft: wp('6%'),
        borderRadius: 500,
        // elevation: 10,
        // borderWidth: 2,
    },

    profileimg: {
        width: wp('40%'),
        height: hp('18%'),
        resizeMode: 'contain',
        borderRadius: 500,
        borderWidth: 1,
    },
    
    namebox: {
        width: wp('45%'),
        height: hp('10%'),
        marginTop: hp('27%'),
        marginLeft: wp('3.5%'),
        // padding: responsiveWidth(1),
        alignItems: 'center',
        // justifyContent: 'center',
        // borderWidth: 1,
        
    },
    
    profilename: {
        fontSize: hp('2.1%'),
        fontWeight: 'bold',
    },

    btnRow: {
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        width: wp('85%'),
        marginTop: hp('-3%'),
        // borderWidth: 1,
    },

    logoutbox: {
        backgroundColor: '#49bccf',
        width: wp('25%'),
        height: hp('4%'),
        padding: responsiveWidth(1.5),
        marginTop: hp('5%'),
        // marginLeft: responsiveWidth(61),
        borderRadius: 15,
    },

    changePicBox: {
        backgroundColor: '#49bccf',
        width: wp('22%'),
        height: hp('3.1%'),
        padding: responsiveWidth(1.5),
        marginTop: hp('-2%'),
        marginLeft: wp('15%'),
        // marginLeft: responsiveWidth(61),
        borderRadius: 15,
    },

    logouttxt: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
    },

    changetxt: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
    },

    profileinfo: {
        backgroundColor: '#fff',
        marginTop: hp('2%'),
        marginHorizontal: wp('7.5%'),
        padding: wp('5%'),
        paddingTop: hp('1%'),
        width: wp('85%'),
        height: hp('48%'),
        borderRadius: 15,
        // elevation: 5,
    },

    rowProfile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: hp('-1.5%'),
    },

    profilelabel: {
        color: '#656565',
        fontSize: responsiveFontSize(2),
        textAlign: 'left',
        padding: responsiveWidth(5),
        paddingLeft: responsiveWidth(0),
        paddingRight: responsiveWidth(0),
        
    },

    profiletext: {
        fontSize: responsiveFontSize(1.5),
        borderWidth: 1,
        borderColor: 'gray',
        width: responsiveWidth(50),
        textAlign: 'right',
        padding: responsiveWidth(2),
        paddingLeft: responsiveWidth(0),
        paddingRight: responsiveWidth(2),
        borderRadius: 10,
        color: 'gray'
    },

    profiletext2: {
        fontSize: responsiveFontSize(1.5),
        borderWidth: 2,
        width: responsiveWidth(50),
        textAlign: 'right',
        padding: responsiveWidth(2),
        paddingLeft: responsiveWidth(0),
        paddingRight: responsiveWidth(2),
        borderRadius: 10,
        color: '#000'
    },

    passBtn: {
        marginBottom: responsiveHeight(-0.3),
        borderLeftWidth: 1,
    },
    errorMsg: {
        color: '#EB144C',
        marginHorizontal: wp('10%'),
        marginTop: hp('-0.8%'),
        fontSize: hp('1.2%'),
        // marginBottom: hp('1%'),
      },
    

    
});
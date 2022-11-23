import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, ImageBackground, View, Text, Image, Pressable, Alert } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

const logout = async(navigation) =>  {
    Alert.alert(
        "Are you sure you want to logout?",
        "You can come back anytime!", [
            {text: "Logout", onPress: async() => {await AsyncStorage.clear();
                                                  navigation.reset({
                                                    index: 0,
                                                    routes: [{ name: "Login" }],
                                                  });
        }}, 
            {text: "Cancel"},    
        ],
    );
    console.log("logout")
}



export default function Profile({navigation}) {
    const [shouldShow, setShouldShow] = useState(true);
    const [val, setValue] = useState([]);
    const [pass, setPass] = useState([]);
    var showPass = pass;
    let passGetLength = showPass.length;
    let passLength = passGetLength;
    let hidePass = "";
    
    if (passLength == passGetLength) {
        let passBullet = "*".repeat(passLength);
        hidePass = passBullet;
    }
    const prof = async() => {
        try {
          const data1 = await AsyncStorage.getItem('admin');
          const data2 = await AsyncStorage.getItem('doctor');
          const data3 = await AsyncStorage.getItem('patient');
          const adm = JSON.parse(data1);
          const doc = JSON.parse(data2);
          const pat = JSON.parse(data3);
          // const datata = JSON.parse(getdata);
          // const email = await AsyncStorage.getItem('email');
          if (adm !== null || doc !== null || pat !== null) {
            if (adm !== null) {
                setValue(adm)
                setPass(adm[0].pass)
            }
            else if (doc !== null) {
                setValue(doc);
                setPass(doc[0].pass)
            }
            else if (pat !== null) {
                setValue(pat);
                setPass(pat[0].pass)
            } 
          }
        } catch (e) {
          alert('Failed to fetch the input from storage');
        }
        
      }

      useEffect(() => {
        prof();
      }, []);
    

    return (
        <View style={[styles.container, styles.responsiveBox]}>
                <ImageBackground source={require('../assets/profilebg.png')} style={styles.bgimage}>
                    <View>
                        <View style={styles.row}>
                            <View style={styles.profilecont}>
                                {val.map(_prof=><Image style={styles.profileimg} key={""}source={{uri:_prof.avatar}}/>)}
                            </View>

                            <View style={styles.namebox}>
                                {val.map(_prof=><Text style={styles.profilename} key={""}>{_prof.full_name}</Text>)}
                            </View>
                        </View>
                        <Pressable onPress={() => logout(navigation)} style={styles.logoutbox}>
                            <Text style={styles.logouttxt}>Logout</Text>
                        </Pressable>
                    </View>
                
                    <View style={styles.profileinfo}>
                        <View style={styles.rowProfile}>
                            <Text style={[styles.profilelabel]}>{'Username: '} </Text>
                            {val.map(_prof=><Text style={styles.profiletext} key={""}>{_prof.username}</Text>)}
                        </View>
                        <View style={styles.rowProfile}>
                            <Text style={[styles.profilelabel]}>{'Password: '} </Text>
                            <Text style={[styles.profiletext, styles.row]}> 
                            
                                {shouldShow ? (showPass) : (hidePass)}
                                <Pressable onPress={() => setShouldShow(!shouldShow)}><Text style={styles.passBtn}>  Show/Hide</Text></Pressable>
                                {' '}
                            </Text>
                        </View>
                        <View style={styles.rowProfile}>
                            <Text style={[styles.profilelabel]}>{'Birthday:    '} </Text>
                            {val.map(_prof=><Text style={styles.profiletext} key={""}>{_prof.bday}</Text>)}
                        </View>
                        <View style={styles.rowProfile}>
                            <Text style={[styles.profilelabel]}>{'Contact:     '} </Text>
                            {val.map(_prof=><Text style={styles.profiletext} key={""}>{_prof.contact_no}</Text>)}
                        </View>
                        <View style={styles.rowProfile}>
                            <Text style={[styles.profilelabel]}>{'Email:         '} </Text>
                            {val.map(_prof=><Text style={styles.profiletext} key={""}>{_prof.email}</Text>)}
                        </View>
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

    row: {
        flexDirection: 'row',
    },

    profilecont: {
        width: responsiveWidth(45),
        height: responsiveHeight(25),
        marginTop: responsiveHeight(3),
        marginLeft: responsiveWidth(6),
        borderRadius: 500,
        elevation: 30,
    },

    profileimg: {
        width: responsiveWidth(45),
        height: responsiveHeight(25),
        resizeMode: 'contain',
        borderRadius: 500,
    },
    
    namebox: {
        width: responsiveWidth(45),
        height: responsiveHeight(16),
        padding: responsiveWidth(1),
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        
    },
    
    profilename: {
        fontSize: 25,
        fontWeight: 'bold',
    },

    logoutbox: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#49bccf',
        width: responsiveWidth(21),
        padding: responsiveWidth(1.5),
        marginTop: responsiveWidth(-18),
        marginLeft: responsiveWidth(61),
        borderRadius: 15,
    },

    logouttxt: {
        fontSize: 16,
        color: '#fff',
    },

    profileinfo: {
        backgroundColor: '#fff',
        marginTop: responsiveHeight(8),
        marginHorizontal: responsiveWidth(10),
        padding: responsiveWidth(5),
        paddingTop: responsiveHeight(2),
        width: responsiveWidth(80),
        height: responsiveHeight(57),
        borderRadius: 15,
        elevation: 5,
    },

    rowProfile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
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
        width: responsiveWidth(50),
        textAlign: 'right',
        padding: responsiveWidth(2),
        paddingLeft: responsiveWidth(0),
        paddingRight: responsiveWidth(2),
        borderRadius: 10,
    },

    passBtn: {
        marginBottom: responsiveHeight(-0.3),
        borderLeftWidth: 1,
    },

    
});
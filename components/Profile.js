import React, { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { StyleSheet, ImageBackground, View, Text, Image, Pressable, Alert } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const logout = async(navigation) =>  {
    Alert.alert(
        "Are you sure you want to logout?",
        "You can come back anytime!", [
            {text: "Logout", onPress: async() => {await SecureStore.deleteItemAsync('data');
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
    
    const headers = {
        'Accept': 'application/json',
        'Content-Type' : 'application/json;charset=UTF-8',
        'X-API-KEY':'myapi',
        'Authorization':'Basic YWRtaW46YWRtaW4xMjM='   
    }

    const prof = async() => {
        const fet = await SecureStore.getItemAsync('data');
        const profiledata = JSON.parse(fet);

        var profilepath = "http://192.168.2.115:80/epmc-4/profile_mobile";
        // var profilepath = "http://192.168.1.5:80/epmc-4/profile_mobile";
        // var profilepath = "http://e-pmc.com/adm_dashboard_total";

        var data ={
            email: profiledata.email,
            pass: profiledata.pass
        };

        await fetch(profilepath,{
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
          })  
          .then((response)=>response.json())
          .then((response)=>{
            (async function() {
              if (response[0] !== null) {
                await SecureStore.setItemAsync('editprof',JSON.stringify(response));
                setValue(response)
              } else {
                alert("Failed to fetch");
              }
            })();
          })
          .catch((error)=>{
            console.error("ERROR FOUND " + error);
          })
    }
    useEffect(()=>{
        prof();
        const dataInterval = setInterval(() => prof(), 5 * 1000);
        return () => clearInterval(dataInterval);
    },[]);

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

                    <View style={[styles.row, styles.btnRow]}>
                        <Pressable onPress={() => navigation.navigate('EditProfile')} style={styles.logoutbox}>
                            <Text style={styles.logouttxt}>EDIT</Text>
                        </Pressable>

                        <Pressable onPress={() => logout(navigation)} style={styles.logoutbox}>
                            <Text style={styles.logouttxt}>LOGOUT</Text>
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
        // borderRadius: 500,
        // elevation: 10,
        // borderWidth: 2,
    },

    profileimg: {
        width: wp('40%'),
        height: hp('18%'),
        resizeMode: 'contain',
        borderRadius: 200,
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
        marginTop: hp('-1%'),
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

    logouttxt: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
    },

    profileinfo: {
        backgroundColor: '#fff',
        marginTop: hp('3%'),
        marginHorizontal: wp('7.5%'),
        padding: wp('5%'),
        paddingTop: hp('1%'),
        width: wp('85%'),
        height: hp('30%'),
        borderRadius: 15,
        // elevation: 5,
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
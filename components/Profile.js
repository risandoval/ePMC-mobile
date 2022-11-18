import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, ImageBackground, View, Text, Image, StatusBar, Pressable, Alert } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

  
const logout = async(navigation) =>  {
    AsyncStorage.setItem('role', "");
    AsyncStorage.setItem('email', "");
    Alert.alert(
        "Are you sure you want to logout?",
        "You can come back anytime!", [
            {text: "Logout", onPress: () => navigation.navigate('Login')}, 
            {text: "Cancel"},    
        ],
    );
    console.log("logout")
}

export default function Profile({navigation}) {
    return (
        <View style={[styles.container, styles.responsiveBox]}>
                <ImageBackground source={require('../assets/profilebg.png')} style={styles.bgimage}>
                    <View>
                        <View style={styles.row}>
                            <View style={styles.profilecont}>
                                <Image
                                style={styles.profileimg}
                                source={require('../assets/david.jpg')}
                                />
                            </View>

                            <View style={styles.namebox}>
                                <Text style={styles.profilename}>David Sandoval</Text>
                            </View>
                        </View>
                        <Pressable onPress={() => logout(navigation)} style={styles.logoutbox}>
                            <Text style={styles.logouttxt}>Logout</Text>
                        </Pressable>
                    </View>
                    
                    

                    <View style={styles.profileinfo}>
                        <View style={styles.rowProfile}>
                            <Text style={[styles.profilelabel]}>{'Username: '} </Text>
                            <Text style={[styles.profiletext]}>{'PMCDS0001'} </Text>
                        </View>
                        <View style={styles.rowProfile}>
                            <Text style={[styles.profilelabel]}>{'Password: '} </Text>
                            <Text style={[styles.profiletext]}>{'PMCDS0001'} 
                            </Text>
                        </View>
                        <View style={styles.rowProfile}>
                            <Text style={[styles.profilelabel]}>{'Birthday:    '} </Text>
                            <Text style={[styles.profiletext]}>{'2000-07-25'} </Text>
                        </View>
                        <View style={styles.rowProfile}>
                            <Text style={[styles.profilelabel]}>{'Contact:     '} </Text>
                            <Text style={[styles.profiletext]}>{'09123456789'} </Text>
                        </View>
                        <View style={styles.rowProfile}>
                            <Text style={[styles.profilelabel]}>{'Email:         '} </Text>
                            <Text style={[styles.profiletext]}>{'email@gmail.com'} </Text>
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
        paddingTop: StatusBar.currentHeight,
        // alignItems: 'center',
        // justifyContent: 'center',
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
        // elevation: 15,
        // borderWidth: 1,
    },

    logouttxt: {
        fontSize: 16,
        color: '#fff',
    },

    profileinfo: {
        backgroundColor: '#fff',
        // alignItems: 'center',
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
        // borderWidth: 1,
        color: '#656565',
        fontSize: responsiveFontSize(2),
        textAlign: 'left',
        // paddingBottom: responsiveHeight(1),
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
        // width: responsiveWidth(10),
        // fontSize: responsiveFontSize(2.5),
        marginBottom: responsiveHeight(-0.9),
    },

    
});
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, ImageBackground, View, Text, Image, StatusBar, Pressable, Alert } from 'react-native';
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
                    <Text style={[styles.profiletext, styles.profilelabel]}>{'Age: '}{'21'} </Text>
                    <Text style={[styles.profiletext, styles.profilelabel]}>{'Birthday: '}{'July 25, 2000'} </Text>
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

    profiletext: {
        fontSize: responsiveFontSize(1.8),
    },

    profilelabel: {
        // alignItems: 'flex-start',
        // borderWidth: 1,
        textAlign: 'left',
        paddingBottom: responsiveHeight(1),
    },

    
});
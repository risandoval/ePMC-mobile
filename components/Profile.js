import { StyleSheet, ImageBackground, View, Text, Image} from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/profilebg.png')} style={styles.bgimage}>
        <View>
            <Image
            style={styles.profileimg}
            source={require('../assets/david.jpg')}
            />
        </View>

        <View style={styles.namebox}>
            <Text style={styles.profilename}>David Sandoval</Text>
        </View>

        

        <View style={styles.profileinfo}>
            {/* <Text style={[styles.profiletext, styles.profilelabel]}>{'Age: '}{'21'} </Text>
            <Text style={[styles.profiletext, styles.profilelabel]}>{'Birthday: '}{'July 25, 2000'} </Text> */}
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
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    profileimg: {
        width: 200,
        height: 200,
        position: 'absolute',
        top: 50,
        left: 40,
        borderRadius: 100,
    },
    
    namebox: {
        position: 'absolute',
        top: 30,
        right: 25,
        backgroundColor: '#fff',
        width: 250,
        height: 130,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // textAlign: 'center',
        // marginLeft: 200,
        // borderWidth: 1,
        
    },
    
    profilename: {
        fontSize: 25,
        fontWeight: 'bold',
    },

    profileinfo: {
        backgroundColor: '#fff',
        // alignItems: 'center',
        // alignItems: 'flex-start',
        marginTop: 270,
        marginHorizontal: 50,
        padding: 25,
        paddingTop: 30,
        width: '80%',
        height: 590,
        borderRadius: 15,
        elevation: 5,
    },

    profiletext: {
        fontSize: 20,
    },

    profilelabel: {
        // alignItems: 'flex-start',
        // borderWidth: 1,
        textAlign: 'left',
        paddingBottom: 20
    },

    
});
import { StyleSheet, ImageBackground, View, TextInput, Pressable, Alert, Text } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const showAlert = () =>
  Alert.alert(
    "Search",
    "Search Button Working",
  );

export default function AdminPatientRec() {
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/patientrecbg.png')} style={styles.bgimage}>
        <View style={styles.searchBar}>
          <TextInput 
            style={styles.search}
            placeholder="Search"
          />
          <Pressable onPress={showAlert} ><EvilIcons name='search' style={styles.searchicon} /></Pressable>
        </View>

        <View style={styles.total}>
          <Text style={styles.txtTotal}>1702 Patients</Text>

        </View>

        <View style={styles.patientlist}>
        </View>
        
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bgimage: {
    width: '100%',
    height: '100%',
    flex: 1
  },

  searchBar: {
    backgroundColor: '#fff',
    width: '80%',
    height: 50,
    marginVertical: 80,
    marginHorizontal: 50,
    paddingLeft: 20,
    borderRadius: 50,
    elevation: 5,
    flexDirection: 'row',
  },

  search: {
    flex: 1
  },

  searchicon: {
    paddingTop: 11,
    paddingRight: 15,
    fontSize: 30,
  },

  total: {
    marginTop: -60,
    marginLeft: 50,
    marginRight: 391,
    borderBottomWidth: 3,
    borderColor: '#32FFE6',
  },

  txtTotal: {
    paddingBottom: 5,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },

  patientlist: {
    // flex: 1,
    backgroundColor: '#fff',
    marginVertical: 25,
    marginHorizontal: 50,
    width: '80%',
    height: 650,
    borderRadius: 20,
  },
});
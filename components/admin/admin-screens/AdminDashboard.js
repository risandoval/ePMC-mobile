import * as React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather'

const DATA = [
  { id: '1', title: 'Added a new patient record' },
  { id: '2', title: 'Edited a patient record' },
  { id: '3', title: 'Imported a patient record' },
  { id: '4', title: 'Moved a patient record to archive' },
  { id: '5', title: 'Restored a patient record from archive' },
  { id: '6', title: 'Added a new inventory item' },
  { id: '7', title: 'Edited a schedule' },
  { id: '8', title: 'Added a new schedule' },
  { id: '9', title: 'Edited an inventory item' },
  { id: '10', title: 'Deleted an inventory item' },
]

const Item = ({ title }) => (
  <View style={styles.recentInnerBox}>
    <Text style={styles.recentData}>{title}</Text>
  </View>
);

export default function AdminDashboard() {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/dashboardbg.png')} style={styles.bgimage}>
        <View style={[styles.box, styles.box1]}>
          <FontAwesome name="clipboard-list" style={[styles.icon, styles.iconMargin]} />
          <Text style={[styles.txtTotal, styles.txtTotal1]}>Total No. of Patient Records</Text>
          <Text style={[styles.txtNum, styles.txtNum1]}>100</Text>
        </View>

        <View style={[styles.box, styles.box2]}>
          <MaterialIcons name="inventory" style={styles.icon} />
          <Text style={styles.txtTotal}>Total No. of Inventory Items</Text>
          <Text style={styles.txtNum}>43</Text>
        </View>

        <View style={[styles.box, styles.box3]}>
          <Feather name="user" style={styles.icon} />
          <Text style={styles.txtTotal}>Total No. of User Accounts</Text>
          <Text style={styles.txtNum}>10</Text>
        </View>

        <View style={[styles.box, styles.box4]}>
          <FontAwesome name="clipboard-list" style={[styles.icon, styles.iconMargin]} />
          <Text style={[styles.txtTotal, styles.txtTotal1]}>Total No. of Patients Today</Text>
          <Text style={styles.txtNum}>34</Text>
        </View>
      
        <Text style={styles.txtRecent}>Recent Activity</Text>
        
        <View style={styles.recentOuterBox}>
          <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  bgimage: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },

  container: {
    backgroundColor: '#F4F4F4',
    flex: 1,
  },
  
  icon: {
    marginTop: 16,
    color: "black",
    fontSize: 60,
  },

  iconMargin: {
    marginTop: 10,
    marginLeft: 5,
  },

  box: {
    width: '35%',
    height: 110,
    borderRadius: 20,
    padding: 10,
    paddingLeft: 10,
    paddingRight: 70,
    marginTop: 30,
    flexDirection: 'row'
  },

  box1: {
    backgroundColor: '#92CEFA',
    marginTop: 80,
  },

  box2: {
    backgroundColor: '#FAD692',
    marginTop: 80
  },

  box3: {
    backgroundColor: '#FA9292',
  },

  box4: {
    backgroundColor: '#92FAA3',
  },

  txtTotal: {
    fontSize: 12,
    marginTop: 20,
    marginLeft: 4,
  },

  txtTotal1: {
    marginLeft: 11,
  },

  txtNum: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    position: 'absolute',
    left: 75,
    top: 10,
  },

  txtNum1: {
    position: 'absolute',
    left: 70,
  },

  txtRecent: {
    position: 'absolute',
    top: 380,
    fontSize: 40,
    color: "#000",
    lineHeight: 84,
    fontWeight: "bold",
  },

  recentOuterBox: {
    marginTop: 110,
    marginBottom: 20,
    paddingTop: 20,
    paddingBottom: 20,
    width: '85%',
    height: 450,
  },

  recentInnerBox: {
    backgroundColor: '#fff',
    height: 60,
    padding: 20,
    paddingLeft: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 1
  },

  recentData: {
    fontSize: 15,
  }
})
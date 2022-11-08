import * as React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';
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
      {/* <ScrollView> */}
        <View style={[styles.box, styles.box1]}>
          <FontAwesome name="clipboard-list" style={styles.icon} />
          <Text style={styles.txtTotal}>Total No. of Patient Records</Text>
          <Text style={styles.txtNum}>100</Text>
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
          <MaterialIcons name="inventory" style={styles.icon} />
          <Text style={styles.txtTotal}>Total No. of Patients Today</Text>
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
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  
  icon: {
    marginBottom: 5,
    color: "black",
    fontSize: 40,
  },

  box: {
    width: '35%',
    height: 110,
    borderRadius: 20,
    padding: 10,
    paddingLeft: 20,
    marginTop: 30,
  },

  box1: {
    backgroundColor: '#92CEFA',
    marginTop: 80
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
    fontSize: 12
  },

  txtNum: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  txtRecent: {
    position: 'absolute',
    bottom: 430,
    fontSize: 40,
    color: "#000",
    lineHeight: 84,
    fontWeight: "bold",
  },

  recentOuterBox: {
    marginTop: 120,
    marginBottom: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    color: "#000",
    width: '80%',
    height: 400,
    borderRadius: 20,
    elevation: 3
  },

  recentInnerBox: {
    backgroundColor: '#CDCDCD',
    padding: 10,
    paddingLeft: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },

  recentData: {
    fontSize: 15,
  }

})
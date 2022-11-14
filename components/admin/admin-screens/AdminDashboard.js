import * as React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView, ImageBackground, StatusBar } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

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
          <View>
            <Text style={[styles.txtTotal, styles.txtTotal1]}>Total No. of Patient Records</Text>
            <Text style={styles.txtNum}>100</Text>
          </View>
        </View>

        <View style={[styles.box, styles.box2]}>
          <MaterialIcons name="inventory" style={styles.icon} />
          <View>
            <Text style={styles.txtTotal}>Total No. of Inventory Items</Text>
            <Text style={[styles.txtNum, styles.txtNum1]}>127</Text>
          </View>
        </View>

        <View style={[styles.box, styles.box3]}>
          <Feather name="user" style={styles.icon} />
          <View>
            <Text style={styles.txtTotal}>Total No. of User Accounts</Text>
            <Text style={[styles.txtNum, styles.txtNum1]}>10</Text>
          </View>
        </View>

        <View style={[styles.box, styles.box4]}>
          <FontAwesome name="clipboard-list" style={[styles.icon, styles.iconMargin]} />
          <View>
            <Text style={[styles.txtTotal, styles.txtTotal1]}>Total No. of Patients Today</Text>
            <Text style={styles.txtNum}>34</Text>
          </View>
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
    paddingTop: StatusBar.currentHeight,
  },
  
  icon: {
    marginTop: responsiveHeight(1.9),
    marginLeft: responsiveWidth(1),
    color: "black",
    fontSize: responsiveFontSize(5),
  },

  iconMargin: {
    marginTop: responsiveHeight(1.4),
    marginLeft: responsiveWidth(1.5),
  },

  box: {
    width: responsiveWidth(35),
    height: responsiveHeight(11),
    borderRadius: 20,
    padding: responsiveWidth(1.6),
    paddingLeft: responsiveWidth(1),
    paddingRight: responsiveWidth(10),
    marginTop: responsiveHeight(3),
    flexDirection: 'row'
  },

  box1: {
    backgroundColor: '#92CEFA',
    marginTop: responsiveHeight(8),
  },

  box2: {
    backgroundColor: '#FAD692',
    marginTop: responsiveHeight(8),
  },

  box3: {
    backgroundColor: '#FA9292',
  },

  box4: {
    backgroundColor: '#92FAA3',
  },

  txtTotal: {
    fontSize: responsiveFontSize(1),
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(0.4),
  },

  txtTotal1: {
    marginLeft: responsiveWidth(2),
  },

  txtNum: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    marginLeft: responsiveWidth(2),
    marginTop: responsiveHeight(-0.1),
  },

  txtNum1: {
    marginLeft: responsiveWidth(0),
  },

  txtRecent: {
    marginTop: responsiveHeight(6),
    fontSize: responsiveFontSize(4),
    color: "#000",
    fontWeight: "bold",
  },

  recentOuterBox: {
    marginTop: responsiveHeight(-2),
    marginBottom: responsiveHeight(2),
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(2),
    width: responsiveWidth(85),
    height: responsiveHeight(47),
  },

  recentInnerBox: {
    backgroundColor: '#fff',
    width: responsiveWidth(80),
    height: responsiveHeight(6),
    padding: responsiveWidth(3.3),
    paddingLeft: responsiveWidth(3.3),
    marginVertical: responsiveHeight(0.3),
    marginHorizontal: responsiveWidth(2.5),
    borderRadius: 10,
    elevation: 1
  },

  recentData: {
    fontSize: responsiveFontSize(1.4),
  }
})
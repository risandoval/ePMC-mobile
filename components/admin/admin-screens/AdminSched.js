import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity} from 'react-native';

function viewsched () {
  return (
    <View>
      <Text>schedule data</Text>
    </View>
  )
}

export default function AdminSched({buttons, doSomethingAfterClick}) {
  const [date, setDate] = useState(null);

  useEffect(() => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var today = new Date();
    
    if ((today.getMonth()+1) == 1) {
      var month = months[0]
    }
    else if ((today.getMonth()+1) == 2) {
      var month = months[1]
    }
    else if ((today.getMonth()+1) == 3) {
      var month = months[2]
    }
    else if ((today.getMonth()+1) == 4) {
      var month = months[3]
    }
    else if ((today.getMonth()+1) == 5) {
      var month = months[4]
    }
    else if ((today.getMonth()+1) == 6) {
      var month = months[5]
    }
    else if ((today.getMonth()+1) == 7) {
      var month = months[6]
    }
    else if ((today.getMonth()+1) == 8) {
      var month = months[7]
    }
    else if ((today.getMonth()+1) == 9) {
      var month = months[8]
    }
    else if ((today.getMonth()+1) == 10) {
      var month = months[9]
    }
    else if ((today.getMonth()+1) == 11) {
      var month = months[10]
    }
    else if ((today.getMonth()+1) == 12) {
      var month = months[11]
    }

    var date = month + ' ' + today.getFullYear(); //today.getDate()
    setDate(date);

  }, []);

  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/schedbg.png')} style={styles.bgimage}>

        <Text style={styles.date}>{date}</Text>
        <Text style={styles.availdoc}>Available Doctors</Text>

        <View style={styles.btngrp}>
          <TouchableOpacity style={[styles.btndays, styles.radiusLft]}>
            <Text>Sun</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btndays}>
            <Text>Mon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btndays}>
            <Text>Tue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btndays}>
            <Text>Wed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btndays}>
            <Text>Thu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btndays}>
            <Text>Fri</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btndays, styles.radiusRgt]}>
            <Text>Sat</Text>
          </TouchableOpacity>
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
    alignItems: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  date: {
    marginTop: 50,
    fontSize: 35,
    fontWeight: '900',
  },

  availdoc: {
    marginTop: 25,
    fontSize: 25,
    fontWeight: '500',
  },

  btngrp: {
    flexDirection: 'row',
    marginTop: 20,
  },

  btndays:{
    backgroundColor: '#B6D9F3',
    padding: 20,
    // borderRadius: 10,
  },

  radiusLft: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  radiusRgt: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
import React, { useState } from "react";
import {StyleSheet, ImageBackground, View, Pressable, Text, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { VictoryBar, VictoryChart, VictoryPie, VictoryTheme } from "victory-native";

const allPatientSatisfaction = [
  {satisfaction: "Very Satisfied", satisfactionTotal: 15},
  {satisfaction: "Satisfied", satisfactionTotal: 20},
  {satisfaction: "Neutral", satisfactionTotal: 10},
  {satisfaction: "Unsatisfied", satisfactionTotal: 5},
  {satisfaction: "Very Unsatisfied", satisfactionTotal: 2},
];

export default function AdminReports() {
  const [modal1Visible, setmodal1Visible] = useState(true);
  const [modal2Visible, setmodal2Visible] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/reportbg.png')} style={styles.bgimage}>
        <ScrollView>
        <View style={styles.reportContainer}>
          {/* Overall Patient Satisfaction - Pie Chart */}
          <Text style={styles.reportTitle}>Overall Patient Satisfaction</Text>
          <VictoryPie
            theme={VictoryTheme.material}
            width={responsiveWidth(80)}
            data={allPatientSatisfaction}
            x="satisfaction"
            y="satisfactionTotal"
            innerRadius={50}
            colorScale={["#F78DA7", "#5300EB", "#1A237E", "#1273DE", "#8ED1FC"]}
            style={{ labels: { display: "none" } }}
          />
        </View>
        </ScrollView>
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

  reportContainer: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: responsiveWidth(90),
    marginTop: responsiveHeight(7),
    marginBottom: responsiveHeight(10),
    padding: 20,
    borderRadius: 20,
  },

  reportTitle: {
    fontSize: responsiveFontSize(2.3),
  },

  piechart: {
    width: 400,
  },
});
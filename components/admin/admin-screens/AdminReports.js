import React, { useState } from "react";
import {StyleSheet, ImageBackground, View, Pressable, Text, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import { VictoryBar, VictoryChart, VictoryPie, VictoryTheme, VictoryGroup, VictoryStack, VictoryLabel } from "victory-native";

const allPatientSatisfaction = [
  {satisfaction: "Very Satisfied", satisfactionTotal: 15},
  {satisfaction: "Satisfied", satisfactionTotal: 20},
  {satisfaction: "Neutral", satisfactionTotal: 10},
  {satisfaction: "Unsatisfied", satisfactionTotal: 5},
  {satisfaction: "Very Unsatisfied", satisfactionTotal: 2},
];

const docTreatmentPlan = [
  {agreement: "SD", agreementTotal: 5},
  {agreement: "D", agreementTotal: 3},
  {agreement: "N", agreementTotal: 18},
  {agreement: "A", agreementTotal: 28},
  {agreement: "SA", agreementTotal: 21}
];

const inventory = [
  [ //stock in
    {product: "Neozep", stockTotal: 13},
    {product: "Biogesic", stockTotal: 10},
    {product: "Bioflue", stockTotal: 32},
    {product: "Paracetamol", stockTotal: 8},
    {product: "Cefixime", stockTotal: 17},
    {product: "Ceftriaxone", stockTotal: 28},
    {product: "Cefuroxime", stockTotal: 20},
    {product: "Alaxan", stockTotal: 8},
    {product: "Amoxicillin", stockTotal: 77},
  ],

  [ //stock out
    {product: "Neozep", stockTotal: 18},
    {product: "Biogesic", stockTotal: 24},
    {product: "Bioflue", stockTotal: 56},
    {product: "Paracetamol", stockTotal: 42},
    {product: "Cefixime", stockTotal: 53},
    {product: "Ceftriaxone", stockTotal: 34},
    {product: "Cefuroxime", stockTotal: 66},
    {product: "Alaxan", stockTotal: 12},
    {product: "Amoxicillin", stockTotal: 87},
  ]
]

const stockIn = [ //displays bottom to top
  {product: "Neozep", stockTotal: 13},
  {product: "Biogesic", stockTotal: 10},
  {product: "Bioflue", stockTotal: 32},
  {product: "Paracetamol", stockTotal: 8},
  {product: "Cefixime", stockTotal: 17},
  {product: "Ceftriaxone", stockTotal: 28},
  {product: "Cefuroxime", stockTotal: 20},
  {product: "Alaxan", stockTotal: 8},
  {product: "Amoxicillin", stockTotal: 77},
];

const stockOut = [
  {product: "Neozep", stockTotal: 18},
  {product: "Biogesic", stockTotal: 24},
  {product: "Bioflue", stockTotal: 56},
  {product: "Paracetamol", stockTotal: 42},
  {product: "Cefixime", stockTotal: 53},
  {product: "Ceftriaxone", stockTotal: 34},
  {product: "Cefuroxime", stockTotal: 66},
  {product: "Alaxan", stockTotal: 12},
  {product: "Amoxicillin", stockTotal: 87},
];


export default function AdminReports() {
  //transform data to 100%
  function transformData(dataset) {
    const totals = dataset[0].map((data, i) => {
      return dataset.reduce((memo, curr) => {
        return memo + curr[i].y;
      }, 0);
    });
    return dataset.map((data) => {
      return data.map((datum, i) => {
        return { x: datum.x, y: (datum.y / totals[i]) * 100 };
      });
    });
  };

  const dataset = transformData(inventory);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/reportbg.png')} style={styles.bgimage}>
        <ScrollView>
          <View style={styles.reportContainer}>
            {/* Overall Patient Satisfaction - Pie Chart */}
              <Text style={styles.reportTitle}>Overall Patient Satisfaction</Text>
              <View style={styles.chartContainer}>
                <VictoryPie
                  theme={VictoryTheme.material}
                  width={responsiveWidth(80)}
                  data={allPatientSatisfaction}
                  x="satisfaction"
                  y="satisfactionTotal"
                  labels={({ datum }) => `${datum.satisfactionTotal}`}
                  innerRadius={50}
                  colorScale={["#F78DA7", "#5300EB", "#1A237E", "#1273DE", "#8ED1FC"]}
                  style={{ 
                    labels: { 
                      fontSize: responsiveFontSize(1.5),
                    } ,
                    data: { 
                      fillOpacity: 0.9, 
                      stroke: "#A4A7A5",
                      strokeWidth: 1 },
                  }}
                />
                <View style={[styles.labelContainer]}>
                  <View style={styles.rowLabel}>
                    <Text style={styles.piechartLabel}><Text style={{color: '#F78DA7'}}>{'\u2B24'}</Text> Very Satisfied</Text>
                    <Text style={styles.piechartLabel}><Text style={{color: '#5300EB'}}>{'\u2B24'}</Text> Satisfied</Text>
                    <Text style={styles.piechartLabel}><Text style={{color: '#1A237E'}}>{'\u2B24'}</Text> Neutral</Text>
                  </View>
                  <View style={styles.rowLabel}>
                    <Text style={styles.piechartLabel}><Text style={{color: '#1273DE'}}>{'\u2B24'}</Text> Unsatisfied</Text>
                    <Text style={styles.piechartLabel}><Text style={{color: '#8ED1FC'}}>{'\u2B24'}</Text> Very Unsatisfied</Text>
                  </View>
                </View>

            {/* Insertion and Deletion of Patients */}
              <Text style={[styles.reportTitle, styles.marginbottom]}>Insertions vs. Deletions of Patient </Text>
              <View style={styles.chartContainer}>
                  <VictoryChart
                    theme={VictoryTheme.material}
                    width={responsiveWidth(80)}
                    >
                    <VictoryGroup offset={16} style={{ data: { width: 15 } }}>
                      {/* Insertion Bar */}
                      <VictoryBar 
                        data={[
                          { x: "sun", y: 1 },
                          { x: "mon", y: 3 },
                          { x: "tue", y: 2 },
                          { x: "wed", y: 8 },
                          { x: "thu", y: 9 },
                          { x: "fri", y: 15 },
                          { x: "sat", y: 13 }
                        ]} 
                        style={{
                          data: { 
                            fillOpacity: 1,
                            fill: "#E8D06D",
                          },
                        }}/>
                      {/* Deletion Bar */}
                      <VictoryBar
                        data={[
                          { x: "sun", y: 1 },
                          { x: "mon", y: 9 },
                          { x: "tue", y: 2 },
                          { x: "wed", y: 3 },
                          { x: "thu", y: 8 },
                          { x: "fri", y: 5 },
                          { x: "sat", y: 2 }
                        ]}
                        style={{
                          data: { 
                            fillOpacity: 1, 
                            fill: "#B80000",
                          },
                        }} />
                    </VictoryGroup>
                  </VictoryChart>
                  <View style={[styles.labelContainer, {marginTop:responsiveHeight(-1)}]}>
                    <View style={styles.rowLabel}>
                      <Text style={styles.piechartLabel}><Text style={{color: '#E8D06D'}}>{'\u2B24'}</Text> Insertions</Text>
                      <Text style={styles.piechartLabel}><Text style={{color: '#B80000'}}>{'\u2B24'}</Text> Deletions</Text>
                    </View>
                  </View>
              </View>

              {/* Doctor's Treatment Plan */}
              <Text style={[styles.reportTitle, styles.marginbottom]}>Doctor's Treatment Plan</Text>
              <View style={styles.chartContainer}>
                <VictoryChart horizontal
                  theme={VictoryTheme.material}
                  domainPadding={30}
                  width={responsiveWidth(80)}
                >
                  <VictoryBar
                    data={docTreatmentPlan}
                    x="agreement"
                    y="agreementTotal"
                    colorScale={["#F78DA7", "#5300EB", "#1A237E", "#1273DE", "#8ED1FC"]}
                    style={{
                      data: { 
                        fillOpacity: 1, 
                        fill: "#64B5F6",
                        width: 40
                      },
                    }}
                  />
                </VictoryChart>
                <View style={[styles.labelContainer, {marginTop:responsiveHeight(-1)}]}>
                  <View style={styles.rowLabel}>
                    <Text style={styles.piechartLabel}>SA - Strongly Agree</Text>
                    <Text style={styles.piechartLabel}>A - Agree</Text>
                    <Text style={styles.piechartLabel}>N - Neutral</Text>
                  </View>
                  <View style={styles.rowLabel}>
                    <Text style={styles.piechartLabel}>D - Disagree</Text>
                    <Text style={styles.piechartLabel}>SD - Strongly Disagree</Text>
                  </View>
                </View>
              </View>

              {/* Stock Items */}
                <Text style={[styles.reportTitle, styles.marginbottom]}>Stock Items</Text>
                <View style={styles.chartContainer}>
                <VictoryChart horizontal
                    theme={VictoryTheme.material}
                    width={responsiveWidth(80)}
                    height={responsiveHeight(90)}
                    domainPadding={20}
                    >
                    <VictoryGroup offset={17} style={{ data: { width: 15 } }}>
                      {/* Stock In*/}
                      <VictoryBar 
                        data={[
                          {x: "Neozep", y: 13},
                          {x: "Biogesic", y: 10},
                          {x: "Bioflu", y: 32},
                          {x: "Paracetamol", y: 8},
                          {x: "Cefixime", y: 17},
                          {x: "Ceftriaxone", y: 28},
                          {x: "Cefuroxime", y: 20},
                          {x: "Alaxan", y: 8},
                          {x: "Amoxicillin", y: 77},
                        ]} 
                        style={{
                          data: { 
                            fillOpacity: 1,
                            fill: "#E8D06D",
                          },
                        }}/>
                      {/* Stock Out */}
                      <VictoryBar
                        data={[
                          {x: "Neozep", y: 10},
                          {x: "Biogesic", y: 42},
                          {x: "Bioflu", y: 34},
                          {x: "Paracetamol", y: 18},
                          {x: "Cefixime", y: 6},
                          {x: "Ceftriaxone", y: 36},
                          {x: "Cefuroxime", y: 4},
                          {x: "Alaxan", y: 1},
                          {x: "Amoxicillin", y: 2},
                        ]}
                        style={{
                          data: { 
                            fillOpacity: 1, 
                            fill: "#B80000",
                          },
                        }} />
                        <VictoryLabel 
                          textAnchor="middle"
                        />
                    </VictoryGroup>
                  </VictoryChart>
                    
                  
                </View>
            </View>
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

  chartContainer: {
    alignSelf: 'center',
    marginTop: responsiveHeight(-5),
  },

  labelContainer: {
    marginTop: responsiveHeight(-4),
    marginBottom: responsiveHeight(3),
  },

  rowLabel: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  piechartLabel: {
    
  },

  marginbottom: {
    marginBottom: responsiveHeight(1),
  },

});
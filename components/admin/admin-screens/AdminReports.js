import React, { useState } from "react";
import {StyleSheet, ImageBackground, View, Text, ScrollView } from 'react-native';
import {responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";
import {VictoryBar, VictoryChart, VictoryPie, VictoryTheme, VictoryGroup, VictoryZoomContainer,} from "victory-native";

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

export default function AdminReports() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/reportbg.png')} style={styles.bgimage}>
        <ScrollView>
          <View style={styles.reportContainer}>
            {/* Overall Patient Satisfaction */}
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
                    <Text style={styles.chartLabel}><Text style={{color: '#F78DA7'}}>{'\u2B24'}</Text> Very Satisfied</Text>
                    <Text style={styles.chartLabel}><Text style={{color: '#5300EB'}}>{'\u2B24'}</Text> Satisfied</Text>
                    <Text style={styles.chartLabel}><Text style={{color: '#1A237E'}}>{'\u2B24'}</Text> Neutral</Text>
                  </View>
                  <View style={styles.rowLabel}>
                    <Text style={styles.chartLabel}><Text style={{color: '#1273DE'}}>{'\u2B24'}</Text> Unsatisfied</Text>
                    <Text style={styles.chartLabel}><Text style={{color: '#8ED1FC'}}>{'\u2B24'}</Text> Very Unsatisfied</Text>
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
                      <Text style={styles.chartLabel}><Text style={{color: '#E8D06D'}}>{'\u2B24'}</Text> Insertions</Text>
                      <Text style={styles.chartLabel}><Text style={{color: '#B80000'}}>{'\u2B24'}</Text> Deletions</Text>
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
                    <Text style={styles.chartLabel}>SA - Strongly Agree</Text>
                    <Text style={styles.chartLabel}>A - Agree</Text>
                    <Text style={styles.chartLabel}>N - Neutral</Text>
                  </View>
                  <View style={styles.rowLabel}>
                    <Text style={styles.chartLabel}>D - Disagree</Text>
                    <Text style={styles.chartLabel}>SD - Strongly Disagree</Text>
                  </View>
                </View>
              </View>

              {/* Stock Items */}
                <Text style={[styles.reportTitle, styles.marginbottom]}>Stock Items</Text>
                <View style={[styles.chartContainer]}>
                  <VictoryChart 
                    theme={VictoryTheme.material}
                    width={responsiveWidth(80)}
                    domainPadding={{x:20}}
                    containerComponent={
                      <VictoryZoomContainer
                        allowZoom={false}
                        zoomDomain={{x: [0.8, 4.5]}}
                      />
                    } >
                      <VictoryGroup offset={15} style={{ data: { width: 15 } }}>
                        {/* Stock In */}
                        <VictoryBar 
                          data={[
                            { x: "Neozep", y: 1 },
                            { x: "Biogesic", y: 3 },
                            { x: "Bioflu", y: 2 },
                            { x: "Alaxan", y: 8 },
                            { x: "Skelan", y: 9 },
                            { x: "Medical Advance", y: 15 },
                            { x: "Liver Prime", y: 13 },
                            { x: "Adoxa Pak", y: 13 },
                            { x: "Benzodiazepine", y: 29 },
                            { x: "Onpattro", y: 12 },
                            { x: "Adderall XR", y: 13 },
                            { x: "Xanax XR", y: 13 },
                          ]} 
                          style={{
                            data: { 
                              fillOpacity: 1,
                              fill: "#F78DA7",
                            },
                          }}
                        />
                        {/* Stock Out */}
                        <VictoryBar
                          data={[
                            { x: "Neozep", y: 1 },
                            { x: "Biogesic", y: 9 },
                            { x: "Bioflu", y: 2 },
                            { x: "Alaxan", y: 3 },
                            { x: "Skelan", y: 8 },
                            { x: "Medical Advance", y: 5 },
                            { x: "Liver Prime", y: 2 },
                            { x: "Adoxa Pak", y: 2 },
                            { x: "Benzodiazepine", y: 2 },
                            { x: "Onpattro", y: 2 },
                            { x: "Adderall XR", y: 2 },
                            { x: "Xanax XR", y: 2 },
                          ]}
                          style={{
                            data: { 
                              fillOpacity: 1, 
                              fill: "#F47867",
                            },
                          }}
                        />
                      </VictoryGroup>
                  </VictoryChart>
                  <View style={[styles.labelContainer, {marginTop:responsiveHeight(-1)}]}>
                    <View style={styles.rowLabel}>
                      <Text style={styles.chartLabel}><Text style={{color: '#F78DA7'}}>{'\u2B24'}</Text> Stock In</Text>
                      <Text style={styles.chartLabel}><Text style={{color: '#F47867'}}>{'\u2B24'}</Text> Stock Out</Text>
                    </View>
                  </View>
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

  chartLabel: {
    
  },

  marginbottom: {
    marginBottom: responsiveHeight(1),
  },

  nospace: {
    marginLeft: responsiveWidth(0),
    marginRight: responsiveWidth(-20),
    paddingLeft: responsiveWidth(-20),
    paddingRight: responsiveWidth(0),
  },

});
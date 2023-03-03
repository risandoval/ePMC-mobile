import React, { useState, useEffect } from "react";
import {StyleSheet, ImageBackground, View, Text, ScrollView } from 'react-native';
import {responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";
import {VictoryBar, VictoryChart, VictoryPie, VictoryTheme, VictoryGroup, VictoryZoomContainer,
        VictoryAxis} from "victory-native";

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



export default function DoctorReports() {
  const [isLoading, setLoading] = useState(true);
  const [stockIn, setStockIn] = useState([]);
  const [stockOut, setStockOut] = useState([]);
  const [insertion, setInsertion] = useState([]);
  const [deletion, setDeletion] = useState([]);
  const [ageRange, setAgeRange] = useState([]);
  const [bmi, setBmi] = useState([]);

  const headers = {
    'Accept': 'application/json',
    'Content-Type' : 'application/json;charset=UTF-8',
    'X-API-KEY':'myapi',
    'Authorization':'Basic YWRtaW46YWRtaW4xMjM='   
  }

  //START of Patient Age Range
    const fetchAgeRange = async() => {

    // var agerangepath = "http://192.168.1.4:80/epmc-4/doc_reports_age_range";
    var agerangepath = "http://e-pmc.com/doc_reports_age_range";

    await fetch(agerangepath,{
      headers: headers
    })  
    .then((response)=>response.json())
    .then((json)=>setAgeRange(json))
    .catch((error)=> console.error("ERROR FOUND " + error))
    .finally(() => setLoading(false));
    }

    useEffect(()=>{
      fetchAgeRange();
      
      const dataInterval = setInterval(() => fetchAgeRange(), 5 * 1000);
      return () => clearInterval(dataInterval);
    },[]);
  //END of Patient Age Range


  //START of Patient's BMI
  const fetchBMI = async() => {

  // var bmipath = "http://192.168.1.4:80/epmc-4/doc_reports_bmi";
  var bmipath = "http://e-pmc.com/doc_reports_age_range";

  await fetch(bmipath,{
    headers: headers
  })  
  .then((response)=>response.json())
  .then((json)=>setBmi(json))
  .catch((error)=> console.error("ERROR FOUND " + error))
  .finally(() => setLoading(false));
  }

  useEffect(()=>{
    fetchBMI();
    
    const dataInterval = setInterval(() => fetchBMI(), 5 * 1000);
    return () => clearInterval(dataInterval);
  },[]);
  //END of Patient's BMI


  //START of Overall Patient Satisfaction
    //code here !
  //END of Overall Patient Satisfaction


  //START - fetch 7 days insertion of patients
    const fetchInsertion = async() => {

    // var insertionpath = "http://192.168.1.4:80/epmc-4/adm_insert_patient";
    var insertionpath = "http://e-pmc.com/adm_insert_patient";

    await fetch(insertionpath,{
      headers: headers
    })  
    .then((response)=>response.json())
    .then((json)=>setInsertion(json))
    .catch((error)=> console.error("ERROR FOUND " + error))
    .finally(() => setLoading(false));
    }

    useEffect(()=>{
      fetchInsertion();
      
      const dataInterval = setInterval(() => fetchInsertion(), 5 * 1000);
      return () => clearInterval(dataInterval);
    },[]);
  //END - fetch 7 days insertion of patients


  //START - fetch 7 days deletion of patients
  const fetchDeletion = async() => {

  // var deletionpath = "http://192.168.1.4:80/epmc-4/adm_delete_patient";
  var deletionpath = "http://e-pmc.com/adm_delete_patient";

  await fetch(deletionpath,{
    headers: headers
  })  
  .then((response)=>response.json())
  .then((json)=>setDeletion(json))
  .catch((error)=> console.error("ERROR FOUND " + error))
  .finally(() => setLoading(false));
  }

  useEffect(()=>{
    fetchDeletion();
    
    const dataInterval = setInterval(() => fetchDeletion(), 5 * 1000);
    return () => clearInterval(dataInterval);
  },[]);
  //END - fetch 7 days deletion of patients


  //START - fetch all inventory item (stockin)
  const fetchStockIn = async() => {

    // var stockinpath = "http://192.168.1.4:80/epmc-4/adm_reports_stockin";
    var stockinpath = "http://e-pmc.com/adm_reports_stockin";

    await fetch(stockinpath,{
      headers: headers
    })  
    .then((response)=>response.json())
    .then((json)=>setStockIn(json))
    .catch((error)=> console.error("ERROR FOUND " + error))
    .finally(() => setLoading(false));
    }

    useEffect(()=>{
      fetchStockIn();
      const dataInterval = setInterval(() => fetchStockIn(), 5 * 1000);
      return () => clearInterval(dataInterval);
    },[]);
  //END - fetch all inventory item (stockout)


  //START of Doctor's Treatment Plan
    //code here !
  //END of Doctor's Treatment Plan


  //START - fetch all stock in (stockout)
    const fetchStockOut = async() => {

    // var stockoutpath = "http://192.168.1.4:80/epmc-4/adm_reports_stockout";
    var stockoutpath = "http://e-pmc.com/adm_reports_stockin";

    await fetch(stockoutpath,{
      headers: headers
    })  
    .then((response)=>response.json())
    .then((json)=>setStockOut(json))
    .catch((error)=> console.error("ERROR FOUND " + error))
    .finally(() => setLoading(false));
    }

    useEffect(()=>{
      fetchStockOut();
      
      const dataInterval = setInterval(() => fetchStockOut(), 5 * 1000);
      return () => clearInterval(dataInterval);
    },[]);
  //END - fetch all stock in (stockout)
  
  return (
    <View style={styles.container}>
      {isLoading ? <Text style={styles.loadingtext}>Loading Data...</Text>:
        <ImageBackground source={require('../../../assets/patientrec.png')} style={styles.bgimage}>
          <ScrollView>
            <View style={styles.reportContainer}>

              {/* Patient Age Range */}
                <Text style={[styles.reportTitle, styles.marginbottom]}>Patient's Age Range</Text>
                <View style={styles.chartContainer}>
                  <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={{x:20}}
                    width={responsiveWidth(80)}
                    containerComponent={
                      <VictoryZoomContainer
                        allowZoom={false}
                        zoomDomain={{x: [0.5, 6]}}
                      />
                    }
                  >
                    <VictoryBar
                      data={ageRange}
                      colorScale={["#F78DA7", "#5300EB", "#1A237E", "#1273DE", "#8ED1FC"]}
                      style={{
                        data: { 
                          fillOpacity: 1, 
                          fill: "#D32F2F",
                          width: 40
                        },
                      }}
                    />
                  </VictoryChart>
                </View>


              {/* Patient's BMI Overview */}
              <Text style={styles.reportTitle}>Patient's BMI Overview</Text>
                <View style={styles.chartContainer}>
                  <VictoryPie
                    theme={VictoryTheme.material}
                    width={responsiveWidth(80)}
                    data={bmi}
                    labels={({ datum }) => `${datum.y}`}
                    innerRadius={50}
                    colorScale={["#99B898", "#FF7C7C", "#FFD082", "#88E1F2" ]}
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
                      <Text style={styles.chartLabel}><Text style={{color: '#99B898'}}>{'\u2B24'}</Text> Underweight</Text>
                      <Text style={styles.chartLabel}><Text style={{color: '#FF7C7C'}}>{'\u2B24'}</Text> Normal</Text>
                      <Text style={styles.chartLabel}><Text style={{color: '#FFD082'}}>{'\u2B24'}</Text> OverWeight</Text>
                    </View>
                    <View style={styles.rowLabel}>
                      <Text style={styles.chartLabel}><Text style={{color: '#88E1F2'}}>{'\u2B24'}</Text> Obese</Text>
                    </View>
                  </View>
                </View>

              
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
                            data={insertion} 
                            style={{
                              data: { 
                                fillOpacity: 1,
                                fill: "#E8D06D",
                              },
                            }}
                          />
                        {/* Deletion Bar */}
                          <VictoryBar
                            data={deletion}
                            style={{
                              data: { 
                                fillOpacity: 1, 
                                fill: "#B80000",
                              },
                            }} 
                          />
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
                          zoomDomain={{x: [0.8, 4]}}
                        />
                      }
                    >
                        <VictoryGroup offset={21} style={{ data: { width: 20 } }}>
                          {/* Stock In */}
                            <VictoryBar 
                              data={stockIn} 
                              style={{
                                data: { 
                                  fillOpacity: 1,
                                  fill: "#F78DA7",
                                },
                              }}
                            />
                          {/* Stock Out */}
                            <VictoryBar
                              data={stockOut} 
                              style={{
                                data: { 
                                  fillOpacity: 1, 
                                  fill: "#F47867",
                                },
                              }}
                            />
                        </VictoryGroup>
                        
                        <VictoryAxis />
                        <VictoryAxis
                          tickCount={ 10 }
                          dependentAxis={ true } /* To target the y-axis */
                        />
                    </VictoryChart>
                    <View style={[styles.labelContainer, {marginTop:responsiveHeight(-1)}]}>
                      <View style={styles.rowLabel}>
                        <Text style={styles.chartLabel}><Text style={{color: '#F78DA7'}}>{'\u2B24'}</Text> Stock In</Text>
                        <Text style={styles.chartLabel}><Text style={{color: '#F47867'}}>{'\u2B24'}</Text> Stock Out</Text>
                      </View>
                    </View>
                  </View>
            </View>
          </ScrollView>
        </ImageBackground>
      }
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
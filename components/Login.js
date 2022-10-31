import { StyleSheet, Button, View } from 'react-native';



export default function Login( { navigation} ) {
  return (
    <View style={styles.container}>
        <Button title='Login as Employee'
            onPress={() => navigation.navigate("LoginStaff")}/>
        <Button title='Login as Patient'
            onPress={() => navigation.navigate("LoginPatient")}/>
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
});
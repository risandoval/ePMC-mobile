import { StyleSheet, View, Text} from 'react-native';

export default function LoginStaff() {
  return (
    <View style={styles.container}>
      <Text>Login as Patient!</Text>
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
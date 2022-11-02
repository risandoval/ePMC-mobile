import { View, Text } from 'react-native';

export default function PatientRecord({navigation}) {
    return(
        <View>
            <Text onPress={() => navigation.navigate('Dashboard')}>
                Patient Record
            </Text>
        </View>
    )
}


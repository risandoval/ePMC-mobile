import { View, Text } from 'react-native';

export default function Schedule({navigation}) {
    return(
        <View>
            <Text onPress={() => navigation.navigate('Dashboard')}>
                Schedule
            </Text>
        </View>
    )
}


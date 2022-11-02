import { View, Text } from 'react-native';

export default function Reports({navigation}) {
    return(
        <View>
            <Text onPress={() => navigation.navigate('Dashboard')}>
                Reports
            </Text>
        </View>
    )
}


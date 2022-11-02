import { View, Text } from 'react-native';

export default function Dashboard({navigation}) {
    return(
        <View>
            <Text onPress={() => alert('This is the Dashboard.')}>
                Dashboard
            </Text>
        </View>
    )
}


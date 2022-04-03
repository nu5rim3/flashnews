import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Styles } from '../utils/GlobalStyle';

const Empty = () => {
    return (
        <View style={[Styles.errorContainer]}>
            <Feather name="cloud-rain" size={24} color="black" />
            <Text>Cloud rain</Text>
            <Text>No News Found</Text>
        </View>
    )
}

export default Empty;
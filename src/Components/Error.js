import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Styles } from '../utils/GlobalStyle';

const Error = () => {
    return (
        <View style={[Styles.errorContainer]}>
            <Feather name="cloud-lightning" size={24} color="black" />
            <Text>Thunder Stome</Text>
            <Text>API KEY</Text>
        </View>
    )
}

export default Error;
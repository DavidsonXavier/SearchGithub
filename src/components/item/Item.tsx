import { View, Text, Linking } from 'react-native'

import { styles } from './styles'

interface iProps {
    title: string,
    link: string
}

const Item = ({ title, link }: iProps) => (
    <View style={styles.item}>
        <Text style={styles.title} onPress={() => Linking.openURL(link)}>{title}</Text>
    </View>
);

export default Item;
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ImageBackground} from 'react-native';
import bgImage from '../../images/header-bg.png';

const DeviceListItem = ({ onPress, title}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
            <ImageBackground source={bgImage} style={styles.itemBg}>
                <Text style={styles.itemTitle}>{title}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default DeviceListItem;

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    itemBg: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    itemTitle: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',

    }
})
import React from "react";
import { StyleSheet, TouchableOpacity, Text, ImageBackground } from "react-native";

import backButton from '../../images/backButton.png';

const ExitButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <ImageBackground source={backButton} style={styles.itemBg} />
            <Text style={styles.appButtonText}>Back</Text>
        </TouchableOpacity>
    )
}

export default ExitButton;

const styles = StyleSheet.create({
    appButtonContainer: {
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    appButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 10
    },
    itemBg: {
        width: 9,
        height: 16
    }
});
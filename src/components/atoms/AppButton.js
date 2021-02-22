import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const AppButton = ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AppButton;

const styles = StyleSheet.create({
    appButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#ffffff',
    },
    appButtonText: {
        fontSize: 16,
        color: '#F76B1C',
        fontWeight: 'bold',
    }
});
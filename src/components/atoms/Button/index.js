import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Button.scss'

const Button = ({ onPress, title, isDisabled }) => {
    const buttonContainerStyles = [
        styles.ButtonContainer,
        isDisabled ? styles.ButtonContainerDisabled : null,
    ];

    const buttonTextStyles = [
        styles.ButtonText,
        isDisabled ? styles.ButtonTextDisabled : null,
    ];
    
    return (
        <TouchableOpacity
            onPress={onPress} 
            style={buttonContainerStyles}
        >
            <Text 
                style={buttonTextStyles}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button;

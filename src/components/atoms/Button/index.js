import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({ title, isDisabled, onPress, buttonPrimary }) => {
  const buttonContainerStyles = [
    styles.ButtonContainer,
    isDisabled ? styles.ButtonContainerDisabled : null,
    buttonPrimary ? styles.ButtonContainerPrimary : null,
  ];

  const buttonTextStyles = [
    styles.ButtonText,
    isDisabled ? styles.ButtonTextDisabled : null,
    buttonPrimary ? styles.ButtonTextPrimary : null,
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
  );
};

Button.propTypes = {
  title: PropTypes.string,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
  buttonPrimary: PropTypes.bool,
};

Button.defaultProps = {
  title: 'Button',
  isDisabled: false,
  buttonPrimary: false,
};

export default Button;

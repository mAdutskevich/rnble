import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({ title, isDisabled, onPress }) => {
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
  );
};

Button.propTypes = {
  title: PropTypes.string,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  title: 'Button',
  isDisabled: false,
};

export default Button;

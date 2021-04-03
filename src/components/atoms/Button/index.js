import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import propTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({
  title,
  icon,
  isPadding,
  appearance,
  onPress,
  isDisabled,
}) => {
  console.log('isDisabled from button', isDisabled);

  const buttonContainerStyles = [
    styles.ButtonContainer,
    appearance === 'primary' && styles.ButtonContainerPrimary,
    appearance === 'seconfary' && styles.ButtonContainerSecondary,
    isPadding && styles.ButtonContainerPadding,
    isDisabled && styles.ButtonContainerDisabled
  ];

  console.log('isDisabled', isDisabled);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonContainerStyles}
    >
      {icon ? icon : null}

      {!!title &&
        <Text
          style={styles.ButtonText}
        >
          {title}
        </Text>
      }
    </TouchableOpacity>
  );
};

Button.propTypes = {
  title: propTypes.string,
  icon: propTypes.element,
  isPadding: propTypes.bool,
  isDisabled: propTypes.bool,
  appearance: propTypes.string,
  onPress: propTypes.func,
};

Button.defaultProps = {
  //
};

export default Button;

import React from 'react';
import {TouchableOpacity} from 'react-native';
import propTypes from 'prop-types';
import styles from './ControlButton.scss';

const ControlButton = ({ isActive, onPress, children }) => {
  // console.log('children', children);
  const controlButtonContainerStyles = [
    styles.ControlButtonContainer,
    isActive ? styles.ControlButtonContainerActive : null
  ];

  const handleOnPress = e => {
    e.preventDefault();

    onPress?.();
  };

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={controlButtonContainerStyles}
    >
      {children}
    </TouchableOpacity>
  );
};

ControlButton.propTypes = {
  isActive: propTypes.bool,
  onPress: propTypes.func,
  children: propTypes.element,
};

ControlButton.defaultProps = {
  //
};

export default ControlButton;

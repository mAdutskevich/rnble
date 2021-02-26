import React from 'react';
import {TriangleColorPicker} from 'react-native-color-picker';
import PropTypes from 'prop-types';
import styles from './ColorPicker';

const ColorPicker = ({ onChange }) => (
  <TriangleColorPicker
    onColorChange={(color) => {}}
    style={styles.ColorPicker}
  />
);

ColorPicker.propTypes = {
  onChange: PropTypes.func,
};

// ColorPicker.defaultProps = {
//   title: 'Button',
//   isDisabled: false,
// };

export default ColorPicker;

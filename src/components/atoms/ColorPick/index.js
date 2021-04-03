import React from 'react';
import { View, Text } from 'react-native';
import { TriangleColorPicker } from 'react-native-color-picker';
import propTypes from 'prop-types';
import styles from './ColorPick';

const ColorPick = ({ initialValue, title, onChange }) => (
  <View
    style={styles.ColorPick}
  >
    {!!title && 
      <Text
        style={styles.ColorPickTitle}
      >
        {title}
      </Text>
    }

    <TriangleColorPicker
      defaultColor={initialValue}
      onColorChange={onChange}
      style={styles.ColorPickModule}
    />
  </View>
);

ColorPick.propTypes = {
  title: propTypes.string,
  onChange: propTypes.func,
  initialValue: propTypes.object,
};

ColorPick.defaultProps = {
  title: 'Color Title',
  initialValue: {h: 122, s: 1, v: 1},
};

export default ColorPick;

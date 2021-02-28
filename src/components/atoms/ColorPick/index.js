import React from 'react';
import { View, Text } from 'react-native';
import { TriangleColorPicker } from 'react-native-color-picker';
import PropTypes from 'prop-types';
import styles from './ColorPick';

const ColorPick = ({ initialValue, title, onChange }) => (
  <View>
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
  title: PropTypes.string,
  onChange: PropTypes.func,
  initialValue: PropTypes.object,
};

ColorPick.defaultProps = {
  title: 'Color Title',
  initialValue: {h: 122, s: 1, v: 1},
};

export default ColorPick;

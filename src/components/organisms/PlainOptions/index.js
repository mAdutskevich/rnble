import React from 'react';
import { View, Text } from 'react-native';
import styles from './PlainOptions';
import ColorPicker from '@/components/atoms/ColorPicker';

const PlainOptions = () => {
  return (
    <View>
      <View 
        style={styles.PlainOptionsColorPickerWrapper}
      >
        <ColorPicker />
      </View>
    </View>
  );
};

export default PlainOptions;

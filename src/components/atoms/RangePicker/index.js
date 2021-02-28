import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import styles from './RangePicker.scss';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const RangePicker = ({ title, onChange, initialValue }) => {
  const [sliderOneValue, setSliderOneValue] = useState(initialValue);
  const windowWidth = Dimensions.get('window').width;

  const sliderOneValuesChange = value => {
    setSliderOneValue(value);
    onChange(value);
  };

  return (
    <View
      style={styles.RangePicker}
    >
      {!!title && 
        <Text
          style={styles.RangePickerTitle}
        >
          {title}: {Math.ceil(sliderOneValue / 255 * 100)}
        </Text>
      }

      <View
        style={styles.RangePickerWrapper}
      >
        <MultiSlider
          values={sliderOneValue}
          sliderLength={windowWidth - 70}
          min={0}
          max={255}
          step={1}
          onValuesChange={sliderOneValuesChange}
        />
      </View> 
    </View>  
  );
};

RangePicker.propTypes = {
  title: PropTypes.string,
  initialValue: PropTypes.array,
  onChange: PropTypes.func,
};

RangePicker.defaultProps = {
  title: 'Range Title',
  initialValue: [8],
};

export default RangePicker;

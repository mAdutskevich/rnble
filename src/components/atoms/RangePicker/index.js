import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import styles from './RangePicker.scss';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const RangePicker = ({ title, onChange, initialValue, minValue, maxValue }) => {
  const [sliderOneValue, setSliderOneValue] = useState(initialValue);
  const windowWidth = Dimensions.get('window').width;
  console.log('minValue', minValue);
  console.log('maxValue', maxValue);

  const sliderOneValuesChange = value => {
    console.log('value', value);
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
          {title}: {Math.ceil((sliderOneValue - minValue)/(maxValue - minValue) * 100 )}
        </Text>
      }

      <View
        style={styles.RangePickerWrapper}
      >
        <MultiSlider
          values={sliderOneValue}
          sliderLength={windowWidth - 40}
          min={minValue}
          max={maxValue}
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
  minValue: 0,
  maxValue: 255,
};

export default RangePicker;

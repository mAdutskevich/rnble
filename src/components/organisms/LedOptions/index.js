import React, { useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import PropTypes from 'prop-types';
import styles from './LedOptions';
import ColorPick from '@/components/atoms/ColorPick';
import RangePicker from '@/components/atoms/RangePicker';
import Button from '@/components/atoms/Button';
import SwitchButton from '@/components/atoms/SwitchButton';

const LedOptions = (
  { 
    initialColor, 
    initialBrightness,
    initialDelay,
    initialSmooth,
    brightnessChange, 
    colorChange, 
    delayChange,
    smoothChange,
    minDelayValue,
    maxDelayValue,
    selectedOption,
    setOptions,
}) => {
  const [isDisabledSetOptions, setIsDisabledSetOptions] = useState(false)
  const brightnessPickerStore = ['plain', 'blink', 'sinelon', 'rainbow', 'sequential'];
  const colorPickerStore = ['plain', 'blink', 'sinelon', 'sequential'];
  const smoothPickerStore = ['blink'];
  const delayPickerStore = ['blink'];

  const showSatusChecker = (optionStore, selectedOption) => 
    optionStore.some(option => option === selectedOption.value);

  const handleSetOptions = () => {
    setOptions();
    Alert.alert('', 'Options successfully sent to device');
  }

  return (
    <ScrollView 
      style={styles.LedOptions}
    >
      {showSatusChecker(colorPickerStore, selectedOption) &&
        <View 
          style={styles.LedOptionsColorPickWrapper}
        >
          <ColorPick
            title="Pick a color:"
            onChange={colorChange}
            initialValue={initialColor}
          />
        </View>
      }

      {showSatusChecker(brightnessPickerStore, selectedOption) &&
        <View 
          style={styles.LedOptionsRangePickerWrapper}
        >
          <RangePicker
            title="Brightness"
            onChange={brightnessChange}
            initialValue={initialBrightness}
          />
        </View>
      }

      {showSatusChecker(smoothPickerStore, selectedOption) &&
        <View 
          style={styles.LedOptionsSwitchWrapper}
        >
          <SwitchButton
            title="Smooth effect:"
            value={initialSmooth}
            onChange={smoothChange}
          />
        </View>
      }

      {showSatusChecker(delayPickerStore, selectedOption) &&
        <View 
          style={styles.LedOptionsRangePickerWrapper}
        >
          <RangePicker
            title="Delay"
            onChange={delayChange}
            initialValue={initialDelay}
            minValue={minDelayValue}
            maxValue={maxDelayValue}
          />
        </View>
      }

      <View 
        style={styles.LedOptionsButtonWrapper}
      >
        <Button
          title="Set Options"
          appearance="primary"
          onPress={handleSetOptions}
          buttonPrimary
          isDisabled={isDisabledSetOptions}
        />
      </View>
    </ScrollView>
  );
};

LedOptions.propTypes = {
  initialColor: PropTypes.object,
  initialBrightness: PropTypes.arrayOf(PropTypes.number),
  initialDelay: PropTypes.arrayOf(PropTypes.number),
  initialStep: PropTypes.arrayOf(PropTypes.number),
  initialSmooth: PropTypes.bool,
  brightnessChange: PropTypes.func,
  colorChange: PropTypes.func, 
  delayChange: PropTypes.func,
  stepChange: PropTypes.func,
  smoothChange: PropTypes.func,
  setOptions: PropTypes.func,
  selectedOption: PropTypes.object,
};

LedOptions.defaultProps = {
  initialColor: {h: 94, s: 255, v: 255},
  initialBrightness: [150],
  initialDelay: [8],
  initialStep: [8],
  initialSmooth: false,
  selectedOption: {
    label: 'Plain',
    value: 'plain',
    numId: 0,
  }
};

export default LedOptions;

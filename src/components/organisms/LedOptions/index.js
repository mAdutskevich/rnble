import React from 'react';
import { View, ScrollView } from 'react-native';
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
    initialStep,
    initialSmooth,
    brightnessChange, 
    colorChange, 
    delayChange,
    stepChange,
    smoothChange,
    setOptions,
    selectedOption,
  }) => {
  const brightnessPickerStore = ['plain', 'blink', 'sinelon', 'rainbow'];
  const colorPickerStore = ['plain', 'blink', 'sinelon'];
  const smoothPickerStore = ['blink'];
  const stepPickerStore = ['blink'];
  const delayPickerStore = ['blink'];

  const showSatusChecker = (optionStore, selectedOption) => 
    optionStore.some(option => option === selectedOption.value);

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
          />
        </View>
      }

      {showSatusChecker(stepPickerStore, selectedOption) &&
        <View 
          style={styles.LedOptionsRangePickerWrapper}
        >
          <RangePicker
            title="Step"
            onChange={stepChange}
            initialValue={initialStep}
          />
        </View>
      }

      <View 
        style={styles.LedOptionsButtonWrapper}
      >
        <Button 
          title="Set Options"
          onPress={setOptions}
          buttonPrimary
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
  initialColor: {h: 122, s: 1, v: 1},
  initialBrightness: [150],
  initialDelay: [8],
  initialStep: [8],
  initialSmooth: false,
  selectedOption: {
    label: 'Plain',
    value: 'plain',
  }
};

export default LedOptions;

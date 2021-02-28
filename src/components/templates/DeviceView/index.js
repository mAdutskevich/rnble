import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  View
} from 'react-native';
import styles from './DeviceView.scss';
import BluetoothSerial from 'react-native-bluetooth-serial';
import BackButton from '@/components/atoms/BackButton';
import DropdownSelect from '@/components/molecules/DropdownSelect';
import ImageBg from '@/images/header-bg.png';
import LedOptions from '@/components/organisms/LedOptions';

const pickerOptions = [
  {
    label: 'Plain',
    value: 'plain',
  },
  {
    label: 'Blink',
    value: 'blink',
  },
  {
    label: 'Sinelon',
    value: 'sinelon',
  },
  {
    label: 'Rainbow',
    value: 'rainbow',
  },
];

const DeviceView = ({ onExit }) => {
  const [selectedOption, setSelectedOption] = useState(pickerOptions[0]);
  const [color, setColor] = useState({h: 122, s: 1, v: 1});
  const [brightness, setBrightness] = useState([150]);
  const [step, setStep] = useState([20]);
  const [delay, setDelay] = useState([20]);
  const [smoothness, setSmoothness] = useState(false);
  
  const dropdownChangeHandler = (item) => {
    setSelectedOption(item);
  };

  const colorChangeHandler = value => {
    const { h, s, v } = value;
    
    setColor(
      { 
        h: Math.ceil(h / 360 * 255),
        s: Math.ceil(s * 255),
        v: Math.ceil(v * 255),
      }
    );

    console.log('color', { 
      h: Math.ceil(h / 360 * 255),
      s: Math.ceil(s * 255),
      v: Math.ceil(v * 255),
    });
  };

  const brightnessChangeHandler = value => {
    setBrightness(value);
    console.log('brightness', value);
  };
  
  const delayChangeHandler = value => {
    setDelay(value);
    console.log('delay', value);
  };

  const stepChangeHandler = value => {
    setStep(value);
    console.log('step', value);
  };

  const smoothChangeHandler = value => {
    setSmoothness(value);
    console.log('smoothness', value);
  };

  const setOptionsHandler = () => {
    sendOptions();
  };

  const sendOptions = () => {
    BluetoothSerial.write(`
      $${selectedOption.value}
      $${brightness}
      $${color.h}$${color.s}$${color.v}
      $${+smoothness}
      $${delay}
      $${step}
    `)
      .then((res) => {
        console.log(res);
        console.log('Successfuly wrote to device');
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <View
      style={styles.DeviceView}
    >
      <ImageBackground
        source={ImageBg}
        style={styles.exitContainer}
      >
        <BackButton
          onPress={onExit}
        />
      </ImageBackground>

      <DropdownSelect
        options={pickerOptions}
        onChange={dropdownChangeHandler}
      />

      <LedOptions 
        initialColor={color}
        initialBrightness={brightness}
        initialDelay={delay}
        initialStep={step}
        initialSmooth={smoothness}
        brightnessChange={brightnessChangeHandler}
        colorChange={colorChangeHandler}
        delayChange={delayChangeHandler}
        stepChange={stepChangeHandler}
        smoothChange={smoothChangeHandler}
        setOptions={setOptionsHandler}
        selectedOption={selectedOption}
      />
    </View>
  );
};

export default DeviceView;

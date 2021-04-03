import React, {useState} from 'react';
import {
  View
} from 'react-native';
import styles from './DeviceView.scss';
import BluetoothSerial from 'react-native-bluetooth-serial';
import DropdownSelect from '@/components/molecules/DropdownSelect';
import LedOptions from '@/components/organisms/LedOptions';
import Button from '@/components/atoms/Button';
import IconBack from '@/icons/IconBack';
import IconSettings from '@/icons/IconSettings';

const pickerOptions = [
  {
    label: 'Plain',
    value: 'plain',
    idNum: 0,
  },
  {
    label: 'Blink',
    value: 'blink',
    idNum: 1,
  },
  {
    label: 'Sinelon',
    value: 'sinelon',
    idNum: 2,
  },
  {
    label: 'Rainbow',
    value: 'rainbow',
    idNum: 3,
  },
];

const DeviceView = ({ onExit, onSettingsClick }) => {
  const [selectedOption, setSelectedOption] = useState(pickerOptions[0]);
  const [color, setColor] = useState({h: 84, s: 0, v: 255});
  const [brightness, setBrightness] = useState([100]);
  const [delay, setDelay] = useState([20]);
  const [minDelay, setMinDelay] = useState(0);
  const [maxDelay, setMaxDelay] = useState(2000);
  const [smoothness, setSmoothness] = useState(false);

  const disconnectDevice = () => {
    BluetoothSerial.disconnect();
  };
  
  const dropdownChangeHandler = (item) => {
    setSelectedOption(item);

    console.log('item', item);
    if (item.value === 'blink') {
      if (smoothness) {
        setMinDelay(100);
        setMaxDelay(4000);
        setDelay([100]);
      } else {
        setMinDelay(50);
        setMaxDelay(500);
        setDelay([300]);
      }
    } else if (item.value === 'rainbow') {
      setMinDelay(10);
      setMaxDelay(30);
    }
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

  const handleOnExit = () => {
    disconnectDevice();
    onExit();
  };

  const smoothChangeHandler = value => {
    setSmoothness(value);
    console.log('smoothness', value);

    if (value) {
      setMinDelay(100);
      setMaxDelay(4000);
      setDelay([100]);
    } else {
      setMinDelay(50);
      setMaxDelay(500);
      setDelay([300]);
    }
  };

  const setOptionsHandler = () => {
    sendOptions();
  };

  const sendOptions = () => {
    BluetoothSerial.write(`
      $empty
      $${selectedOption.idNum}
      $${brightness}
      $${color.h}$${color.s}$${color.v}
      $${+smoothness}
      $${delay}
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
      <View
        style={styles.DeviceViewHeader}
      >
        <Button
          icon={
            <IconBack
              width="40"
              height="40"
              viewBox="0 0 50 50"
              fill="#fff"
            />
          }
          onPress={handleOnExit}
        />

        <Button
          icon={
            <IconSettings
              width="40"
              height="40"
              viewBox="0 0 50 50"
              fill="#fff"
            />
          }
          onPress={onSettingsClick}
        />
      </View>
      
      <DropdownSelect
        options={pickerOptions}
        onChange={dropdownChangeHandler}
      />

      <LedOptions 
        initialColor={color}
        initialBrightness={brightness}
        initialDelay={delay}
        initialSmooth={smoothness}
        minDelayValue={minDelay}
        maxDelayValue={maxDelay}
        brightnessChange={brightnessChangeHandler}
        colorChange={colorChangeHandler}
        delayChange={delayChangeHandler}
        smoothChange={smoothChangeHandler}
        setOptions={setOptionsHandler}
        selectedOption={selectedOption}
      />
    </View>
  );
};

export default DeviceView;

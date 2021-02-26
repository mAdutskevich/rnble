import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import styles from './DeviceView.scss';
// import BluetoothSerial from 'react-native-bluetooth-serial';
import BackButton from '@/components/atoms/BackButton';
import DropdownSelect from '@/components/molecules/DropdownSelect';
import ImageBg from '@/images/header-bg.png';
import PlainOptions from '@/components/organisms/PlainOptions';

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

const DeviceView = ({onExit}) => {
  const [selectedOption, setSelectedOption] = useState(pickerOptions[0]);

  const dropdownChangeHandler = (item) => {
    setSelectedOption(item);
  };
  // const [count, setCount] = useState(1);
  // useEffect(() => {
  //     BluetoothSerial.on('connectionLost', () => {
  //         onExit();
  //     })
  // }, []);

  // let nextSwitch = () => {
  //     console.log('count', count);

  //     let preCount;
  //     if (count == 3) {
  //         preCount = 1;
  //     } else {
  //         preCount = count + 1;
  //     }

  //     BluetoothSerial.write(`${count}`)
  //     .then((res) => {
  //         console.log(res);
  //         console.log('Successfuly wrote to device')
  //         setCount(preCount);
  //         // this.setState({ connected: true })
  //     })
  //     .catch((err) => console.log(err.message))
  // }

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

      {/* <View style={styles.modeColorPickerContainer}>
                <Picker />
            </View> */}
      <PlainOptions />
    </View>
  );
};

export default DeviceView;

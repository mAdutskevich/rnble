import React, {useState, useEffect} from 'react';
import {ImageBackground, Text, View, Switch, FlatList} from 'react-native';
import styles from './Main.scss';
import Button from '@/components/atoms/Button';
import DeviceListItem from '@/components/atoms/DeviceListItem';
import ImageBg from '@/images/header-bg.png';
import BluetoothSerial from 'react-native-bluetooth-serial';

import DeviceView from '@/components/templates/DeviceView';
// import {TriangleColorPicker } from 'react-native-color-picker';

const Main = () => {
  const [bleStatus, setBleStatus] = useState(false);
  const [visibleDevices, setVisibleDevices] = useState([]);
  const [connectingProcessSatus, setConnectingProcessSatus] = useState(false);
  const [isDeviceConnected, setIsDeviceConnected] = useState(false);

  const bleStatusHandler = () => {
    if (bleStatus) {
      disableBle();
    } else {
      enableBle();
    }
    setBleStatus(!bleStatus);
  };

  const refreshDevices = () => {
    console.log('refresh devices');

    const devicesPromise = new Promise((resolve) => {
      resolve(BluetoothSerial.list());
    });

    devicesPromise.then((devices) => {
      console.log('devices from bluetoothEnabled', devices);
      setVisibleDevices(devices);
    });
  };

  const enableBle = () => {
    BluetoothSerial.enable()
      .then((isEnabled) => {
        setBleStatus(isEnabled);
        console.log('isEnabled', isEnabled);
      })
      .catch((err) => Toast.showShortBottom(err.message));
  };

  const disableBle = () => {
    BluetoothSerial.disable()
      .then((isEnabled) => {
        console.log('isEnabled', isEnabled);
        setBleStatus(isEnabled);
      })
      .catch((err) => Toast.showShortBottom(err.message));
  };

  const connectDevice = (device) => {
    console.log('connecting start');
    console.log('device', device);
    setConnectingProcessSatus(true);

    // if (device.name == 'BYCIKLE' ) {
    BluetoothSerial.connect(device.id)
      .then((res) => {
        console.log(`Connected to device ${device.name}`);

        setConnectingProcessSatus(false);
        setIsDeviceConnected(true);
      })
      .catch((err) => console.log(err.message));
    // }
  };

  useEffect(() => {
    Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then(
      (values) => {
        const [isEnabled, devices] = values;
        console.log('isEnabled', isEnabled);
        console.log('devices', devices);
        setBleStatus(isEnabled);
        setVisibleDevices(devices);
      },
    );

    BluetoothSerial.on('bluetoothEnabled', () => {
      const devicesPromise = new Promise((resolve) => {
        resolve(BluetoothSerial.list());
      });

      devicesPromise.then((devices) => {
        // console.log('devices', devices);
        console.log('devices from bluetoothEnabled', devices);
        setBleStatus(true);
        setVisibleDevices(devices);
      });
    });

    BluetoothSerial.on('bluetoothDisabled', () => {
      console.log('devices from bluetoothDisabled', []);
      setBleStatus(false);
      setVisibleDevices([]);
    });
  }, []);

  return (
  // <View style={styles.MainContainer}>
  //     <ImageBackground
  //         source={ImageBg}
  //         style={styles.SwitchBleStatusWrapper}
  //     >
  //         <View
  //             style={styles.SwitchBleStatusContent}
  //         >
  //             <Text
  //                 style={styles.SwitchBleStatusTitle}
  //             >
  //                 Turn On Bluetooth
  //             </Text>

  //             <View
  //                 style={styles.SwitchBleStatusButton}
  //             >
  //                 <Switch
  //                     trackColor={{true: 'white', false: '#e2e2e2'}}
  //                     thumbColor={bleStatus ? "#FAD961" : "#ffffff"}
  //                     value={bleStatus}
  //                     onValueChange={bleStatusHandler}
  //                 />
  //             </View>
  //         </View>

  //         <Button
  //             title="Refresh Devices"
  //             onPress={refreshDevices}
  //             isDisabled={!bleStatus}
  //         />
  //     </ImageBackground>

  //     <FlatList
  //         style={styles.DevicesContainer}
  //         data={visibleDevices}
  //         initialNumToRender={visibleDevices.length}
  //         keyExtractor={item => `${Math.floor(Math.random() * 1001)}-${item.name}`}
  //         renderItem={item => {
  //             return (
  //                 <DeviceListItem
  //                     onPress={connectDevice}
  //                     title={item.item.name ? item.item.name : item.item.id}
  //                 />
  //             )
  //         }}
  //     />
  // </View>

    <DeviceView />
  );
};

export default Main;

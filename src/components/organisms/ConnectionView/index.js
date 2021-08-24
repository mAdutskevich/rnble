
import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial';
import styles from './ConnectionView.scss';

import ControlButton from '@/components/atoms/ControlButton';
import DeviceListItem from '@/components/atoms/DeviceListItem';
import Button from '@/components/atoms/Button';

import IconBluetooth from '@/icons/IconBluetooth';
import IconRefresh from '@/icons/IconRefresh';
import IconSettings from '@/icons/IconSettings';


const ConnectionView = ({
  onSettingsClick,
  setIsDeviceConnected
}) => {
  const [bluetoothStatus, setBluetoothStatus] = useState(false);
  const [visibleDevices, setVisibleDevices] = useState([]);
  const [connectingProcessSatus, setConnectingProcessSatus] = useState(false);

  const handleBluetoothStatus = () => {
    console.log()
    if (bluetoothStatus) {
      disableBle();
    } else {
      enableBle();
    }

    setBluetoothStatus(!bluetoothStatus);
  };

  const handleRefreshDevices = () => {
    setVisibleDevices([]);

    setTimeout(() => {
      const devicesPromise = new Promise((resolve) => {
        resolve(BluetoothSerial.list());
      });
  
      devicesPromise.then((devices) => {
        console.log('devices from bluetoothEnabled', devices);
        setVisibleDevices(devices);
      });
    }, 1000);
  };

  const enableBle = () => {
    BluetoothSerial.enable()
      .then((isEnabled) => {
        setBluetoothStatus(isEnabled);
      })
      .catch((err) => Toast.showShortBottom(err.message));
  };

  const disableBle = () => {
    BluetoothSerial.disable()
      .then((isEnabled) => {
        // console.log('isEnabled', isEnabled);
        setBluetoothStatus(isEnabled);
      })
      .catch((err) => Toast.showShortBottom(err.message));
  };

  const connectDevice = device => {
    // console.log('connecting start');
    // console.log('device', device);
    setConnectingProcessSatus(true);

    // if (device.name == 'BYCIKLE' ) {
    BluetoothSerial.connect(device.item.id)
      .then((res) => {
        // console.log(`Connected to device ${device.item.name}`);

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
        // console.log('isEnabled', isEnabled);
        // console.log('devices', devices);
        setBluetoothStatus(isEnabled);
        setVisibleDevices(devices);
      },
    );

    BluetoothSerial.on('bluetoothEnabled', () => {
      const devicesPromise = new Promise((resolve) => {
        resolve(BluetoothSerial.list());
      });

      devicesPromise.then((devices) => {
        // console.log('devices from bluetoothEnabled', devices);
        setBluetoothStatus(true);
        setVisibleDevices(devices);
      });
    });

    BluetoothSerial.on('bluetoothDisabled', () => {
      // console.log('devices from bluetoothDisabled', []);
      setBluetoothStatus(false);
      setVisibleDevices([]);
    });

    BluetoothSerial.on('connectionLost', () => {
      setIsDeviceConnected(false);
    });
  }, []);

  return (
    <View
      style={styles.ConnectionView}
    >
      <View
        style={styles.ConnectionViewControlButtons}
      >
        <View
          style={styles.ConnectionViewControlButtonWrapperLeft}
        >
          <ControlButton
            onPress={handleBluetoothStatus}
            isActive={bluetoothStatus}
          >
            <IconBluetooth 
              fill="#fff"
            />
          </ControlButton>
        </View>

        <View
          style={styles.ConnectionViewControlButtonWrapperRight}
        >
          <ControlButton
            onPress={handleRefreshDevices}
          >
            <IconRefresh 
              fill="#fff"
            />
          </ControlButton>
        </View>
      </View>

      <View
        style={styles.ConnectionViewDevicesListWrapper}
      >
        <FlatList
          style={styles.ConnectionViewDevicesList}
          data={visibleDevices}
          initialNumToRender={visibleDevices.length}
          keyExtractor={item => `${Math.floor(Math.random() * 1001)}-${item.name}`}
          renderItem={item => {
            return (
              <DeviceListItem
                onPressHandler={connectDevice}
                title={item.item.name ? item.item.name : item.item.id}
                device={item}
              />
            );
          }}
        />
      </View>

      <View
        style={styles.ConnectionViewSettingWrapper}
      >
        <Button 
          icon={
            <IconSettings
              width="40"
              height="40"
              viewBox="0 0 50 50"
              fill="#FFB422"
            />
          }
          onPress={onSettingsClick}
        />
      </View>
    </View>
  );
};

export default ConnectionView;

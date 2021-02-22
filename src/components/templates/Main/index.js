import React, { useState, useEffect } from 'react';
import { 
    ImageBackground, 
    Text, 
    View,
    Switch
} from 'react-native';
import styles from './Main.scss';
import Button from '@/components/atoms/Button';
import ImageBg from '@/images/header-bg.png';
import BluetoothSerial from 'react-native-bluetooth-serial';
// import {TriangleColorPicker } from 'react-native-color-picker';

const Main = () => {
    const [ bleStatus, setBleStatus ] = useState(false);
    const [ visibleDevices, setVisibleDevices ] = useState([]);

    const bleStatusHandler = () => {
        if (bleStatus) {
            disableBle();
        } else {
            enableBle();
        }
        setBleStatus(!bleStatus);
    }

    const refreshDevices = () => {
    
    }

    const enableBle = () => {
        BluetoothSerial.enable()
        .then(isEnabled => {
            setBleStatus(isEnabled);
            console.log('isEnabled', isEnabled);
        })
        .catch((err) => Toast.showShortBottom(err.message))
    }

    const disableBle = () => {
        BluetoothSerial.disable()
        .then(isEnabled => {
            console.log('isEnabled', isEnabled);
            setBleStatus(isEnabled);
        })
        .catch((err) => Toast.showShortBottom(err.message))
    }

    useEffect(() => {
        Promise.all([
            BluetoothSerial.isEnabled(),
            BluetoothSerial.list()
        ])
        .then(values => {
            const [ isEnabled, devices ] = values;
            console.log('isEnabled', isEnabled);
            console.log('devices', devices);
            setBleStatus(isEnabled);
            setVisibleDevices(devices);
        })


        BluetoothSerial.on('bluetoothEnabled', () => {
            const devicesPromise = new Promise(resolve => {
                resolve(BluetoothSerial.list());
            })
            
            devicesPromise.then(devices => {
                // console.log('devices', devices);
                console.log('devices from bluetoothEnabled', devices);
                setBleStatus(true);
                setVisibleDevices(devices);
            })
        });

        BluetoothSerial.on('bluetoothDisabled', () => {
            console.log('devices from bluetoothDisabled', []);
            setBleStatus(false);
            setVisibleDevices([]);
        });
    }, []);

    return (
        <ImageBackground 
            source={ImageBg} 
            style={styles.SwitchBleStatusWrapper}
        >
            <View 
                style={styles.SwitchBleStatusContent}
            >
                <Text 
                    style={styles.SwitchBleStatusTitle}
                >
                    Turn On Bluetooth
                </Text>
                
                <View 
                    style={styles.SwitchBleStatusButton}
                >
                    <Switch
                        trackColor={{true: 'white', false: '#e2e2e2'}}
                        thumbColor={bleStatus ? "#FAD961" : "#ffffff"}
                        value={bleStatus}
                        onValueChange={bleStatusHandler}
                    />
                </View>
            </View>

            <Button 
                title="Refresh Devices" 
                onPress={refreshDevices} 
                isDisabled={!bleStatus}
            />
        </ImageBackground>
    )
};

export default Main;

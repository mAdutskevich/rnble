import React, { useState } from 'react';
import { 
    ImageBackground, 
    Text, 
    View,
    Switch
} from 'react-native';
import styles from './Main.scss';
import AppButton from '@/components/atoms/AppButton';
import ImageBg from '@/images/header-bg.png';
// import classNames from 'classnames';
// import BluetoothSerial from 'react-native-bluetooth-serial';
// import {TriangleColorPicker } from 'react-native-color-picker';

const Main = () => {
    const [ bleStatus, setBleStatus ] = useState(false)

    const bleStatusHandler = () => {
        setBleStatus(!bleStatus);
    }

    const discoverAvailableDevices = () => {
    
    }

    return (
        <ImageBackground source={ImageBg} style={styles.SwitchBleStatusWrapper}>
            <View style={styles.SwitchBleStatusContent}>
                <Text style={styles.SwitchBleStatusTitle}>Turn On Bluetooth</Text>
                <View style={styles.SwitchBleStatusButton}>
                <Switch
                    trackColor={{true: 'white', false: '#e2e2e2'}}
                    thumbColor={ bleStatus ? "#FAD961" : "#ffffff"}
                    value={bleStatus}
                    onValueChange={bleStatusHandler}
                />
                </View>
            </View>

            <AppButton title="Refresh Devices" onPress={discoverAvailableDevices} />
        </ImageBackground>
    )
};

export default Main;

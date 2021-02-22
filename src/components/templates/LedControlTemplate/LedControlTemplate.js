import React, {useState, useEffect} from 'react';
import { ImageBackground, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import styles from './LedControlTemplate.scss';
import classNames from 'classnames';
import BluetoothSerial from 'react-native-bluetooth-serial';
import {TriangleColorPicker } from 'react-native-color-picker';

import ExitButton from '../../atoms/ExitButton';
// import bgImage from '../../images/header-bg.png';

const Picker = () => (
    <TriangleColorPicker
        onColorChange={color => {}}
        style={styles.modeColorPicker}
    />
)

const LedControlTemplate = ({onExit}) => {
    const [count, setCount] = useState(1);
    useEffect(() => {
        BluetoothSerial.on('connectionLost', () => {
            onExit();
        })
    }, []);

    let nextSwitch = () => {
        console.log('count', count);
        
        let preCount;
        if (count == 3) {
            preCount = 1;
        } else {
            preCount = count + 1;
        }

        BluetoothSerial.write(`${count}`)
        .then((res) => {
            console.log(res);
            console.log('Successfuly wrote to device')
            setCount(preCount);
            // this.setState({ connected: true })
        })
        .catch((err) => console.log(err.message))
    }

    return (
        <View style={styles.ModeContainer}>
            <Text>Hello</Text>
            {/* <ImageBackground source={bgImage} style={styles.exitContainer}>
                <ExitButton onPress={onExit} />
            </ImageBackground> */}

            {/* <View style={styles.modeButtonContainer}>
                <TouchableOpacity onPress={nextSwitch} style={styles.modeButton}>
                    <Text style={styles.modeButtonText}>Next</Text>
                </TouchableOpacity>
            </View> */}

            {/* <View style={styles.modeColorPickerContainer}>
                <Picker />
            </View> */}
        </View>
    )
}

export default LedControlTemplate;

// const styles = StyleSheet.create({
//     modeContainer: {
//         flex: 1,
//         flexDirection: 'column',

//     },
//     exitContainer: {
//         paddingVertical: 30,
//         paddingHorizontal: 10
//     },
//     modeButtonContainer: {
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     modeButton: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F76B1C',
//         width: 200,
//         height: 200,
//         borderRadius: 100,
//     },
//     modeButtonText: {
//         color: '#ffffff',
//         fontSize: 42,
//         fontWeight: 'bold',
//     },
//     modeColorPickerContainer: {
//         width: '100%',
//         height: 300,
//         justifyContent: 'center',
//     },
//     modeColorPicker: {
//         width: '100%',
//         height: '100%',
//     }
// });
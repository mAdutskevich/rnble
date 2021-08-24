import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Alert,
} from 'react-native';
import styles from './SettingsView.scss';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '@/components/atoms/Button';
import IconBack from '@/icons/IconBack';
import FormInput from '@/components/atoms/FormInput';

const SettingsView = ({
  onExitSettingsClick,
}) => {
  const [ledQuantity, setLedQuantity] = useState(null);

  useEffect(() => {
    getData('@ledQuantity');
    console.log('ledQuantity useEffect', ledQuantity);
  }, []);

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
      Alert.alert('', 'Data successfully saved');
    } catch (e) {
      Alert.alert('', 'Failed to save the data to the storage');
      // saving error
    }
  }

  const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null) {
        setLedQuantity(value);
      } else {
        storeData('@ledQuantity', 10);
        setLedQuantity(10);
      }
    } catch(e) {
      // error reading value
    }
  }

  const handleOnSaveSettingsClick = () => {
    storeData('@ledQuantity', ledQuantity);
  };
  
  const handleOnChangeLedsQuantity = value => {
    setLedQuantity(value);
  };

  return (
    <View
      style={styles.SettingsView}
    >
      <View
        style={styles.SettingsViewHeader}
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
          onPress={onExitSettingsClick}
        />

        <Button
          title="Save"
          onPress={handleOnSaveSettingsClick}
        />
      </View>  

      <SafeAreaView
        style={styles.SettingsViewContent}
      >
        <FormInput 
          title="Leds quantity"
          value={ledQuantity}
          keyboardType="numeric"
          onChangeValue={handleOnChangeLedsQuantity}
        />
      </SafeAreaView>  
    </View>
  );
};

export default SettingsView;

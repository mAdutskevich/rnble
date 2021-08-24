import React, {useState, useEffect} from 'react';
import {ImageBackground, Text, View, Switch, FlatList} from 'react-native';
import styles from './AppLayout.scss';
import DeviceView from '@/components/organisms/DeviceView';
import ConnectionView from '@/components/organisms/ConnectionView';
import SettingsView from '@/components/organisms/SettingsView';

const AppLayout = () => {
  const [isDeviceConnected, setIsDeviceConnected] = useState(false);
  const [isSettings, setIsSettings] = useState(false);

  const handleOnExit = () => {
    setIsDeviceConnected(false);
  };

  const handleOnSettingsClick = () => {
    setIsSettings(true);
  };

  const handleOnExitSettingsClick = () => {
    setIsSettings(false);
  };

  const handleSetIsDeviceConnected = status => {
    setIsDeviceConnected(status);
  };

  return (
    <View style={styles.MainContainer}>
      {!isDeviceConnected && !isSettings &&
        <ConnectionView 
          onSettingsClick={handleOnSettingsClick}
          setIsDeviceConnected={handleSetIsDeviceConnected}
        />
      }

      {isDeviceConnected && !isSettings &&
        <DeviceView 
          onExit={handleOnExit}
          onSettingsClick={handleOnSettingsClick}
        />
      }

      {isSettings && 
        <SettingsView 
          onExitSettingsClick={handleOnExitSettingsClick}
        />
      }
    </View>
  );
};

export default AppLayout;

import React from 'react';
import { TouchableOpacity, Text, View, ImageBackground} from 'react-native';
import propTypes from 'prop-types';
import styles from './DeviceListItem.scss';

const DeviceListItem = ({ device, title, onPressHandler, isActive }) => {
  const deviceListItemStyles = [
    styles.DeviceListItem,
    isActive ? styles.DeviceListItemActive : null
  ];

  const chooseItemHandler = () => {
    onPressHandler(device);
  };

  return (
    <TouchableOpacity 
      onPress={chooseItemHandler}
      style={styles.DeviceListItemWrapper}
    >
      <View
        style={deviceListItemStyles}
      >
        <Text
          style={styles.DeviceListItemTitle}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

DeviceListItem.propTypes = {
  device: propTypes.object,
  title: propTypes.string,
  isActive: propTypes.bool,
  onPressHandler: propTypes.func,
};

DeviceListItem.defaultProps = {
  title: 'Default title',
};

export default DeviceListItem;

import React from 'react';
import { TouchableOpacity, Text, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
import styles from './DeviceListItem.scss';
import ImageBg from '@/images/header-bg.png';

const DeviceListItem = ({ device, title, onPressHandler }) => {
  const chooseItemHandler = () => {
    onPressHandler(device);
  };

  return (
    <TouchableOpacity 
      onPress={chooseItemHandler}
      style={styles.DeviceListItem}
    >
      <ImageBackground
        source={ImageBg}
        style={styles.DeviceListItemBg}
      >
        <Text
          style={styles.DeviceListItemTitle}
        >
          {title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

DeviceListItem.propTypes = {
  device: PropTypes.object,
  title: PropTypes.string,
  onPressHandler: PropTypes.func,
};

DeviceListItem.defaultProps = {
  title: 'Default title',
};

export default DeviceListItem;

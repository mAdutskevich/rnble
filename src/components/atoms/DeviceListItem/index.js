import React from 'react';
import { TouchableOpacity, Text, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
import styles from './DeviceListItem.scss';
import ImageBg from '@/images/header-bg.png';

const DeviceListItem = ({ title, onPress }) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
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
  title: PropTypes.string,
  onPress: PropTypes.func,
};

DeviceListItem.defaultProps = {
  title: 'Default title',
};

export default DeviceListItem;

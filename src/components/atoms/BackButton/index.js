import React from 'react';
import {TouchableOpacity, Text, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
import styles from './BackButton.scss';
import ImageBackButton from '@/images/backButton.png';

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.BackButton}
    >
      <ImageBackground
        source={ImageBackButton}
        style={styles.BackButtonBg}
      />

      <Text
        style={styles.BackButtonText}
      >
        Back
      </Text>
    </TouchableOpacity>
  );
};

BackButton.propTypes = {
  onPress: PropTypes.func,
};

export default BackButton;

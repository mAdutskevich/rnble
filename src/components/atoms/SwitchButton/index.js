import React from 'react';
import { View, Text, Switch } from 'react-native';
import PropTypes from 'prop-types';
import styles from './SwitchButton.scss';

const SwitchButton = ({ title, value, onChange }) => {
  return (
    <View
      style={styles.SwitchButtonWrapper}
    >
      <Text
        style={styles.SwitchButtonTitle}
      >
        {title}
      </Text>

      <View
        style={styles.SwitchButtonStatusButton}
      >
        <Switch
          trackColor={{true: 'white', false: '#e2e2e2'}}
          thumbColor={value ? '#FAD961' : '#ffffff'}
          value={value}
          onValueChange={onChange}
        />
      </View>
    </View>
  );
};

SwitchButton.propTypes = {
  title: PropTypes.string,
  value: PropTypes.bool,
  onPress: PropTypes.func,
};

SwitchButton.defaultProps = {
  title: 'Switch Button',
  value: false,
};
  
export default SwitchButton;

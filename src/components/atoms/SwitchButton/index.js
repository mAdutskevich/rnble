import React from 'react';
import { View, Text, Switch } from 'react-native';
import propTypes from 'prop-types';
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
  title: propTypes.string,
  value: propTypes.bool,
  onPress: propTypes.func,
};

SwitchButton.defaultProps = {
  title: '',
  value: false,
};
  
export default SwitchButton;

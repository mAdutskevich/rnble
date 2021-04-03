import React, { useState } from 'react';
import {TextInput, Text, View} from 'react-native';
import propTypes from 'prop-types';
import styles from './FormInput.scss';

const FormInput = ({ title, value,  placeholder, keyboardType, onChangeValue }) => {
  return (
    <View
      style={styles.FormInput}
    >
      {!!title &&
        <Text
          style={styles.FormInputTitle}
        >
          {title}
        </Text>
      }

      <TextInput
        style={styles.FormInputTextInput}
        onChangeText={onChangeValue}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  );
};

FormInput.propTypes = {
  title: propTypes.string,
  value: propTypes.oneOfType([
    propTypes.string,
    propTypes.number
  ]),
  placeholder: propTypes.string,
  keyboardType: propTypes.string,
  onChangeValue: propTypes.func,
};

FormInput.defaultProps = {
  ledQuantity: 0,
};

export default FormInput;

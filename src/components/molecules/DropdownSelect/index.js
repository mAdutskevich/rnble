import React, {useState} from 'react';
import {View, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
import styles from './DropdownSelect.scss';
import DropDownPicker from 'react-native-dropdown-picker';
import ImageArrow from '@/images/arrow.png';

const DropdownSelect = ({ options, onChange }) => {
  return (
    <View 
      styles={styles.DropdownSelect}
    >
      <DropDownPicker
        showArrow={false}
        items={options}
        defaultValue={options[0].value}
        containerStyle={styles.DropDownPickerContainer}
        dropDownStyle={{backgroundColor: 'red'}}
        style={styles.DropDownPickerSelect}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={onChange}
      />
      <ImageBackground
        source={ImageArrow}
        style={styles.DropdownSelectArrow}
      />
    </View>
  );
};

DropdownSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
};

export default DropdownSelect;

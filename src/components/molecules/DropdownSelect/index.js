import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
import styles from './DropdownSelect.scss';
import OptionListItem from '@/components/atoms/OptionListItem';
import ImageArrow from '@/images/arrow.png';

const DropdownSelect = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const onPressHandler = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = option => {
    setIsOpen(false);
    setSelectedOption(option.item);
    onChange(option.item);
  };

  return (
    <View
      style={styles.DropdownSelect}
    >
      <TouchableOpacity
        style={styles.DropdownSelectPicker}
        onPress={onPressHandler}
      >
        <Text
          style={styles.DropDownPickerSelectText}
        >
          {selectedOption.label}
        </Text>

        <ImageBackground
          source={ImageArrow}
          style={styles.DropdownSelectArrow}
        />
      </TouchableOpacity>

      {isOpen && 
        <View>
          <FlatList
            style={styles.OptionsContainer}
            data={options}
            initialNumToRender={options.length}
            keyExtractor={item => `${Math.floor(Math.random() * 10000000)}-${item.value}`}
            renderItem={item => {
              return (
                <OptionListItem
                  onPressHandler={selectOption}
                  title={item.item.label}
                  option={item}
                />
              );
            }}
          />
        </View>
      }
    </View>
  );
};

DropdownSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
};

DropdownSelect.defaultProps = {
  options: [
    {
      label: 'Plain',
      value: 'plain',
    },
    {
      label: 'Blink',
      value: 'blink',
    },
    {
      label: 'Sinelon',
      value: 'sinelon',
    },
    {
      label: 'Rainbow',
      value: 'rainbow',
    },
  ],
};

export default DropdownSelect;

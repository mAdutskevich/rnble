import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import propTypes from 'prop-types';
import styles from './OptionListItem.scss';

const OptionListItem = ({ option, title, onPressHandler }) => {
  const chooseOptionHandler = () => {
    onPressHandler(option);
  };

  return (
    <TouchableOpacity 
      onPress={chooseOptionHandler}
      style={styles.OptionListItem}
    >
      <Text
        style={styles.OptionListItemTitle}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

OptionListItem.propTypes = {
  option: propTypes.object,
  title: propTypes.string,
  onPressHandler: propTypes.func,
};

OptionListItem.defaultProps = {
  title: 'Default title',
};

export default OptionListItem;

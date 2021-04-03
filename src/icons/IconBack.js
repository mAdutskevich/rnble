import * as React from "react";
import Svg, {Path} from 'react-native-svg';
import propTypes from 'prop-types';

const IconBack = ({ width, height, viewBox, fill }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
    >
      <Path
        d="M16.3103 8.02866C17.0151 7.32378 18.1248 7.32378 18.8297 8.02866C19.5108 8.70973 19.5108 9.84325 18.8297 10.5227L6.05458 23.2979H48.2108C49.1935 23.2979 50 24.079 50 25.0617C50 26.0444 49.1935 26.8508 48.2108 26.8508H6.05458L18.8297 39.6022C19.5108 40.3071 19.5108 41.4422 18.8297 42.1216C18.1248 42.8265 17.0151 42.8265 16.3103 42.1216L0.510799 26.3222C-0.170266 25.6411 -0.170266 24.5076 0.510799 23.8281L16.3103 8.02866Z"
        fill={fill}
      />
    </Svg>
  );
};

IconBack.propTypes = {
    width: propTypes.string,
    height: propTypes.string,
    viewBox: propTypes.string,
    fill: propTypes.string,
};

IconBack.defaultProps = {
    width: '50',
    height: '50',
    viewBox: '0 0 50 50',
    fill: '#000',
};

export default IconBack;

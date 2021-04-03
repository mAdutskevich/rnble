import * as React from "react";
import Svg, {Path} from 'react-native-svg';
import propTypes from 'prop-types';

const IconBluetooth = ({ width, height, viewBox, fill }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
    >
      <Path
        d="M26.046 50a1.042 1.042 0 01-1.042-1.042V27.37L14.25 37.227a1.042 1.042 0 11-1.408-1.535l11.662-10.691-11.666-10.69a1.042 1.042 0 011.408-1.535l10.758 9.856V1.044a1.042 1.042 0 011.779-.738l12.5 12.5a1.042 1.042 0 01-.034 1.504L27.587 25l11.666 10.69a1.042 1.042 0 01.034 1.504l-12.5 12.5a1.042 1.042 0 01-.741.306zm1.041-22.63v19.074l9.952-9.952-9.952-9.122zm0-23.812v19.074l9.952-9.122-9.952-9.952z"
        fill={fill}
      />
    </Svg>
  );
};

IconBluetooth.propTypes = {
    width: propTypes.string,
    height: propTypes.string,
    viewBox: propTypes.string,
    fill: propTypes.string,
};

IconBluetooth.defaultProps = {
    width: '50',
    height: '50',
    viewBox: '0 0 50 50',
    fill: '#000',
};

export default IconBluetooth;

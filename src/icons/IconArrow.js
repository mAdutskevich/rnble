import * as React from "react";
import Svg, {Path, G, Defs, ClipPath, Rect} from 'react-native-svg';
import propTypes from 'prop-types';

const IconArrow = ({ width, height, viewBox, fill }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
    >
      <G clip-path="url(#clip0)">
        <Path
          d="M26.3721 37.9321L49.4346 14.8056C50.1898 14.0479 50.1885 12.8211 49.4307 12.0647C48.673 11.3088 47.4455 11.3108 46.6898 12.0686L24.9999 33.8185L3.31016 12.0678C2.55431 11.3101 1.32765 11.3081 0.569841 12.0639C0.18996 12.4431 1.73423e-05 12.9399 1.73206e-05 13.4366C1.72989e-05 13.9321 0.18869 14.427 0.565934 14.8055L23.6279 37.9321C23.9909 38.297 24.4851 38.5018 24.9999 38.5018C25.5148 38.5018 26.0083 38.2964 26.3721 37.9321Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect 
            width="50" 
            height="50"
            fill={fill}
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

IconArrow.propTypes = {
  width: propTypes.string,
  height: propTypes.string,
  viewBox: propTypes.string,
  fill: propTypes.string,
};

IconArrow.defaultProps = {
  width: '50',
  height: '50',
  viewBox: '0 0 50 50',
  fill: '#000',
};

export default IconArrow;

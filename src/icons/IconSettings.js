import * as React from "react";
import Svg, {Path, G, Defs, ClipPath, Rect} from 'react-native-svg';
import propTypes from 'prop-types';

const IconSettings = ({ width, height, viewBox, fill }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
    >
      <G clip-path="url(#clip0)">
        <Path
          d="M48.8235 19.3069L44.9806 18.4715C44.6465 17.4484 44.2326 16.4505 43.7439 15.4892L45.8714 12.1799C46.2513 11.5887 46.1678 10.8124 45.6711 10.3157L39.6843 4.32892C39.1876 3.83224 38.4113 3.7487 37.8201 4.12865L34.5108 6.2561C33.5495 5.76744 32.5516 5.35355 31.5285 5.01938L30.6931 1.17645C30.5439 0.489807 29.9358 0 29.2332 0H20.7668C20.0642 0 19.4561 0.489807 19.3069 1.17645L18.4715 5.01938C17.4484 5.35355 16.4505 5.76744 15.4892 6.2561L12.1799 4.12865C11.5887 3.7487 10.8124 3.83224 10.3157 4.32892L4.32892 10.3157C3.83224 10.8124 3.7487 11.5887 4.12865 12.1799L6.2561 15.4892C5.76744 16.4505 5.35355 17.4484 5.01938 18.4715L1.17645 19.3069C0.489807 19.4565 0 20.0642 0 20.7668V29.2332C0 29.9358 0.489807 30.5435 1.17645 30.6931L5.01938 31.5285C5.35355 32.5516 5.76744 33.5495 6.2561 34.5108L4.12865 37.8201C3.7487 38.4113 3.83224 39.1876 4.32892 39.6843L10.3157 45.6711C10.8124 46.1678 11.5887 46.2513 12.1799 45.8714L15.4892 43.7439C16.4505 44.2326 17.4484 44.6465 18.4715 44.9806L19.3069 48.8235C19.4561 49.5102 20.0642 50 20.7668 50H29.2332C29.9358 50 30.5439 49.5102 30.6931 48.8235L31.5285 44.9806C32.5516 44.6465 33.5495 44.2326 34.5108 43.7439L37.8201 45.8714C38.4113 46.2513 39.1876 46.1681 39.6843 45.6711L45.6711 39.6843C46.1678 39.1876 46.2513 38.4113 45.8714 37.8201L43.7439 34.5108C44.2326 33.5495 44.6465 32.5516 44.9806 31.5285L48.8235 30.6931C49.5102 30.5435 50 29.9358 50 29.2332V20.7668C50 20.0642 49.5102 19.4565 48.8235 19.3069V19.3069ZM33.9642 25C33.9642 29.9427 29.9427 33.9642 25 33.9642C20.0573 33.9642 16.0358 29.9427 16.0358 25C16.0358 20.0573 20.0573 16.0358 25 16.0358C29.9427 16.0358 33.9642 20.0573 33.9642 25V25Z" 
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

IconSettings.propTypes = {
    width: propTypes.string,
    height: propTypes.string,
    viewBox: propTypes.string,
    fill: propTypes.string,
};

IconSettings.defaultProps = {
    width: '50',
    height: '50',
    viewBox: '0 0 50 50',
    fill: '#000',
};

export default IconSettings;
